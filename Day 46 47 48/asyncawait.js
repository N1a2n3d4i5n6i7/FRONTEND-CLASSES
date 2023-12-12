async function getusersdata (){
    try {
    const apicall = await fetch ('https://jsonplaceholder.typicode.com/posts');
    const respdata =  await apicall.json();  
    // if ( respdata.includes(myuserid)){
    //   const myprofile = await fetch ('https://jsonplaceholder.typicode.com/posts');
    // }
    console.log(respdata);
} catch (error) {
  console.log(error);
}
}
getusersdata();

// DUMMY LIVE API
 async function getproductsdata () {
  try {
    const apicall = await fetch ('https://dummyjson.com/products')
                     .then (resp => resp .json());  // here we can write like promises syntax also
     console.log(apicall);            
  } catch (error) {
    console.log(error);
  }
 }
 getproductsdata ();

 // Another API by own

 const places = [
  
    { name : "Anantapur" , food :"ragi muddha", price : 500},
    { name : "Hyderabad" , food : "biryani", price : 600},
    { name : "Chennai" , food : "idly-sambar", price : 400},
];
  function getplacesdata(place){
  
    let output = '';
   places.forEach((place) => {
    output += `<li> ${place.name}</li>`
   });
   document.body.innerHTML = output; // i didnt use anymetho hee..just displayed output inthe body.
  } 
getplacesdata();

//  async function getplacesdata (place) {
//   try {
//     const apicall = await places.then(resp => resp.json());
//     console.log(apicall);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getplacesdata();

 

 