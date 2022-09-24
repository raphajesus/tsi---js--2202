let e

// e = documemnt.head;
// e = documemnt.body;
 //e = documemnt.body.firstElementChild.firstElementChild;
 //e = document.doctype;
 //e = document.doctype.name;
   //e = document.forms;
    //e = document.forms[0];
    //e = document.forms[0][1];
    //e = document.scripts;
    //e = document.scripts[2];
    // e = document.scripts[2].getAttribute('src');
       //e = document.links
       //e = document.title
       //e = document.querySelector('input#task');
    
// com querySelector
//e = document.querySelector('spna');
//e = document.querySelector('div . row');
//e = document.querySelector('input#task')
//e = document.querySelector('li:first-child').innerText;
//e = document.querySelector('li:last-child').innerText;
e = document.querySelector('li:nth-child(3)').innerText;

console.log(e);