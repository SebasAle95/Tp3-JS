function esPar(numero) {
    if (numero % 2 === 0){
        return "el numero" + numero + "es par";
    } else {
        return "el numero" + numero + "es impar";
    }
}

document.write (esPar(3));
document.write (esPar(8));