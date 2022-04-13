let helado;
prompt(helado)


if (helado==="chocolate"){
alert("me gusta el chocolate");
}
else {
    alert(" No me gusta el chocolate");
}
///////////////////////////////


function myFunction(a=1, b=4) {
  return a * b;
               // Function returns the product of a and b
}
 console.log (myFunction())
//////////////////////////
for (let i=4; i>=1;i--){
    console.log(`hola ${i}`)

}
console.log("fin del ciclo");
