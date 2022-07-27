/*
function imprimir(array){
    document.write(array[3])
}
imprimir(['Juan','Sebastian',23,'Lopez'])

*/

function mostrar(array){
    // Con el ' <= ' nos muestra otro de mas como 'Undefined' 
    // Recorre una vez mas y como no tiene nada lo muestra
   for (let i = 0; i < array.length; i++) {
       document.write(array[i]);
   }
}

mostrar(['Sebastian ','Juana ',12 ,true,' lalala'])
















const objecto = [
{
    uno: 1,
    dos: 3,
    tres: 5
},
{
    uno: 1,
    dos: 8,
    tres: 5
}
]
document.write(objecto[1]['dos']);