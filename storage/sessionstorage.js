//ocalStorage.setItem('nome', 'Camila');

//localStorage.setItem('sobrenome', 'Silva');





//let btn = document.getElementById('botao');





//Estou pendurando o event listener no botao

btn.addEventListener('click', mostrar);



function mostrar(evento){

    evento.preventDefault();



        document.getElementById('entrada');  

        document.getElementById('mostrar');  

        let valor = entrada.value;

        mostrar.innerText = valor;

        entrada.value = '';



        //após obtermos o dado do usuário 

        //vamos guardá-lo no local storage

        localStorage.setItem('dadoDoUsuario', valor);

}

    //Para recuperar o dado do local storage 

    //usamos o localStorage.getItem()

    document.querySelector('#mostrar').innerText = 

        localStorage.getItem('dadoDoUsuario');





    //E para apagar no local storage?

    //removeItem()

    //localStorage.removeItem('dadoDoUsuario');

    let vetor =['pera','banana','manga'];


      //Para guardar algo que não seja uma string
      // no localStorage ou sessionStorage,temos
      //que converter para string.Com o metodo
      //Json.stringify()transformamos vetores
      // e objetos em string
     sessionStorage.setItem('frutas',
                                JSON.stringify(vetor ));
       //Para recuperar uma string JSON do localStorage
       //ou sessionStorage e transforma
       let recupDado = JSON.parse(
                           sessionStorage.
                           getItem('frutas'));


     recupDado[3] = 'morango';
     recupDado[1] = 'parchta';  

     //console.log(recuperado) ;
     
     //Transforma o vetor em string para poder
     //gravar em sessionStorage ou Local
     
     



     console.log(recupDado);     
     
     let strRecupDados = JSON.stringify(recupDado);

     console.log(strRecupDados);

     sessionStorage.setItem('frutas',strRecupDados);
       

    //let recuperaDado = sessionStorage.getItem('frutas');

    //console.log(recuperaDado[0]);
