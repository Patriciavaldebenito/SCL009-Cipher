let mjeTraducido = '';
let newAsc = "";
let letter = "";
 
window.cipher = {

 
  encode: (string,setOff) => {
   /* let mjeTraducido = ''; */

      for (var i=0; i< string.length; i++) { 
       
        let asc = string.charCodeAt(i); 
            /* el numero asqui de la letra   */


        if ( 65 <= asc && asc <=90  ) {          
          newAsc = parseInt((asc-65+ setOff)% 26 + 65);
          letter= String.fromCharCode(newAsc);

        } else if ( 97 <= asc && asc <=122  ) {
          
          newAsc = parseInt((asc-97+ setOff)% 26 + 97);
          letter = String.fromCharCode(newAsc);

        } else if ( asc === 44){
          newAsc = parseInt((asc-44)% 26 + 44);
          letter = String.fromCharCode(newAsc);
          
        } else if ( asc === 32){
          newAsc = parseInt((asc-32)% 26 + 32);
          letter = String.fromCharCode(newAsc);
          
        }
      
        mjeTraducido +=letter;
        
      }
    
    return mjeTraducido;
  },

  decode: (string,setOff) => {
   return cipher.encode(string,(26-(setOff%26)));
        
  }
};
