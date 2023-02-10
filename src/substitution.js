// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // your solution code here
  input = input.toLowerCase();
 //   if(input.length===0) return false;
    if(!alphabet) return false;
    if (alphabet.length !== 26) return false;
    
    // check is  alphabet unic
    
 // if (alphabet.size !== alphabet.length) return false;
     const   standardAlph    = "abcdefghijklmnopqrstuvwxyz"
    let encoder ={};
    for(let i=0;i< 26; i++){
     if(Object.values(encoder).includes(alphabet[i])){
       return false;
     } else{
       encoder[standardAlph[i]] =alphabet[i];
     }
     
    }
    
//     let encoder ={
//       A:X,
//       B:O,
//       C:Y,
//       D:Q,
//       E:M,
//       F:C,
//       G:G,
//       H:R,
//       I:U,
//       J:K,
//       K:S,
//       l:W,
//       M:A,
//       N:F,
//       O:L,
//       P:N,
//       Q:T,
//       R:H,
//       S:D,
//       T:J,
//       U:P,
//       V:Z,
//       W:I,
//       X:B,
//       Y:E,
//       Z:V
//     }
    
    
    //encoding
//       const   realAlphabet    = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   const   testalphabet    = "XOYQMCGRUKSWAFLNTHDJPZIBEV";
    
    
//    let  myResulstring ="";
//     for(let i=0; i< input.length;i++){
//      let ind = realAlphabet.indexOf(charAt(i)); // 8
//      // console.log(ind, "24--------- indexxxxxxxxxxxxx");
//              myResulstring +=  testalphabet.charAt(myIndex);              
//     }
//     return myResulstring;
    
    
   

    let inputAlphabets = input.split("");
    
  let result=inputAlphabets.map( (letter)=>{
      if(letter ===" ")
        return " ";
    if(encode ===true){
      return encoder[letter];
    } else {
      for(let key in encoder) {
        if(letter=== encoder[key]){
          return key;
        }
      }
    }
    }).join("");
     return result; 
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
