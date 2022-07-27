const tiposDeSuscripciones = {
    free: "Solo puedes tomar los cursos gratis!",
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes",
    expert: "Puedes tomar casi todos los cursos de Platzi durante un año",
    expertduo: "Tu y alguien mas pueden tomar TODOS los cursos de Platzi durante un año"
};



function tipoSuscripcion(suscripcion) {
    if(tiposDeSuscripciones[suscripcion]){
        alert(tiposDeSuscripciones[suscripcion])   
        return;
    }
    alert("No tienes suscripcion, inicia una prueba!⚡")
}

tipoSuscripcion('expertduo')
