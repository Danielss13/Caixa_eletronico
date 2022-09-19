let nd = 0
let nome = prompt('Digite seu nome: ');
let Saldo = 1000.00
alert(`Olá ${nome}, é um prazer ter você por aqui 😁`);

function inicio(){

    opcoes = Number(prompt('Oque deseja? 1.) Saldo | 2.) Extrato | 3.) Saque | 4.) Depósito  5.) Transferência  | 6.)Sair'));

     switch(opcoes){
         case 1:
            VerSaldo();
            break;
         case 2:
            VerExtrato();
            break;
         case 3:
            RealizarSaque();
            break;
         case 4:
            EfetuarDeposito();
            break;
         case 5:
            FazerTransferencia();
            break;
         case 6:
            Sair();
            break;
         default:
            erro();
            break;

     }       
}

function VerSaldo(){
    senha = Number(prompt('Digite sua senha'));
    
    if (senha != 3589){ //Não for igual//
        alert('SENHA INCORRETA, TENTE NOVAMENTE');  
        VerSaldo() //Sempre que ele errar ira chamar a função dnv//

    }
    
    else if (senha === 3589);//for identica//
           Number(alert('Seu saldo é ' + Saldo));
           inicio();//Foi efetuado o comando, volta pro inicio//

}

function VerExtrato(){
    senha = Number(prompt('Digite sua senha'));
    
    if (senha != 3589){
    alert('SENHA INCORRETA, TENTE NOVAMENTE');   
    VerExtrato();//chamar a funçao para o cliente repetir a senha//
    
}
    else if (senha === 3589);
    alert('Seu extrato// Lojavirtual-KABUM R$500💳 -- Shopping-ORIENTAL R$350💳.')
    inicio();


    }

function RealizarSaque(){
    Saque = Number(prompt('Digite o valor que deseja sacar'));
    senha = Number(prompt('digite sua senha'));
    
    if (senha != 3589){//Se senha não for igual a //
    alert('SENHA INCORRETA, TENTE NOVAMENTE');   
    
}
    else if (Saldo < Saque){
        alert('Operação não autorizada, SALDO INSUFICIENTE 🤡');
        RealizarSaque()
    }

    else if (Saldo <= nd){
        alert('Operação não autorizada, SALDO INSUFICIENTE 😥');
        RealizarSaque()
    }

    else (senha === 3589);{
        Saldo -= Saque
        alert('Saque efetuado com sucesso 🤑');
        alert('Seu saldo atual é ' + Saldo);
        inicio();
    }
}
        


function EfetuarDeposito(){

    deposito = Number(prompt('Qual o valor para depósito? 💸'));

    if (isNaN(deposito) || deposito === '') {
        alert('Por favor, informe apenas números.');
        EfetuarDeposito();

    } else if (deposito <= nd) {
        alert("Operação não autorizada");
        EfetuarDeposito();
    }
    else (Saldo += deposito);{
        alert("Seu saldo atual é: " + Saldo);
        inicio();
    }
}

function FazerTransferencia() {
     tran = Number(prompt('Informe o número da conta: '));

     valorTran = Number(prompt('Informe o valor da transferência: '));

     senha = Number(prompt("Insira sua senha: "));

    if (isNaN(tran) || tran === '') {
        alert('Por favor, informe o número da conta válido:');
        FazerTransferencia();
    }

    else if (senha != 3589) {
        alert('Senha incorreta.');
        FazerTransferencia(); //sempre que o cliente errar chamar a função//
    }

    else if (Saldo < valorTran) {
        alert('Operação não autorizada, SALDO INSUFICIENTE ❌');
        FazerTransferencia();
    }

    else if (valorTran <= nd) {
        alert('Operação não autorizada ❌');
        FazerTransferencia();
    }
    else (senha === 3589); {
        Saldo -= valorTran;
        
        alert('Seu saldo atual é: ' + Saldo);
        inicio();
    }
}

function Sair() {
     confirma = confirm('Deseja sair?');

    if (confirma) {
        alert(`${nome}, foi um prazer ter você por aqui! 🙋`)
        window.close(); //fechar//

    } else {
        inicio();
    }
}

function erro() {
    alert('Por favor, informe uma das opções 1 e 6.');
    inicio();
}

inicio();
