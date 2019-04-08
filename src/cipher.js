window.cipher = ({

  encode: (string,setOff) => {
    let mjeTraducido = '';
        /*para avanzar en cada string de la cadena de texto usar un for*/
  
       for (var i=0; i<= string.length; i++) {
  
        let letter = string.charAt(i);
            /* H O L A */
        let asc = string.charCodeAt(i); 
            /* 72 79 76 65 */
           
            if ( 65 <= asc && asc <=90  ) {
              newAsc = (((asc-65+ setOff)% 26)+65);
              /*asi si el setOff es 1 
              se tendra -->   73  80  77  66 */
              letter = String.fromCharCode(newAsc);
              /* con letras --> I  P M B */
            } 
            else if ( 97 <= asc <= 122 ) {
              /* intervalo para minusculas a----z  */
              newAsc = (((asc-97+ setOff)% 26)+97);
              letter= String.fromCharCode(newAsc);
              
            } 

            
            if (asc === 32 ) {
              /* intervalo para minusculas a----z  */
              
              letter= String.fromCharCode(asc);
            } 
           
            if (asc === 44){
              letter = String.fromCharCode(asc);
            }
           
          mjeTraducido += letter;
        }; 
          return mjeTraducido;
  },

  decode: (string,setOff) => {
   

    return cipher.encode(string,(26-(setOff%26)));
        
  }
});
