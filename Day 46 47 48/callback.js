/*
1) will create an array wit the object
2) will create a method to read all the objects
3) will create an object from the method
*/  
/* here the process goes like this  1) first round output value is <li> Iphone12</li>
                                   2) second round output value is <li> Iphone12</li>
                                                                    <li> Iphone13</li>
                                    3) third round output value is <li> Iphone12<li>
                                                                    <li> Iphone13<li>
                                                                    <li> Iphone14<li>                                 

*/
const mobiles =[
   
    { name : "Iphone12" , price : 50000},
    { name : "Iphone13" , price : 60000},
    { name : "Iphone14" , price : 70000},
];
function getmobiles(){
  setTimeout (() => {
    let output = '';
   mobiles.forEach((mobile) => {
    output += `<li> ${mobile.name} </li>`
   });
   document.body.innerHTML = output;
  },1000);
};
// Adding Another Item
function createmobile() {
  setTimeout (() => {
   let newmobile = { name : "Iphone15" , price : 80000};
   mobiles.push(newmobile);
  },1000);
  //console.log(mobiles);   // if we give time  morethan the previous one why it is not coming?
  getmobiles();
}

// passing an object as a parameter in a function
 function createmobile(newone) {
  setTimeout(() => {
    mobiles.push(newone);
  },1000);
  getmobiles();
 }
createmobile({name : "nokia",price : 30000});

// passing function as a arguement to another function - CALL BACK
function createmobile(newone,callback) {
  setTimeout(() => {
    mobiles.push(newone);
  },1000);
 // getmobiles();
 callback();
 }
createmobile({name : "nokia",price : 30000},getmobiles);


// // Deleting an item
 function deletemobile(){
   setTimeout (() => {
   mobiles.pop();
   },1000);
   getmobiles();  

 }

 // Shift the mobile (first one is gping to get deleted)
 function shiftmobile(){
  setTimeout (() => {
    mobiles.shift();
  },1000);
  getmobiles();
}

createmobile();
 deletemobile();
shiftmobile();