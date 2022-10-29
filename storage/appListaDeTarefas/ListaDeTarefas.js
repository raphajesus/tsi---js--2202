const entradaTarefa = document.querySelector('#tarefa'); 

const btnAddTarefa = document.querySelector('.btn'); 

const listaDeTarefas = document.querySelector('.collection');

const filtroDeTarefa = document.querySelector('#filtro');

const btnLimpaTudo = document.querySelector('.limpar-tarefas');



function carregaMonitoresDeEventos(){

     //quando a pagina for carregada, chama recuperaTarefas
    document.addEventListener('DOMcontentLoaded', recuperaTarefas);
     //evento para adicionar tarefa
    btnAddTarefa.addEventListener('click', adicioneTarefa);
     // evento para fazer o x funcionar (apagar uma unica tarefa)
    listaDeTarefas.addEventListener('click', apagarTarefa);
    // evento para limpar toda lista
    btnLimpaTudo.addEventListener('click',apagarTudo);
    //evento para filtrar as tarefas
    filtroDeTarefa.addEventListener('keyup', filtrar);

}

carregaMonitoresDeEventos();

function recuperaTarefas(evento){

   
    // recuperar dados do localStorage
   let  tarefas = localStorage.getItem('tarefas');

    // verifca se ha dados recuperados,
    // se não existir transforma em vetor
    if(tarefas== null){
        tarefas = [];
    }
        tarefas = JSON.parse(tarefas);
        
        tarefas.forEach(function(tarefa){

            //Cria li com a nova tarefa

            const li = document.createElement('li');
            li.className = 'collection-item';
            li.appendChild(document.createTextNode(tarefa));

            //cria aonde vai ficar o x para apagar a tarefa
            const a = document.createElement('a');
            a.className = 'apaga-tarefa secondary-content';

            //cria ícone com x para apagar a tarefa
            const i = document.createElement('i');
            i.className = 'fa fa-remove';

            //monta o elemento li para colocar em ul
            a.appendChild(i);
            li.appendChild(a);
            listaDeTarefas.appendChild(li);
        
        }); 
    
}

function filtrar(evento){

    //capturar o que o usuario esta digitando
    //passando tudo para minisculo
    const procurado = evento.target.value.toLowerCase();
    //capturamos todos elementos li existentes
     const tarefas = console.log(document.querySelectorAll('collection-item'));

     //Para cada tarefa existente,busque a string
     // desejada
     tarefas.forEach(function(tarefa){


        //Recuperamos apenas o texto do elemento
        // li onde esta a tarefa
         textoTarefa = tarefa.innerText;

         //Procuramos a string digitada no filtro
         // no texto que esta no <li>
         if(textoTarefa.toLowerCase().indexof(procurado)!= -1){

            tarefa.style.display = 'block';

         }else{
            tarefa.style.display = 'none';

         }

     });


}


function apagarTudo(evento){
    evento.preventDefault();

    listaDeTarefas.innerHTML='';  

    localStorage.removeItem('tarefas');

}


function apagarTarefa(evento){
          
    // se o elemento pai tiver a classe apaga-tarefa,
    // ou seja, for o elemento "a",apague li,ou seja
    //a tarefa  
    if(evento.target.parentElement.classList.contains('apaga-tarefa')){
        evento.target.parentElement.parentElement.remove();
          
         apagarDoLocalStorage(evento.target.parentElement.parentElement)
    }
}

function apagarDoLocalStorage(tarefa){

    let tarefaParaSerApagada = tarefa.innerText;

    let tarefas = [];
     
    //recuperar o que ja existe no localStorage
     if(localStorage.getItem('tarefas')!== null){

        //transformar em objeto json, não uma string
        tarefas = JSON.parse(localStorage.getItem('tarefas'));
     }
      
     //fazer um looping para buscar tarefa
     tarefas.forEach(function(tarefa,indice){
      
        //se encontramos o que queremos apagar,
        //apagamos
        if(tarefaParaSerApagada == tarefa){
            //retirar a tarefa do objeto JSON
            //apagamos a tarefa igual a tarefa que o
            //usuario clicou para apagar
            tarefas.splice(indice,1);

        }

     });

     // gravar objeto JSON no localStorage novamente
       localStorage.setItem('tarefas', JSON.stringify(tarefas));
}     
    

function adicioneTarefa(evento){

    evento.preventDefault();



    //verifica se o usuário entrou com uma tarefa

    if(entradaTarefa.value === ''){

        alert('Entre com uma tarefa');
        return false;

    }


    //Cria li com a nova tarefa

    const li = document.createElement('li');

    li.className = 'collection-item';

    li.appendChild(document.createTextNode(entradaTarefa.value));



    //cria aonde vai ficar o x para apagar a tarefa

    const a = document.createElement('a');

    a.className = 'apaga-tarefa secondary-content';



    //cria ícone com x para apagar a tarefa

    const i = document.createElement('i');

    i.className = 'fa fa-remove';



    //monta o elemento li para colocar em ul

    a.appendChild(i);

    li.appendChild(a);

    listaDeTarefas.appendChild(li);



    //apaga o input para entrada

    entradaTarefa.value = '';
     
    //gravar a tarefa no localStorage
    gravarTarefa(entradaTarefa.value);
}

function gravarTarefa(tarefa){

    let tarefas = [];
    //Recupera tarefas ja gravadas no localStorage
    
    
    let tarefaDoStorage = localStorage.getItem('tarefas');

    if(tarefaDoStorage != null){
        // Se localStorage estiver alguma informação,
    //Faz o parse da string Json para um objeto Json
        tarefas = JSON.parse(tarefaDoStorage);

    }
       //Adicionar a tarefa Json ja existente    
       tarefas.push(tarefa);

       //Grava o novo JSON no localStirage
       localStorage.setItem('tarefas',JSON.stringify(tarefas));
}