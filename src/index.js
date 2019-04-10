


  /* sintaxis www3schol--> document.getElementById("myBtn").addEventListener("click", displayDate)*/
  
  document.getElementById("cifrar").addEventListener("click", (e) =>{
    e.preventDefault();
    let string = document.getElementById("cadena").value;
    let num = document.getElementById("set_off");
    let setOff = parseInt(num.value);
    document.getElementById("salida").innerHTML=cipher.encode(string,setOff);

});



document.getElementById("descifrar").addEventListener("click", (e) =>{
  e.preventDefault();
  let string = document.getElementById("cadena").value;
  let num = document.getElementById("set_off");
  
  let setOff = parseInt(num.value);
  document.getElementById("salida").innerHTML=cipher.decode(string,setOff);
 
 
 });




