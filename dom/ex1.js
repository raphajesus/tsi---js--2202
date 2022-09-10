console.log(window)

//Como utilizar atributos de um objeto
//alert(`Sua resolução é: ${window.innerHeight} x ${window.innerWidth}`);

let meuTitulo = document.getElementById("titulo");
if(confirm('Deixe uma mensagem!')){

    let msg = prompt('Digite a sua mensagem');
 meuTitulo.innerText = msg +
                   '(Navegador do:'+
                   window.navigator.vendor +
                   ')';
 meuTitulo.style.background = 'green'

}else{

meuTitulo.innerText = 'Sem mensagem';
meuTitulo.style.background = '#dedede';

}

//para  ver tudo disponivel em navigator
console.log(window.navigator.vendor);







