let btnCalcular = document.getElementById('calcular');

btnCalcular.addEventListener('click', function (evento){
    evento.preventDefault();

    let serv = document.getElementById('servico');
    let prazo = document.getElementById('prazo');
    let res =  document.getElementById('resultado');

    /*recuperar os dados da matriz*/
    let preco = calculaPreco(serv.value,prazo.value);

 // mostrar o resultado no elemento p
    res.innerText =`O preço é ${preco}`;

   
//ver dados do evento (click) no console
  // console.log(tabela[serv][prazo]);
    

    
    //ver dados do evento
    console.log (evento);

    //obter os valores de  serviço e prazo
});

function calculaPreco(servico,prazo){
    
    let tabela = [ ['$$$','$$','$'],
    ['$$$$',"$$$","$$"],
    ['--','--','$$$']];
    console.log(tabela[servico][prazo]);
    return tabela[servico][prazo];

}

   

/*btnCalcular.addEventListener('click' , executa ());

function executa ({
    alert('Clicou');
}
*/

//console.log(btnCalcular);



