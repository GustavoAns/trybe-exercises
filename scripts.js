let a = 300;
let b = 200;
let c = 1000;
let numero = -1;
let angulo1 = 70;
let angulo2 = 60;
let angulo3 = 50;
let triangulo = angulo1 + angulo2 + angulo3;
let returntriangulo;
let xadrez = 'CaVaLo'.toLowerCase();
let porcento = 73;
let numvar1 = 5;
let numvar2 = 9;
let numvar3 = 3;
let compra = 300;
let venda = 500;


let Adição = a + b;
let Subtração = a - b;
let Multiplicação = a * b;
let Divisão = a / b;
let Módulo = a % b; //resto da divisão por ex NumeroX % 5

if (a > b) {
    console.log('O maior numero é ' + a)
} else {
    console.log('O maior numero é ' + b)
}

console.log(' ')
console.log('Proximo')
console.log(' ')

// Não funciona e tenho ideia o pq
// function maior (a,b,c){
//     if (a > b || a > c) {
//         console.log(a)
//     }
//     else if (b > a || b > c) {
//         console.log(b)
//     }
//     else if (c > a || c > b) {
//         console.log(c)
//     }
// }
// maior(a,b,c)

if (a > b && a > c) {
    console.log('O maior numero é ' + a)
} else if (b > a && b > c) {
    console.log('O maior numero é ' + b)
} else if (c > a && c > b) {
    console.log('O maior numero é ' + c)
}

// Não funcione e n tenho ideia do pq
// function maior (a,b,c) {
//     if (a > b >c) {
//         console.log('O maior numero é '+ a)
//     }
//     else if (a > c > b) {
//         console.log('O maior numero é '+ a)
//     }
//     else if (b > c > a) {
//         console.log('O maior numero é '+ b)
//     }
//     else if (b > a > c) {
//         console.log('O maior numero é '+ b)
//     }
//     else if (c > a > b) {
//         console.log('O maior numero é '+ c) 
//     }
//     else if (c > b > a) {
//         console.log('O maior numero é '+ c)
//     }
//     else {
//         console.log('Deu alguma coisa errada')
//     }
// }
// maior(a,b,c)

// console.log(Math.max(a, b, c));

console.log(' ')
console.log('Proximo')
console.log(' ')

if (numero > 0) {
    console.log('O numero declarado é Positivo')
} else if (numero = 0) {
    console.log('O numero declarado é Zero')
} else {
    console.log('O numero declarado é Negativo')
}

console.log(' ')
console.log('Proximo')
console.log(' ')

if (angulo1 > 0 && angulo2 > 0 && angulo3 > 0) {
    if (triangulo == 180) {
        returntriangulo = true
        console.log('Resultado de triangulo ' + triangulo)
    } else if (triangulo < 180 || triangulo > 180) {
        returntriangulo = false
        console.log('Resultado de triangulo ' + triangulo)
    }
    console.log(returntriangulo)
} else {
    console.log('Insira um numero maior que 0')
}

console.log(' ')
console.log('Proximo')
console.log(' ')

// console.log(xadrez.toLowerCase())
console.log(xadrez);

// if (xadrez.toLowerCase() == rei) {
//     console.log('O Rei pode mover-se em qualquer direção, porém apenas uma casa por vez ')
// }
// else if (xadrez.toLowerCase() == dama) {
//     console.log('A Dama pode mover-se ')
// }
// else {
//     console.log('Insira uma peça valida')
// }

if (xadrez == 'rei') {
    console.log('O Rei pode mover-se em qualquer direção, porém apenas uma casa por vez ')
} else if (xadrez == 'dama') {
    console.log('A Dama pode mover-se em qualquer direção (vertical, horizontal e diagonal), porém quantas casas quiser, desde que estejam livres ')
} else if (xadrez == 'torre') {
    console.log('A Torre pode Move-se em linha reta, tanto na vertical quanto na horizontal, quantas casas quiser.')
} else if (xadrez == 'bispo') {
    console.log('O Bispo Move-se na diagonal, quantas casas quiser. O Bispo que iniciar a partida em uma casa branca somente poderá transitar pelas brancas, enquanto o Bispo que inicia em uma casa preta somente poderá transitar pelas casas pretas.')
} else if (xadrez == 'cavalo') {
    console.log('O Cavalo É a única peça que pode saltar sobre as outras peças do tabuleiro, sejam elas amigas ou inimigas. O movimento executado pelo Cavalo é conhecido por “um-dois” ou “em L”. Ele pode andar duas casas na horizontal e uma na vertical, ou duas na vertical e uma na horizontal')
} else if (xadrez == 'peão') {
    console.log('o Peão Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas. O peão é a única peça que não pode retroceder, e também a única que efetua a captura com um movimento diferente do utilizado para avançar no tabuleiro. O peão pode capturar as peças que estejam uma fileira acima, mas nas colunas adjacentes a sua.')
} else {
    console.log('Insira uma peça valida')
}

console.log(' ')
console.log('Proximo')
console.log(' ')

if (porcento >= 90 && porcento <= 100) {
    console.log('Sua nota é A')
}
else if (porcento >= 80 && porcento < 90) {
    console.log('Sua nota é B')
}
else if (porcento >= 70 && porcento < 80) {
    console.log('Sua nota é C')
}
else if (porcento >= 60 && porcento < 70) {
    console.log('Sua nota é D')
}
else if (porcento >= 50 && porcento < 60) {
    console.log('Sua nota é E')
}
else if (porcento >= 0 && porcento < 50) {
    console.log('Sua nota é A')
}
else if (porcento < 0 || porcento >100) {
    console.log('insira um numero maior que zero e menor q 100')
}

console.log(' ')
console.log('Proximo')
console.log(' ')

if (numvar1 % 2 == 0 || numvar2 % 2 == 0 || numvar3 % 2 == 0) {
    console.log('true')
}
else {
    console.log('false')
}

console.log(' ')
console.log('Proximo')
console.log(' ')

function lucro (venda,compra){
    let lucrouni = venda - compra
    console.log('Lucro unitario '+lucrouni)
    console.log('Lucro com 1000 '+lucrouni*1000)
}
lucro(venda,compra)

console.log(' ')
console.log('Proximo')
console.log(' ')

var salarioBruto = 3000;
let salarioLiquido;

if (salarioBruto <= 1556.94){
    salarioLiquido = salarioBruto - (salarioBruto*0,08)
    console.log('Sal liq : '+salarioLiquido)
}
else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92){
    salarioLiquido = salarioBruto - (salarioBruto*0,09)
    console.log('Sal liq : '+salarioLiquido)
}
else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
    salarioLiquido = salarioBruto - (salarioBruto*0,11)
    console.log('Sal liq : '+salarioLiquido)
}
