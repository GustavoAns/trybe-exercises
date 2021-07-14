let n = 19;
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
// "Consultado : https://www.techiedelight.com/replace-character-specified-index-javascript/"
//
String.prototype.replaceAt = function (index, replacement) {
    //Validacao//
    if (index >= this.length) {
        return this.valueOf();
    }
    //Em (1,A) // ele vai até a casa 1 e subistitui por A e continua até o final //
    return this.substring(0, index) + replacement + this.substring(index + 1);
}
let piramide = "";
for (var i = 0; i < Math.trunc(n / 2); i++) {
    piramide += ' ';
}
piramide += '*';

console.log(piramide)
for (var i2 = 1; i2 <= Math.trunc(n / 2); i2++) {
    piramide = piramide.replaceAt(Math.trunc(n / 2) - i2, '*');
    piramide += "*";
    console.log(piramide)
}