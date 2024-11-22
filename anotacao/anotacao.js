// function dizerNome() {
//     console.log('João')
// }
// dizerNome()   // SAÍDA --> João

// ====================================================================
//            --->  FUNÇÃO COM MULTIPLICAÇÃO  <---

// function multiplicaPorDois(valor) {
//     return valor * 5
// }
// let resultado = multiplicaPorDois(50);
// console.log(resultado);   // SAÍDA --> 250

// ====================================================================
//           ---> SINAIS DE EQUAÇÃO  <---

// Adição: +  |  Subtração: -  |  Multiplação: *  |  Divisão: /  | Expoente: **

// ====================================================================
//           ---> INCRIMENTO <---

// let salario = 100
// console.log(++salario)   // SAÍDA --> 101

// ====================================================================
//          --->  IGUALDADE ESTRITA E SOLTA <---

// console.log(1===1) = restrita
// console.log(1==1) = solta

// ====================================================================
//           ---> OPERADOR TERNARIO <---

// let pontos = 100
// let tipo = pontos >100? 'premium':'comum'
// console.log(tipo)

// ===================================================================
//           --->  OPERADORES LÓGICOS  <---
// (&& -> precisa de dois true para ser true)    (|| -> precisa de um true para ser true)    (! -> so vai negar)

// console.log(true && true)
// let cursoSuperior = true
// let cursoTecnico = false

// let podeTrabalhar = cursoSuperior || cursoTecnico
// console.log('pode trabalhar?', podeTrabalhar)

// let canditadoRecusado = !podeTrabalhar
// console.log('canditado recusado', canditadoRecusado)

// ===================================================================
//           -->  IF E ELSE  <--

// let hora = 10
// if(hora>6&&hora<12){
//     console.log('bom dia')
// }
// else if (hora>21&&hora<18){
//     console.log('boa tarde')
// }
// else{
//     console.log('boa noite')
// }

// ===================================================================
//             -->  SWITCH  <--

// let permissao
// permissao = 'gerente'

// switch (permissao) {
//     case 'comum':
//       console.log ('usuario comum')  
//         break;
//      case 'gerente':
//          console.log ('usuario gerente')  
//          break;
//     case 'diretor':
//         console.log ('usuario diretor')  
//         break;
//     default:
//         console.log ('usuario desconhecido')
//         break;
// }

// ==================================================================
//            --> FOR E WHILE - LAÇO DE REPETIÇÃO  <--

// for(let i=1; i<=14; i++){
//     if (i % 2 !==0){
//     console.log ('estou aprendendo',i)
//     }}

// let i=1
// while (i<=10) {
//     if (i % 2 !==0){
//         console.log (i)
//     }
//     i++
// }

// ==================================================================
//        -->  FIZBUZZ  <--

// const resultado = fizzBuzz(15);

// function fizzBuzz (entrada){
//     if (typeof entrada!=='number')
//         return 'não é um número'
//     if ((entrada % 3 ===0) && (entrada % 5 ===0))
//         return 'fizz'
//     if (entrada % 5 ===0)
//         return 'buzz'
//     if ((entrada % 3 ===0) && (entrada % 5 ==0))
//         return 'fizz buzz'
// } console.log (resultado)

// ===================================================================
//         -->  PROMPT  <--

// function classificarNota() {
//     const nota = parseInt(prompt('Digite a nota de todos os alunos'))
//     let resultado;
//     if (nota > 90) {
//         resultado = 'A. Excelente trabalho';
//     } else if (nota >= 80) {
//         resultado = 'B. Bom trabalho';
//     } else if (nota >= 70) {
//         resultado = 'C. Trabalho satisfatorio';
//     } else if (nota >= 60) {
//         resultado = 'D. Precisa melhorar';
//     } else {
//         resultado = 'F. Insuficiente';  
//     }
//     alert(`Sua nota é ${resultado}`);
// }
// classificarNota();

// ====================================================================
//          -->  PARSEINT E PROMPT  <--

// function classificarNota() {
//     const nota = parseInt(prompt('Digite a nota de todos os alunos'))
//     const limiteA = parseInt(prompt('Qual o limite para nota A?'))
//     const limiteB = parseInt(prompt('Qual o limite para nota B?'))
//     const limiteC = parseInt(prompt('Qual o limite para nota C?'))
//     let resultado;
//     if (nota > 90 || nota <=100) {
//         resultado = 'A. Excelente trabalho';
//     } else if (nota >= 80) {
//         resultado = 'B. Bom trabalho';
//     } else if (nota >= 70) {
//         resultado = 'C. Trabalho satisfatorio';
//     } else {
//         resultado = 'Nota inválida';
//     }
    
//        alert(`Sua nota é ${resultado}`);
   
// }
// classificarNota();

//  function classificarNota() {
//         const nota = parseInt(prompt('Digite a nota de todos os alunos'))
//         if (nota <= 0 || nota >= 100) {
//             alert ('nota indefinida')
//         } else if (nota >= 90) {
//             alert ('A. Bom trabalho')
//         } else if (nota >= 80) {
//             alert ('B. Trabalho satisfatorio')
//         } else if (nota >= 60) {
//             alert ('C. Precisa melhorar')
//         } else {
//             alert ('blavla')
//         }
//         alert(`Sua nota é ${resultado}`);
//     }
//     classificarNota();

//  function classificarNota() {
//         const nota = parseInt(prompt('Digite a nota de todos os alunos'))
//         if (nota > 80 || nota <= 90) {
//             alert ('voce esta quase la')
//         } else if (nota > 70 || nota <= 80) {
//             alert ('voce esta quase la')
//         } else if (nota > 60 || nota <= 70) {
//             alert ('voce esta quase la')
//         } else {
//             alert ('nada')
//         }
//         alert(`Sua nota é ${resultado}`);
//     }
//     classificarNota();

//  function classificarNota() {
//         const nota = parseInt(prompt('Digite a sua nota de todos os alunos'))
//         if (nota > 80 || nota <= 90) {
//             alert ('sua nota está muito boa, mas não deixe de revisar os estudos')
//         } else if (nota > 70 || nota <= 80) {
//             alert ('voce esta quase la, mas foque nos estudos e revise mais')
//         } else if (nota > 60 || nota <= 70) {
//             alert ('voce esta quase la, mas revise mais os estudos e estude')
//         } else {
//             alert ('nada')
//         }
//         alert(`Sua nota é ${resultado}`);
//     }
//     classificarNota();

//  function classificarNota() {
//         const comentario = parseInt(prompt('faça um comentario'))
//         const nota = parseInt(prompt('Digite a sua nota de todos os alunos'))
//         let resultado; 
//         if (nota > 80 || nota <= 90) {
//             resultado = 'sua nota está muito boa, mas não deixe de revisar os estudos';
//         } else if (nota > 70 || nota <= 80) {
//             resultado = 'voce esta quase la, mas foque nos estudos e revise mais';
//         } else if (nota > 60 || nota <= 70) {
//             resultado = 'voce esta quase la, mas revise mais os estudos e estude';
//         } else {
//             resultado = 'nada';
//         }
//         alert(`Resultado: ${resultado}`);
//         alert(`Seu comentario ${comentario}`);
//     }
//     classificarNota();

//  function classificarNota() {
//         const nota = parseInt(prompt('Digite a sua nota '))
//         if (nota > 80 || nota <= 90) {
//             alert ('sua nota está muito boa, mas não deixe de revisar os estudos')
//         } else if (nota > 70 || nota <= 80) {
//             alert ('voce esta quase la, mas foque nos estudos e revise mais')
//         } else if (nota > 60 || nota <= 70) {
//             alert ('voce esta quase la, mas revise mais os estudos e estude')
//         } else {
//             alert ('nada')
//         }
//         alert(`Sua nota é ${resultado}`);
//     }
//     classificarNota();

// =========================================================================================
//  -->   UNSHIFT  |  SPLICE  |  PUSH  |  INDEXOF  |  LASTINDEXOF  |  INCLUDES  |  POP  |  SHIFT  |  SPLICE  |  LENGHT = 0

//   === ADD NO INCIO ===
// const numeros = [1,2,3,4,5]
// numeros.unshift(77)
// console.log(numeros)
 
//   === ADD NO MEIO ===
// const numeros = [1,2,3,4,5];
// numeros.splice(2,2);   //primeiro: posição inserido; segundo: para apagar; terceiro: o que vou adicionar
// console.log(numeros);

//   === ADD NO FINAL ===
// const numeros = [1,2,3,4,5]
// numeros.push(999)
// console.log(numeros)

//   === BUSCA SE EXISTE ===
// const numeros = [1,2,3,4,5]
// console.log(numeros.indexOf(2))

//   === ENCONTRAR O ULTIMO ADIICONADO ===
// const numeros = ['valnei', 'mohamed', 'valnei', 'sergio', 'batista', 'batista']
// console.log(numeros.lastIndexOf('valnei'))    //procura a ultima vez que foi adicionado

//  === VERIFICA SE EXISTE ===
// const numeros = [1,2,3,4,5]
// console.log(numeros.includes(2))

//   === APAGA O ULTIMO ===
// const numeros = [1,2,3,4,5]
// const ultimo = numeros.pop()  // remover o ultimo
// console.log(ultimo)
// console.log(numeros)

//   === APAGA O PRIMEIRO ===
// const numeros = [1,2,3,4,5]
// const primeiro = numeros.shift()  // remove o primeiro
// console.log(numeros)
// console.log(primeiro)

//   === APAGA O DO MEIO ===
// const numeros = [1,2,3,4,5]
// const meio = numeros.splice(1,2)  // primeiro: indice que quer remover; segundo: quantidade para remover
// console.log(meio)
// console.log(numeros)

//   === ESVAZIAR ===
// let numeros = [1,2,3,4,5]
// numeros.length=0  // esvaziar
// console.log(numeros)

// =======================================================================================
//       --> OBJETO <--

// const pessoa = {
//     nome: 'joao',
//     idade: 30,
//     cidade: 'sao paulo',
//     endereco: {
//         rua: 'tal',
//         numero: 12,
//         bairro: 'sla',
//     }
// };

// const pessoa = {
//     nome: 'joao',
//     idade: 30,
//     cidade: 'sao paulo',
// };

// =============================================================================
//        -->  FOR IN - OBJETO  <--
//
// for (let chave in pessoa) {
//     console.log(`${chave}: ${pessoa[chave]}`);
// }
// for (let chave in pessoa) {
//     if (pessoa.nome === 'joao'){
//         console.log('usuario encontrado')
//     } else {
//         console.log('usuario nao encontrado')
//     }
// };
// console.log(pessoa.nome);
//
// ==============================================================================
//        -->  FOR OF - ARRAY  <--

// const numeros = [{
//     numero: 1,
// }, {
//     numero: 2,
// }];
// for (let numero of numeros) {
//     console.log(numero);
// }

// ================================================================================

// const frutas = ['maça', 'banana', 'uva'];
// frutas.forEach((fruta) => {
//     console.log(`${fruta}`);
// });

// const frutas = ['maça', 'banana', 'uva'];
// frutas.forEach(
//     function frutas(frutas) {
//         console.log(`${frutas}`);
//     }
// );

// ===================================================================

// const numeros = [1, 2, 3, 4];
// const dobro = numeros.map(num => num * 2);
// console.log(dobro);

// const numeros = [1, 2, 3, 4];
// const pares = numeros.filter(
//     //    num => num % 2 === 0
//     function retonarPares(num) {
//        return num % 2 === 0
//     }
// );

// console.log(pares);

// ===================================================================

// const numeros = [1, 2, 3, 4];
// const soma = numeros.reduce((acumulador, num) => acumulador + num, 0);
// console.log(soma); 

// const numeros = [1, 2, 3, 4];
// const soma = numeros.reduce(
//     function somarValores(acumulador, num) {
//         return acumulador + num;
//     }
// );
// console.log(soma);

// ======================================================================

// let contador = 4;
// // while (contador < 20) {
// //     if (contador % 2 === 0) {
// //         console.log(contador)
// //     }
// // contador ++
// // }
// for (let contador = 4; contador < 20; contador++) {
//     if (contador % 2 === 0) {
//         console.log(contador)
//     }
// }