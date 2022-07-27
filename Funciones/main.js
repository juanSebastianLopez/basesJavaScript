
// Cuando se reciben son Parametro
function nombreCompleto(nombre, apellido){
    return nombre + ' ' + apellido;
}

// Cuando se envia son Argumentos
nombreCompleto('Sebastian','Lopez');

// Creamos una funcion saludar()
function saludar(name, lastname, username) {
    // Llamamos otra Funcion dentro de una Funcion
    const nameComplet = nombreCompleto(name, lastname);
                // Llamamos la funcion sin parentesis
    console.log("Mi nombre es " + nameComplet +", pero prefieron que me digas " + username);
}
saludar('Juan','Lopez','jSebastian');