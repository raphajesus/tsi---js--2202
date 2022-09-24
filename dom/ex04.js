let e;

e = document.getElementsByClassName('collection-item');

let vetor = Array.from(e);

vetor.forEach(function(val){

    val.style.color = 'green';
    //val.innerText = 'Outra tarefa';

    console.log(val.innerText);
});

//com querySelectorALL
e = document.querySelectorAll('li');

e.forEach(function(val){
    console.log(val.innerText);

});

//Somente impares (para pares, even)


e = document.querySelectorAll('li:nth-child(odd)');

e.forEach(function(val){

    val.style.backgroud = '#dedede';
})  
 
// sem usar  função anonima

e.forEach(fazAlgumaCoisa);

function fazAlgumaCoisa(val){

    //console.log(val);
    
}

 e = document.querySelector('ul.collection');

 //console.log('e.firstChild');
//console.log('e.childElementCout');

 console.log(e.children[2].children[0]);


