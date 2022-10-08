//Atualizando elementos no JS



//Criamos um novo elemento h2

const novoTitulo = document.createElement('h2')



//define o id



novoTitulo.id = 'task-title';



//Appendchild atribui todo o que está dentro do parenteses 

//para dentro do que está antes do ponto



novoTitulo.appendChild(document.createTextNode('Nova Lista'))



const tituloAtual = document.getElementById('task-title');



//Capturamos o elemento mãe/pai do elemento que queremos atualizar

let divMaeDoTitulo = document.getElementsByClassName('card-action');



divMaeDoTitulo[0].replaceChild(novoTitulo, tituloAtual);


