var saldo = 100.5; //Float 1.36
var nome = prompt("Qual seu nome?");

		function inicio() {

            

			var escolha = parseInt(prompt("Olá " + nome + " Selecione uma opção 1.) Saldo 2.) Extrato 3.) Saque 4.) Depósito 5.) Transferência 6.) Sair"));

            switch(escolha){
                case 1:
                    ver_saldo();
                case 2:
                    ver_extrato();
                case 3:
                    fazer_saque();
                case 4: 
                    fazer_deposito();
                case 5:
                    fazer_transferencia();
                case 6:
                    sair();
            }
		}	
        
        function ver_extrato(){
            var ext = ["Mercado ", -200, " Salário ", 2000];
            var senha = Number(prompt("Informe sua senha"));

            if(senha === 3589){
                alert(ext);
            }else{
                alert("Credenciais incorretas, informe novamente");
                ver_saldo();
            }

            inicio();
        }

		function ver_saldo() {
            var senha = Number(prompt("Informe sua senha"));

            if(senha === 3589){
                alert('Seu saldo atual é: ' + saldo);
			inicio();
            }else{
                alert("Credenciais incorretas, informe novamente");
                ver_saldo();
            }

		}

		function fazer_deposito() {
			var deposito = parseFloat(prompt('Qual o valor para depósito?'));
            var senha = Number(prompt("Informe sua senha"));

			if(senha === 3589){
                if (isNaN(deposito) || deposito === '') {
                    alert('Por favor, informe um número:');
                    fazer_deposito();
                }else if(deposito <= 0){
                    alert("Operação não autorizada");
                    fazer_deposito();
                } else {
                    saldo += deposito;
                    ver_saldo();
                }
            }else{
                alert("Credenciais incorretas, informe novamente");
                ver_saldo();
            }
		}

		function fazer_saque() {
			var saque = parseFloat(prompt('Qual o valor para saque?'));
			var senha = Number(prompt("Informe sua senha"));

            if(senha === 3589){
                if (isNaN(saque) || saque === '') {
                    alert('Por favor, informe um número:');
                    fazer_saque();
                }else if(saque > saldo){
                    alert("Operação não autorizada");
                    fazer_saque();
                }else if(saque <= 0){
                    alert("Operação não autorizada");
                    fazer_saque();
                }else {
                    saldo -= saque;
                    
                    ver_saldo();
                }
            }else{
                alert("Credenciais incorretas, informe novamente");
                ver_saldo();
            }
		}

        function fazer_transferencia(){
            var n_conta = Number(prompt("Qual o número da conta?"));
            var quantidade = parseFloat(prompt("Quanto transferir?"));
            var senha = Number(prompt("Informe sua senha"));

            if(senha === 3589){
                if(n_conta = Number){
                    if(saldo < quantidade){
                        alert("Operação não autorizada");
                        fazer_transferencia();
                    }else if(quantidade === ""){
                        alert("Por favor informe a quantidade");
                        fazer_transferencia();
                    }else if(quantidade <= 0){
                        alert("Operação não autorizada");
                        fazer_transferencia();
                    }else if(quantidade != Number){
                        alert("Operação não autorizada");
                        fazer_transferencia();
                    }else{
                        saldo = saldo - quantidade;
                    }
                }else{
                    alert("Por favor informe o número da conta");
                    fazer_transferencia();
                }
            }else{
                alert("Credenciais incorretas, informe novamente");
                ver_saldo();
            }

            inicio();

        }

		function sair() {
			var confirma = confirm('Você deseja sair?');
			if (confirma) {
				alert(nome + ", foi um prazer ter você por aqui!");
                window.close();
			} else {
				inicio();
			}
		}

        function erro() {
			alert('Por favor, informe um número entre 1 e 6');
			inicio();
		}
		
		inicio();