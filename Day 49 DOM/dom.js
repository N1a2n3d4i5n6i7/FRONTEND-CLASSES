console.log(document);
console.log(document.URL);
console.log(document.title);
document.title = " MY OWN DOM"; // IT will change the title name
console.log(document.head);
console.log(document.body);

// we can also get single elements by names form,anchor, p, h1

console.log(document.forms);
console.log(document.links);
console.log(document.images);

// Get Elements by id
//console.log(document.getElementById('my-h1'));

var myheader = document.getElementById('my-h1');
console.log(myheader.textContent); // it gives the name of the particular id
myheader.textContent = "MY DOM HEADER"; // we can update the text 

// I can add/push a complete html element from js to Dom

myheader.innerHTML = '<h4> This is h4 tag<h4>'

// we can add styles to the dom
myheader.style.backgroundColor = "red";

// document elements by class
 var tasks = document.getElementsByClassName('list-group-item');
 console.log(tasks);
 // console.log(tasks[1].innerHTML);  // if we want particular item we have use index value
 tasks[1].innerHTML = "NEW ITEM"; // updating with the new name.
 tasks[3].style.borderBottom = '2px solid red'; // changing the style for item4 in the list type.

 var myinput = document.querySelector('input');
 myinput.value = 'my value';

