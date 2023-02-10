// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    if (!input) {
      return false;
    }
     if (!encode) {
     // let tempInput = input.replaceAll(" ", "");
     let tempInput = input.split(" ").join(""); 
      if (tempInput.length % 2 !== 0) {
        return false;
      }
    }

//     if (!encode) {
//       let tempInput = input.replaceAll(" ", "");

//       if (tempInput.length % 2 !== 0) {
//         return false;
//       }
//     }

    const encoder = {
      " ": " ",
      a: "11",
      b: "21",
      c: "31",
      d: "41",
      e: "51",
      f: "12",
      g: "22",
      h: "32",
      i: "42",
      j: "42",
      k: "52",
      l: "13",
      m: "23",
      n: "33",
      o: "43",
      p: "53",
      q: "14",
      r: "24",
      s: "34",
      t: "44",
      u: "54",
      v: "15",
      w: "25",
      x: "35",
      y: "45",
      z: "55",
    };
    const decoder = {
       " ": " ",
      11: "a",
      21: "b",
      31: "c",
      41: "d",
      51: "e",
      12: "f",
      22: "g",
      32: "h",
      42: "(i/j)",
      52: "k",
      13: "l",
      23: "m",
      33: "n",
      43: "o",
      53: "p",
      14: "q",
      24: "r",
      34: "s",
      44: "t",
      54: "u",
      15: "v",
      25: "w",
      35: "x",
      45: "y",
      55: "z",
    };
    
    if(encode === true){
    return input.toLowerCase().split("").map((character)=>{
      return encoder[character]
    }).join("");
  }
    if (!encode) {
      if (input.replace(/\s/g, "").length % 2 !== 0) return false
      let endMessage = "";
      for (let i = 0; i < input.length; i += 2) {
        if (input[i] === " ") {
          endMessage += input[i];
          i = i - 1;
        } else {
          const x = input[i];
          const y = input[i + 1];
          const letterPos = `${x}${y}`;
          endMessage += decoder[letterPos];
        }
      }
      return endMessage;
    }
    
    /// split it
//     if(!encode){

//       let temp = input.toLowerCase();
//       let paired = "";
//       for (let i =0; i< temp.length-1; i+=2){
//         paired+=temp[i]+temp[i+1];
//       }
//       console.log(paired, "hereeeeeeeeeeeeeeee")
//     }
    
//   if(!encode){
//    let temp = input.toLowerCase().split(",");
//    let joinedby2Char ="";
//    for(let i=0; i< temp.length; i+2){
//      joinedby2Char+= temp[i].join(",")
//    } 
//   console.log("line 101------->", joinedby2Char) ;
//     return Number(joinedby2Char);
//     }
    
    
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
