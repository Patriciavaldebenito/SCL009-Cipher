


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


 document.getElementById("clear").addEventListener("click", () =>{
 
  document.getElementById("cadena").value = "";
  document.getElementById("set_off").value = "";
  document.getElementById("salida").value = "";
 
 
});



