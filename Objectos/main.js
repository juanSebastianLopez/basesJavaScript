const objecto = {
    nombre: 'Juan Sebastian',
    apellido: 'Lopez Rodas',
    edad: 24,    
};

const arrayObjecto = Object.values(objecto);
    // Imprime los valores
function imprimirObjecto(obj) {
    const array =  Object.values(obj);
    array.forEach(element => {
        document.write(element,'<br>');
    });
}
imprimirObjecto(objecto)
    // Imprime las Llaves
function imprimirObjecto(obj) {
    const array =  Object.keys(obj);
    array.forEach(element => {
        document.write(element,'<br>');
    });
}
imprimirObjecto(objecto)
    // Imprime toda la Matriz
function imprimirObjecto(obj) {
    const array =  Object.entries(obj);
    array.forEach(element => {
        document.write(element,'<br>');
    });
}
imprimirObjecto(objecto)
//document.write(objecto[0].nombre,'<br>', objecto[1].pasatiempos);
