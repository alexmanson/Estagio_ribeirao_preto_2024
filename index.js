// 1) Observe o trecho de código abaixo:
const INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
  K++;
  SOMA += K;
}

// console.log(`O valor da variálvel SOMA é ${SOMA}.`); //91

// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
const numeroEscolhido = 13;

function fibonacci(I) {
  let sequencia = [0, 1];
  for (let i = 2; i < I; i++) {
    sequencia[i] = sequencia[i - 1] + sequencia[i - 2];
  }
  return sequencia;
}

console.log(fibonacci(numeroEscolhido));

function pertenceFibonacci(numero) {
  const sequencia = fibonacci(numero + 1);
  return sequencia.includes(numero);
}

function main(numero) {
  const pertence = pertenceFibonacci(numero);

  if (pertence) {
    console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
  } else {
    console.log(`O número ${numero} não pertence à sequência de Fibonacci.`);
  }
}

main(numeroEscolhido);

// 3) Descubra a lógica e complete o próximo elemento:

// a) 1, 3, 5, 7, ___9, 11, 13 --- Está pulando 1 numero formando uma sequencia de numeros impares

// b) 2, 4, 8, 16, 32, 64, ____128, 256, 512 --- Esta sequência é formada por potências de 2

// c) 0, 1, 4, 9, 16, 25, 36, ____49, 64, 81 --- Está elevando ao quadrado

// d) 4, 16, 36, 64, ____100, 144, 196 --- Está elevando ao quadrado

// e) 1, 1, 2, 3, 5, 8, ____13, 21, 34 - Está somando os 2 numeros anteriores

// f) 2, 10, 12, 16, 17, 18, 19, ____27, 29, 33, 34, 35, 36 - Está somando 8 numeros e depois 2 numeros e depois 4 numeros e depois 1 numero e depois 1 numero e depois 1 numero.

// 4) Você está em uma sala com três interruptores, cada um conectado a uma lâmpada em uma sala diferente. Você não pode ver as lâmpadas da sala em que está, mas pode ligar e desligar os interruptores quantas vezes quiser. Seu objetivo é descobrir qual interruptor controla qual lâmpada.

//Como você faria para descobrir, usando apenas duas idas até uma das salas das lâmpadas, qual interruptor controla cada lâmpada?

// Deixa um interruptor ligado por uma hora e depois desliga e liga outro interruptor e vai para a sala das lampadas, a lampada que estiver acesa é a que está ligada ao interruptor que foi ligado, a lampada que estiver apagada mas estiver quente será a do primeiro interruptor que ficou por uma hora ligada e a lampada que estiver apagada e fria será a do interruptor que não foi ligado.

// 5) Escreva um programa que inverta os caracteres de um string.

const string = "Teste";

// function inverteString(string) {
//   return string.split("").reverse().join("");
// }

// console.log(inverteString(string));

// OU

function invertendoString(string) {
  let revertendoString = "";
  for (let I = string.length - 1; I >= 0; I--) {
    revertendoString += string[I];
  }
  return revertendoString;
}

console.log(invertendoString(string)); // etseT
