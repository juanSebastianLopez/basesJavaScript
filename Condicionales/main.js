const tipoDeSuscripcion = prompt("¿Que tipo de suscripcion tienes?");
 
// Condicional con If, Else If y Else

if (tipoDeSuscripcion == "free") {
    alert("Solo puedes tomar los cursos gratis!");
} else if (tipoDeSuscripcion == "basic") {
    alert("Puedes tomar casi todos los cursos de Platzi durante un mes"); 
} else if (tipoDeSuscripcion == "expert"){
    alert("Puedes tomar casi todos los cursos de Platzi durante un año"); 
} else if(tipoDeSuscripcion == "expertDuo") {
    alert("Tu y alguien mas pueden tomar TODOS los cursos de Platzi durante un año"); 
} else{
    alert("No tienes suscripcion, inicia una prueba!⚡")
};
document.write(tipoDeSuscripcion);

// Con un solo condicional IF

if (tipoDeSuscripcion == "free") {
    alert("Solo puedes tomar los cursos gratis!");
}
if (tipoDeSuscripcion == "basic") {
    alert("Puedes tomar casi todos los cursos de Platzi durante un mes"); 
}
if (tipoDeSuscripcion == "expert") {
    alert("Puedes tomar casi todos los cursos de Platzi durante un año"); 
}
if (tipoDeSuscripcion == "expertDuo") {
    alert("Tu y alguien mas pueden tomar TODOS los cursos de Platzi durante un año"); 
}