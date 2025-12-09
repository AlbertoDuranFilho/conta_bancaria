import prompt = require("readline-sync");
import process = require('node:process');
import { colors } from './src/util/Colors';
import { Conta } from './src/model/Conta'
import { ContaPoupanca } from "./src/model/ContaPoupanca";
import { ContaCorrente } from "./src/model/ContaCorrente";

export function main() {

    let opcao: number = 0;

    const contacorrente: ContaCorrente = new ContaCorrente(2, 123, 1, "Mariana", 15000, 1000);
    contacorrente.visualizar();
    contacorrente.sacar(2000);
    contacorrente.visualizar();
    contacorrente.depositar(1000);
    contacorrente.visualizar();

    const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Victor", 1000, 10);
    contapoupanca.visualizar();
    contapoupanca.sacar(200);
    contapoupanca.visualizar();
    contapoupanca.depositar(1000);
    contapoupanca.visualizar();

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
                keyPress()
                break;
            case 2:
                console.log(colors.fg.whitestrong,"\n\nListar todas as Contas\n\n", colors.reset);
                keyPress()
                break;
            case 3:
                console.log(colors.fg.whitestrong,"\n\nConsultar dados da Conta - por número\n\n", colors.reset);
                keyPress()
                break;
            case 4:
                console.log(colors.fg.whitestrong,"\n\nAtualizar dados da Conta\n\n", colors.reset);
                keyPress()
                break;
            case 5:
                console.log(colors.fg.whitestrong,"\n\nApagar uma Conta\n\n", colors.reset);
                keyPress()
                break;
            case 6:
                console.log(colors.fg.whitestrong,"\n\nSaque\n\n", colors.reset);
                keyPress()
                break;
            case 7:
                console.log(colors.fg.whitestrong,"\n\nDepósito\n\n", colors.reset);
                keyPress()
                break;
            case 8:
                console.log(colors.fg.whitestrong,"\n\nTransferência entre Contas\n\n", colors.reset);
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