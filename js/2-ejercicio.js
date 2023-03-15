let paises = [];

while (true) {
    let ciudad = prompt("Ingrese el nombre de la ciudad");
    if (ciudad === null){
        break;
    }
    paises.push(ciudad);
    
}

document.write("primera posicion"  +paises[0] + "<br>");
document.write("tercera posicion"  +paises[2] + "<br>");
document.write("ultima posicion"  +paises[paises.length - 1] + "<br>");
document.write("segunda posicion"  +paises[1] + "<br>");
paises.push('Paris');

document.write('<br>cantidad de paises' +paises.length);

document.write('<br>' +paises);



