function tipoSuscripcion(suscripcion) {
    
    if (suscripcion == "free") {
        alert("Solo puedes tomar los cursos gratis!");
        return;  
    }  
    if (suscripcion == "basic") {
        alert("Puedes tomar casi todos los cursos de Platzi durante un mes"); 
        return;  
    }  
    if (suscripcion == "expert"){
        alert("Puedes tomar casi todos los cursos de Platzi durante un año"); 
        return;  
    }  
    if(suscripcion == "expertDuo") {
        alert("Tu y alguien mas pueden tomar TODOS los cursos de Platzi durante un año"); 
        return;  
    }
    alert("No tienes suscripcion, inicia una prueba!⚡")
}
tipoSuscripcion('sasa');