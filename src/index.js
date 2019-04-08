


  /* sintaxis www3schol--> document.getElementById("myBtn").addEventListener("click", displayDate)*/
  
  document.getElementById("cifrar").addEventListener("click", (e) =>{
    e.preventDefault();
    /*cuando hay click , en  este cado en el boton con id cifrar existiendo las 
    variables string y setOff  */
    let string = document.getElementById("cadena").value;
    let num = document.getElementById("set_off");
    let setOff = parseInt(num.value);
    /*estas variables seran usadas por las funciones en cipher.js */ 
    
    /*Faltan condiciones -.... */
    /*tengo que procesar estas variables con la funcion de cifrado y descifrado y 
    insertar el mensaje tradcido en la textaria (id=mjeTraducido) del body del proyecto*/
    document.getElementById("salida").innerHTML=cipher.encode(string,setOff);
     /* COMILLAS para que subescriba*/
});



document.getElementById("descifrar").addEventListener("click", (e) =>{
  e.preventDefault();
  let string = document.getElementById("cadena").value;
  let num = document.getElementById("set_off");
  
  let setOff = parseInt(num.value);
 

 

  document.getElementById("salida").innerHTML=cipher.decode(string,setOff);
 
 
 });




