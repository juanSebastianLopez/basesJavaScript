// Con IF
const question = prompt("Cuanto es 2 + 2 🤔");

if (question == 4) {
    alert("¡Felicidades🥳  tu respuesta es " + question +"!")
} else{
    pregunta = prompt("Cuanto es 2 + 2 🤔");

}

// Con While 
let pregunta;

while(pregunta != 4){
    let respuesta = prompt("Cuanto es 2 + 2 🤔");
    if( respuesta == 4){
        alert("¡Felicidades🥳  tu respuesta es " + respuesta +"!")
      }else
      alert("Vuelvalo a intentar");
    respuesta = pregunta;
}


