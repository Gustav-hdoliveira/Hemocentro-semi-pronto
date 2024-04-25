let arraycadastros = [cadastro]

const readlineSync = require('readline-sync');
console.log("Olá bem vindo ao Hemocentro, por favor cadastrece aqui para mais informações");
const cadastronome = readlineSync.question("Seu nome: ")
const cadastroidade = readlineSync.question("Sua idade: ")
const cadastropeso = readlineSync.question("Seu peso (por kilos): ")
const cadastrosanguetipo = readlineSync.question("Seu tipo sanguineo: ")
const ultimadoacao = readlineSync.question("A data da sua ultima doação: ")
const cadastro = {
    nome: cadastronome,
    idade: cadastroidade,
    peso: cadastropeso,
    tiposanguineo: cadastrosanguetipo,
    ultimadoacao: ultimadoacao
}
function exibirmenu() {
    console.log("==============SISTEMA DE CADASTRO DE DOADORES DE SANGUE==============")
    console.log("1. CADASTRAR NOVO DOADOR.")
    console.log("2. LISTAR DOADORES.")
    console.log("3. BUSCAR DOADOR POR TIPO SANGUINEO")
    console.log("4. BUSCAR DOADOR POR DATA DA ULTIMA DOAÇÃO.")
    console.log("5. SAIR.")
}
exibirmenu()

//funções para as opções:
function OP1() {
    console.log("Você selecionou a opção 1. para fazer login como novo doador, coloque os dados do novo doador: ")
    const novocadnome = readlineSync.question("Nome: ")
    const novocadidade = readlineSync.question("Idade: ")
    const novocadpeso = readlineSync.question("Peso(por kilos): ")
    const novocadsanguetip = readlineSync.question("Seu tipo sanguineo: ")
    const novocadultimadoac = readlineSync.question("data da ultima doação: ")
    novocadastrado = {
        nome: novocadnome,
        idade: novocadidade,
        peso: novocadpeso,
        tiposanguineo: novocadsanguetip,
        ultimadoacao: novocadultimadoac
    }
    arraycadastros.push(novocadastrado)
}
function OP2() {
    console.log("----------------------")
    console.log("LISTAGEM DE DOADORES")
    console.log("----------------------")
    console.log("NOME           | PESO | IDADE | TIPO SANGUINEO | ULTIMA DOAÇÃO")
    console.log("---------------------------------------------------------------")
    console.log(arraycadastros[0])
    console.log(arraycadastros[1])
    console.log(arraycadastros[2])
    console.log(arraycadastros[3])
    console.log(arraycadastros[4])
    console.log("---------------------------------------------------------------")
}
function OP3() {
    const tiposanguineodebusca = readlineSync.question("Celecione o tipo sanguineo que deseja: ")
    function sangues(arraycadastros) {
        return arraycadastros === tiposanguineodebusca;
    }
    const sanguefiltrado = arraycadastros.filter(sangues);
    console.log(sanguefiltrado);
}
function OP4() {
    const datadesejada = readlineSync.question("Celecione a data dejada pra a filtragem")
    function datas() {
        return datadesejada === arraycadastros;
    }
    const datascelecionadas = arraycadastros.filter(datas);
    console.log(datascelecionadas); 
}


function processarEscolha(opcao) {
    switch (opcao) {
        case 1:
            OP1()
            break;
        case 2:
            OP2()
            break;
        case 3:
            OP3()
            break;
        case 4:
            OP4()
            break;
        case 5:
            console.log("Encerrando o programa...");
            return true;
    
        default:
            console.log("opção selecionada incorretamente")
            break;
    }
    return false;
}
function rodaralternativas() {
    let encerrar = false;

    while (!encerrar) {
        exibirmenu();
        let opcao = readline.question("Digite o número da opção desejada: ");
        encerrar = processarEscolha(opcao);
    }
}
// Iniciar o programa
rodaralternativas();