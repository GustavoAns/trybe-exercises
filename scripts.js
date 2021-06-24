let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let i;
var somanum = 0;


// Ex1
// for (i=0 ; i<numbers.length; i++){
//     console.log(numbers[i])
// }

// Ex2
// for (i=0 ; i<numbers.length; i++){
//     somanum = somanum + numbers[i]   
// }
// console.log(somanum)

// Ex3
// for (i=0 ; i<numbers.length; i++){
//     somanum = somanum + numbers[i]   
// }
// somanum = somanum / numbers.length;
// console.log(somanum);

// Ex4
// for (i=0 ; i<numbers.length; i++){
//     somanum = somanum + numbers[i]   
// }
// somanum = somanum / numbers.length;
// if (somanum > 20){
//     console.log('valor maior que 20')
// }
// else {
//     console.log('valor menor que 20')
// }

// Ex5
// for (i=0 ; i<numbers.length; i++){
//     if(numbers[i] > somanum){
//         somanum = numbers[i]
//     }
// }
// console.log(somanum)

// Ex6
// *Pior*
// let quantImpar = 0;
// for (i = 0; i < numbers.length; i++) {
//     let divi = numbers[i] % 2
//     if (divi != 0) {                    
//         quantImpar++
//     }
// }
// if (quantImpar <= 0){
//     console.log('Não há numeros impares')
//     }
//     else{
//         console.log(quantImpar)
//     }
///////////////////////////////////////////

// let quantImpar = 0;
// for (i = 0; i < numbers.length; i++) {
//     if ((numbers[i] % 2) != 0) {                    
//         quantImpar++
//     }
// }
// if (quantImpar <= 0){
//     console.log('Não há numeros impares')
//     }
//     else{
//         console.log(quantImpar)
//     }

// // let x = numbers[5]%2
// console.log(x)

// Ex7
// Mas o somanum tem que ser um numero maior do que os numeros a serem trabalhados
// var somanum = 1000000;
// for (i=0 ; i<numbers.length; i++){
//     if(numbers[i] < somanum){
//         somanum = numbers[i]
//     }
// }
// console.log(somanum)

// Ex8
// let listNum =[];
// for (i=0 ; i<=25; i++){
//     listNum.push(i)
// }
// console.log(listNum)

// Ex9
let listNum =[];
for (i=0 ; i<=25; i++){
    listNum.push(i/2)
}
console.log(listNum)