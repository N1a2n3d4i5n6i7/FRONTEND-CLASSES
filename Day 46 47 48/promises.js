// promise syntax for calling a API
const getemployees = new Promise ((resolve,reject) =>{     //its a promise syntax for calling API
// will do API calling operation
let apicall = true;
if (apicall) {
    resolve();
} else {
    reject();
}
});
// subscribe
getemployees.then().catch();


const mobiles =[
   
    { name : "Iphone12" , price : 50000},
    { name : "Iphone13" , price : 60000},
    { name : "Iphone14" , price : 70000},
];

function getmobiles(){
    setTimeout (() => {
      let output = '';
     mobiles.forEach((mobile) => {
      output += `<li> ${mobile.name}</li>`
     });
     document.body.innerHTML = output;
    },1000);
  };    
  // Creating a post i will use promises
  // promises are going to use in createmobiles
  //and the i will subscribe to promise and then get results
  // if promise return resolve i will call promise method
  // if it rejects then i will show the error.
function createmobile(mobile) {
   return new Promise((resolve,reject) => {
    setTimeout (() =>{
        mobiles.push(mobile);
    },2000);
    const error = false;
    if(!error) { // if itis not error
        resolve("good : data posted successfully"); // we can pass any type of data if it resolves
    } else{
        reject("error : server is down");
    }
   });
}

  createmobile({name : "nokia",price : 30000})
  .then( getmobiles)
  .catch( err => console.log(err));

//   // LiveAPI : https://jsonplaceholder.typicode.com/todos
//   //const somedata = fetch('https://jsonplaceholder.typicode.com/todos');

  const  gettodolist = new Promise((resolve, reject) => {
    const todolist = fetch('https://jsonplaceholder.typicode.com/todos')
                      .then(resp =>resp.json());
  if(todolist) {
     resolve(todolist);
   } else{
     reject(" error :server down");    
    }

   });

  gettodolist
   .then(values => console.log(values))
  .catch(error => console.log(error));

//   //Another Live API
   const getdestinationlist = new Promise ((resolve, reject) => {
  const destinationlist = fetch('https://freetestapi.com/api/v1/destinations')
                          .then(resp =>resp.json());
     if(destinationlist){
        resolve(destinationlist);
    } else {
        reject(" error : unable to read the data");
    }
   });
   getdestinationlist
  .then(values => console.log(values))
  .catch( error => console.log(error));