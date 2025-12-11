import prompt = require("readline-sync");
import process = require('node:process');
import { colors } from './src/util/Colors';
import { Conta } from './src/model/Conta'
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaCorrente } from "./src/model/ContaCorrente";
import { ContaController } from "./src/controller/ContaController";

export function main() {

    let contas: ContaController = new ContaController();

    let opcao, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino: number;
    let titular: string;

    const tiposContas = ['Conta Corrente', 'Conta Poupanca'];

    console.log("\nCriar Contas\n");

    let cc1: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 123, 1, "João da Silva", 1000, 100.0);
    contas.cadastrar(cc1);

    let cc2: ContaCorrente = new ContaCorrente(contas.gerarNumero(), 124, 1, "Maria da Silva", 2000, 100.0);
    contas.cadastrar(cc2);

    let cp1: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Mariana dos Santos", 4000, 12);
    contas.cadastrar(cp1);

    let cp2: ContaPoupanca = new ContaPoupanca(contas.gerarNumero(), 125, 2, "Juliana Ramos", 8000, 15);
    contas.cadastrar(cp2);

    contas.listarTodas();

    while(true){
    console.log(colors.bg.black, colors.fg.yellow,"\n*****************************************************\n");
    
    console.log("*************** BANCO DO BRASIL COM Z ***************");
    
    console.log("\n*****************************************************\n");
    
    console.log("1 - Criar Conta");
    console.log("2 - Listar todas as Contas");
    console.log("3 - Buscar Conta por Numero");
    console.log("4 - Atualizar Dados da Conta");
    console.log("5 - Apagar Conta");
    console.log("6 - Saca");
    console.log("7 - Depositar");
    console.log("8 - Transferir");
    console.log("9 - Sair");
    
    console.log("\n*****************************************************", colors.reset);
    
    opcao = prompt.questionInt("Entre com a opcao desejada: ")

    if(opcao == 9) {
        console.log(colors.fg.greenstrong, "\nBanco do Brazil com Z - O seu Futuro começa aqui!");
        finalizar()
        console.log(colors.reset, "");
        process.exit()
    }
        switch(opcao){
            case 1:
                console.log(colors.fg.whitestrong,"\n\nCriar Conta\n\n", colors.reset);

                console.log("Digite o número da agência: ")
                agencia = prompt.questionInt("")

                console.log("Digite o nome do titular da conta: ")
                titular = prompt.question("")

                console.log("Digite o tipo da conta: ")
                tipo = prompt.keyInSelect(tiposContas,  "", {cancel: false})+ 1;

                console.log("Digite o saldo da conta (R$): ")
                saldo = prompt.questionFloat("")

                switch (tipo){
                    case 1:
                        console.log("Digite o limite da conta R$: ")
                        limite = prompt.questionFloat("");
                        contas.cadastrar(
                            new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular,
                             saldo, limite))
                        break;
                    case 2:
                        console.log("Digite o dia do aniversario da conta poupanca: ")
                        aniversario = prompt.questionInt("");
                        contas.cadastrar(
                            new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular,
                             saldo, aniversario))
                        break;
                }
                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong,"\n\nListar todas as Contas\n\n", colors.reset);
                contas.listarTodas();
                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong,"\n\nConsultar dados da Conta - por número\n\n", colors.reset);

                console.log("Digite o número da conta: ");
                numero = prompt.questionInt("");
                contas. procurarPorNumero(numero);
                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong,"\n\nAtualizar dados da Conta\n\n", colors.reset);

                console.log("Digite o número da conta: ");
                numero = prompt.questionInt("");

                let conta = contas.buscarNoArray(numero);

                if(conta != null){

                    console.log("Digite o número da agência: ")
                    agencia = prompt.questionInt("")

                    console.log("Digite o nome do titular da conta: ")
                    titular = prompt.question("")

                    tipo = conta.tipo;

                    console.log("Digite o saldo da conta (R$): ")
                    saldo = prompt.questionFloat("")

                    switch (tipo){
                        case 1:
                            console.log("Digite o limite da conta R$: ")
                            limite = prompt.questionFloat("");
                            contas.cadastrar(
                                new ContaCorrente(contas.gerarNumero(), agencia, tipo, titular,
                                saldo, limite))
                            break;
                        case 2:
                            console.log("Digite o dia do aniversario da conta poupanca: ")
                            aniversario = prompt.questionInt("");
                            contas.cadastrar(
                                new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular,
                                saldo, aniversario))
                            break;
                    }
                }

                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong,"\n\nApagar uma Conta\n\n", colors.reset);

                console.log("Digite o número da Conta: ");
                numero = prompt.questionInt("");
                contas.deletar(numero);
                keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong,"\n\nSaque\n\n", colors.reset);

                console.log("Digite o número da conta: ");
                numero = prompt.questionInt("");

                console.log("Digite o valor do saque: ");
                valor = prompt.questionFloat("");

                contas.sacar(numero, valor);

                keyPress()
                break;
            case 7:
                console.log(colors.fg.whitestrong,"\n\nDepósito\n\n", colors.reset);

                console.log("Digite o número da conta: ");
                numero = prompt.questionInt("");

                console.log("Digite o valor do saque: ");
                valor = prompt.questionFloat("");

                contas.depositar(numero, valor);
                keyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong,"\n\nTransferência entre Contas\n\n", colors.reset);

                console.log("Digite o número da conta de origem: ");
                numero = prompt.questionInt("");

                console.log("Digite o número da conta de destino: ");
                numeroDestino = prompt.questionInt("");

                console.log("Digite o valor da transferência (R$): ");
                valor = prompt.questionFloat("");

                contas.transferir(numero, numeroDestino , valor);

                keyPress()
                break;
            default:
                console.log(colors.fg.whitestrong,"\nOpção Inválida!\n", colors.reset);
                keyPress()
                break;
        }
    }

} 


export function finalizar(): void{
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Alberto Duran - Generation Brasil");
    console.log("github.com/AlbertoDuranFilho/conta_bancaria");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("Pressione enter para continuar...");
    prompt.prompt();
}

main();