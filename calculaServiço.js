/*
criar uma calculadora de valor a ser
cobrado do cliente.
o valor do serviço pode variar conforme o prazo.
os valores e prazos devem ser armazenados em uma matriz.
calculo deve ficar obrigatoriamente em uma funçao.
*/

let tabela = [ ['$$$','$$','$'],
               ['$$$$',"$$$","$$"],
               ['--','--','$$$']];

        
                let servico = prompt("Entre com o serviço: \n0 - troca de oleo \n1 - Balanceamento\n2 - cambagem");
                let prazo = prompt("Entre com o prazo: \n0 - um dia \n1 - um dia \n2 - dois dias");

                if(validaEntrada(servico)&& validaEntrada(prazo)){
                    
                    alert("O serviço ficara em:" + tabela[servico][prazo]);
                }else{
                    alert("ERRO: Verifique os valores inseridos e tente novamente!");
                }

                function validaEntrada(dadoUsuario){
                    return dadoUsuario >= 0 && dadoUsuario <= 2 ? true : false;

                }