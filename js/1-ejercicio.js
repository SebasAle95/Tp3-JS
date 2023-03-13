let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

document.write('<h2>la cantidad de meses son</h2>');

document.write(`<ol>`);

for (let i=0; i< meses.length; i++){
document.write(`<li>${meses[i]}</li>`);
}
document.write(`</ol>`);