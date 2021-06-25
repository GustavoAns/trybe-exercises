let n = 5;
let quadrado = ""

// Ex 1
// for (var i = 0; i < n; i++) {
//     quadrado += "*"
// }
// quadrado += "\n"
// console.log(quadrado.repeat(n));

// Ex 2
// for (var i = 0; i < n; i++) {
//     quadrado += "*"
//     console.log(quadrado)
// }

// Ex 3
// for (var i = 0; i <= n; i++) {
//     for (var i2 = 0; (i2 + i) <= n; i2++) {
//         quadrado += " "
//     }
//     for (var i3 = 0; (i2 + i3) <= n; i2++) {
//         quadrado += "*"
//     }
// quadrado += "\n"
// }
// console.log(quadrado)

// Ex 4
    // for (var i = 0; i <= (n - 3); i++) {
    //     // let ndif = n - (i*2)
    //     for (var i2 = 0; (i2 + i) <= Math.trunc(n/2); i2++) {
    //         quadrado += " "
    //     }
    //     quadrado += "*"
    //     // for (var i3 = 0; (i2 + i3) <= ndif; i2++) {
    //     //     quadrado += "*"
    //     // }
    // quadrado += "\n"
    // }
    // console.log(quadrado)


let lista = [];

for (var i = 0 ; i < n ; i++){
    lista[i] = " ";
}
    lista[Math.ceil(n/2)] = "*";
for (var i2 = 1 ; i2 < Math.trunc(n/2) ; i2++){
    lista[(Math.trunc(n/2) - i2)] = "*";
    lista[(Math.trunc(n/2) + i2)] = "*";
}
