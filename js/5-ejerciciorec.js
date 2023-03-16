const ladoa = parseFloat(prompt("ingrese el lado A del rectangulo"));
const ladob = parseFloat(prompt("ingrese el lado B del rectangulo"));

function calculoperimetro(a,b){
    const perimetro = 2 * (a + b);
    return perimetro;
}

const perimetro = calculoperimetro(ladoa, ladob);
document.write ("el perimetro del rectangulo", perimetro)