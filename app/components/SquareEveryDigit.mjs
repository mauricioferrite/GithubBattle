var output = []                                       // Cria Array vazio

function squareDigits(num){
  var digits = num.toString().split("");              // Cria digits, converte para String e separa

  for (var i = 0, len = digits.length; i < len; i++){ // Percorre todo o array
    var result = Math.pow(digits[i], 2);              // Atribui a var result o numero ao quadrado
    output.push(+result);                             // Coloca o resultado no array output
  }  
  
  var final = output.join("");                            // Atribui a var final o join de output
  var numberFinal = parseInt(final);                      
  //console.log(numberFinal);
  //console.log(typeof numberFinal)
  return numberFinal;
}

squareDigits(9119);