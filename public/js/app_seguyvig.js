

firebase.initializeApp({
  apiKey: "AIzaSyBoFwCAgRvKDy-Q0w-78ECtJ1bWFolfSxA",
  authDomain: "encuestasatisfaccion-67252.firebaseapp.com",
  projectId: "encuestasatisfaccion-67252",
  storageBucket: "encuestasatisfaccion-67252.appspot.com",
  messagingSenderId: "456103770352",
  appId: "1:456103770352:web:1dab432aa8874febeaea35",
  measurementId: "G-F681MKVJ1K"
});


// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

////////////// variable para insertar fecha y hora ///////////////////
let date = new Date()
              let day = date.getDate()
              let month = date.getMonth() + 1
              let year = date.getFullYear()
              let hora = date.getHours()
              let minutos = date.getMinutes()
              let segundos = date.getSeconds()

              var horaingreso = (`${hora}:${minutos}:${segundos}`)
              //console.log(`${hora}:${minutos}:${segundos}`)
              //if(month < 10){
              //  var fechaingreso = (`${day}-0${month}-${year}`)
                //  console.log(`${day}-0${month}-${year} `)
              //}else{
              //  var fechaingreso = (`${day}-${month}-${year}`)
                  //console.log(`${day}-${month}-${year} `)
              //}



if(month < 10){
  var month1 = (`0${month}`)
} else {
  var month1 = (`${month}`)
}


if (day <10){
 var day1 = (`0${day}`)
} else {
  var day1 = (`${day}`)
}

var fechaingreso =(`${year}-` + month1 + "-" + day1 )
//console.log(fechaingreso);





   
  
  db.collection("preg_seguyvig").where("estado", "==", 1).onSnapshot((querySnapshot)=> {
   var contador = 1;

    querySnapshot.forEach((doc) => {
      var nfila=doc.data().n;
      //console.log(nfila);

    if (nfila != ""){

      //console.log(doc.data().preg);
      //console.log(contador);
      document.getElementById('pregunta_'+ nfila).innerHTML=doc.data().preg
      
      //console.log(doc.data().preg);
    } else {
      console.log("no hay");
    }

      


    
  })
})



function inicio(){

    let date = new Date()
              let day = date.getDate()
              let month = date.getMonth() + 1
              let year = date.getFullYear()
              let hora = date.getHours()
              let minutos = date.getMinutes()
              let segundos = date.getSeconds()
              var horaingreso = (`${hora}:${minutos}:${segundos}`)

if(month < 10){
  var month1 = (`0${month}`)
} else {
  var month1 = (`${month}`)
}


if (day <10){
 var day1 = (`0${day}`)
} else {
  var day1 = (`${day}`)
}

var horaingreso = (hora+":"+minutos+":"+segundos)
var fechaingreso =(`${year}-`+ month1 + "-" + day1)
console.log(fechaingreso);
console.log(horaingreso);





  var nombre_bd = "notas_seguyvig";
  console.log(nombre_bd);
  var cuentanota =0


var nota_1 = parseInt(document.getElementById("temp_1").innerHTML);
var nota_2 = parseInt(document.getElementById("temp_2").innerHTML); 
var nota_3 = parseInt(document.getElementById("temp_3").innerHTML); 
var nota_4 = parseInt(document.getElementById("temp_4").innerHTML);
var nota_5 = parseInt(document.getElementById("temp_5").innerHTML); 
var nota_6 = parseInt(document.getElementById("temp_6").innerHTML); 
var nota_7 = parseInt(document.getElementById("temp_7").innerHTML); 
var nota_8 = parseInt(document.getElementById("temp_8").innerHTML); 
var nota_9 = parseInt(document.getElementById("temp_9").innerHTML); 
var nota_10 = parseInt(document.getElementById("temp_10").innerHTML);
var nota_11 = parseInt(document.getElementById("temp_11").innerHTML);
var nota_12 = parseInt(document.getElementById("temp_12").innerHTML);
var nota_13 = parseInt(document.getElementById("temp_13").innerHTML);
var nota_14 = parseInt(document.getElementById("temp_14").innerHTML);
var nota_15 = parseInt(document.getElementById("temp_15").innerHTML);
var nota_16 = parseInt(document.getElementById("temp_16").innerHTML);


if (nota_1 != "0"){
 cuentanota++
 //console.log(cuentanota);
}

if (nota_2 != "0"){
 cuentanota++
 //console.log(cuentanota);
}

if (nota_3 != "0"){
 cuentanota++
 //console.log(cuentanota);
}

if (nota_4 != "0"){
 cuentanota++
 //console.log(cuentanota);
}

if (nota_5 != "0"){
 cuentanota++
 //console.log(cuentanota);
}

if (nota_6 != "0"){
 cuentanota++
 //console.log(cuentanota);
}

if (nota_7 != "0"){
 cuentanota++
 //console.log(cuentanota);
}

if (nota_8 != "0"){
 cuentanota++
 //console.log(cuentanota);
}

if (nota_9 != "0"){
 cuentanota++
 //console.log(cuentanota);
}

if (nota_10 != "0"){
 cuentanota++
 //console.log(cuentanota);
}

if (nota_11 != "0"){
 cuentanota++
 //console.log(cuentanota);
}

if (nota_12 != "0"){
 cuentanota++
 //console.log(cuentanota);
}

if (nota_13 != "0"){
 cuentanota++
 //console.log(cuentanota);
}

if (nota_14 != "0"){
 cuentanota++
 //console.log(cuentanota);
}

if (nota_15 != "0"){
 cuentanota++
 //console.log(cuentanota);
}

if (nota_16 != "0"){
 cuentanota++
 //console.log(cuentanota);
}


//console.log(cuentanota);




//var divisor =
var sumanota = (nota_1+nota_2+nota_3+nota_4+nota_5+nota_6+nota_7+nota_8+nota_9+nota_10+nota_11+nota_12+nota_13+nota_14+nota_15+nota_16)

//console.log(sumanota);
var notafinal =(sumanota/cuentanota);
console.log("Respondidas :" +  cuentanota);
var modal = "Modaevaluacion";

if (notafinal != 0){

    console.log("nota final :"+notafinal);
    db.collection(nombre_bd).add({

      nota_1: nota_1,    
      nota_2: nota_2,    
      nota_3: nota_3,    
      nota_4: nota_4,    
      nota_5: nota_5,    
      nota_6: nota_6,    
      nota_7: nota_7,    
      nota_8: nota_8,
      nota_9: nota_9,  
      nota_10: nota_10,  
      nota_11: nota_11,  
      nota_12: nota_12,  
      nota_13: nota_13,  
      nota_14: nota_14,  
      nota_15: nota_15,  
      nota_16: nota_16,  


      fecha: fechaingreso,
      hora: horaingreso
    })

    document.getElementById("iconToast").classList.remove('bi-hand-thumbs-up');
    document.getElementById("iconToast").classList.add('bi-hand-thumbs-down');
    document.getElementById("cuerpoToast").innerHTML="Tu evaluacion fue enviada con exito!! ";
    
    //mostrarToast()

    console.log("abrimos2");
    var notafinalformateada = notafinal.toFixed(1);
    
    
if (cuentanota == 0){

  var titulomodal = "Muchas Gracias por tu Tiempo!!";
  var mensajemodal = "No ha evaluado ninguna de las preguntas";

  
} else if(cuentanota == 1) {

  var titulomodal = "Muchas Gracias por tu Evaluación!!";

  var mensajemodal = "La Nota, a la unica pregunta que has evaluado fue de :";

  document.getElementById('nota').style.display = 'block';

   
} else if (cuentanota <=2){

    var titulomodal = "Muchas Gracias por tu Evaluación!!";

    var mensajemodal = "Este fue el promedio de nota con la que nos evaluaste";

  document.getElementById('nota').style.display = 'block';

} else if(notafinalformateada >="6.0" ){

      var titulomodal = "Muchas Gracias por tu Evaluación!!";

    var mensajemodal = "Esto nos indica, que estamos cumpliendo con tus necesidades. Y es importante para nosotros saberlo";

  document.getElementById('nota').style.display = 'block';


} else if(notafinalformateada >="5.0" ){

      var titulomodal = "Muchas Gracias por tu Evaluación!!";

    var mensajemodal = "Esto nos indica que vamos en buen camino. Continuaremos trabajando para mejorar y entregarte un mejor servicio.";

  document.getElementById('nota').style.display = 'block';


}else if(notafinalformateada >="4.0" ){

      var titulomodal = "Muchas Gracias por tu Evaluación!!";

    var mensajemodal = "Muchas gracias por tu evaluación. En esta oportunidad hemos quedado en deuda con vuestras necesidades. Seguiremos trabajando para mejorar las deficiencias que nos has indicado. Y poder entregar un mejor servicio en la próxima visita.";

  document.getElementById('nota').style.display = 'block';
 

} else if(notafinalformateada >="1.0" ){

      var titulomodal = "Muchas Gracias por tu Evaluación!!";

    var mensajemodal = "Muchas gracias por tu evaluación!. Tu evaluación ha sido baja, y eso nos preocupa. La finalidad de Fantasilandia, es entregar una buen experiencia a nuestro visitante, y claramente no lo estamos cumpliendo. Tomaremos muy encuenta vuestra evaluación para reparar y solucionar en lo que hemos fallado.<br>" +
      "Si gustas puedes dejarnos tu correo, con la finalidad de obtener los detalles, y mejorar lo más pronto posible.<br>"

  document.getElementById('nota').style.display = 'block';


}



// Le damos los datos a mostrar al modal

    nota.innerHTML=`
    <br>
    <p>Su nota de Evaluación es:</p>
      <div class="card text-write bg-dark "  style="width: 4rem; height: 3rem">
        <div class="h3 text-white"  style="font-size: 30px" id="notafinal"  style="font-display: center; align-items: center; justify-content: center; "> ${notafinalformateada}
        </div>
      </div>
  `

    Modaltitulo.innerHTML = `
    <p>${titulomodal}</p>
    `

  MensajeModal.innerHTML = `
    <p>${mensajemodal}</p>
    `

    $('#'+modal).modal('show'); // abrir
      


}



}

// libreria para manejo de mensajes
// Con esta función se muestra el Toast 
function mostrarToast() {
    var toast = document.getElementById("mitoast");
    toast.className = "mostrar";
    setTimeout(function(){ toast.className = toast.className.replace("mostrar", ""); }, 5000);
    
    //console.log("mensage mostrado");
      botoninicio.disabled= true;
      botoninicio.classList.remove('btn-secondary','btn-primary');
      botoninicio.classList.add('btn-primary');

    limpiarpagina()
} 

 
// Con esta función se cierra el Toast 
function cerrarToast() {
    var toast = document.getElementById("mitoast");
    toast.className = "cerrar";
    toast.className = toast.className.replace("cerrar", "");
    
    //limpiarpagina();
}




function limpiarpagina(){


document.getElementById("id1").value="0"
document.getElementById("temp_1").innerHTML="0"
document.getElementById('emoji_1').src ='images/emoji/Zipper-Mouth Face Emoji.png'

document.getElementById("id2").value="0"
document.getElementById("temp_2").innerHTML="0"
document.getElementById('emoji_2').src ='images/emoji/Zipper-Mouth Face Emoji.png'

document.getElementById("id3").value="0"
document.getElementById("temp_3").innerHTML="0"
document.getElementById('emoji_3').src ='images/emoji/Zipper-Mouth Face Emoji.png'

document.getElementById("id4").value="0"
document.getElementById("temp_4").innerHTML="0"
document.getElementById('emoji_4').src ='images/emoji/Zipper-Mouth Face Emoji.png'

document.getElementById("id5").value="0"
document.getElementById("temp_5").innerHTML="0"
document.getElementById('emoji_5').src ='images/emoji/Zipper-Mouth Face Emoji.png'

document.getElementById("id6").value="0"
document.getElementById("temp_6").innerHTML="0"
document.getElementById('emoji_6').src ='images/emoji/Zipper-Mouth Face Emoji.png'

document.getElementById("id7").value="0"
document.getElementById("temp_7").innerHTML="0"
document.getElementById('emoji_7').src ='images/emoji/Zipper-Mouth Face Emoji.png'

document.getElementById("id8").value="0"
document.getElementById("temp_8").innerHTML="0"
document.getElementById('emoji_8').src ='images/emoji/Zipper-Mouth Face Emoji.png'

document.getElementById("id9").value="0"
document.getElementById("temp_9").innerHTML="0"
document.getElementById('emoji_9').src ='images/emoji/Zipper-Mouth Face Emoji.png'

document.getElementById("id10").value="0"
document.getElementById("temp_10").innerHTML="0"
document.getElementById('emoji_10').src ='images/emoji/Zipper-Mouth Face Emoji.png'

document.getElementById("id11").value="0"
document.getElementById("temp_11").innerHTML="0"
document.getElementById('emoji_11').src ='images/emoji/Zipper-Mouth Face Emoji.png'

document.getElementById("id12").value="0"
document.getElementById("temp_12").innerHTML="0"
document.getElementById('emoji_12').src ='images/emoji/Zipper-Mouth Face Emoji.png'

document.getElementById("id13").value="0"
document.getElementById("temp_13").innerHTML="0"
document.getElementById('emoji_13').src ='images/emoji/Zipper-Mouth Face Emoji.png'

document.getElementById("id14").value="0"
document.getElementById("temp_14").innerHTML="0"
document.getElementById('emoji_14').src ='images/emoji/Zipper-Mouth Face Emoji.png'

document.getElementById("id15").value="0"
document.getElementById("temp_15").innerHTML="0"
document.getElementById('emoji_15').src ='images/emoji/Zipper-Mouth Face Emoji.png'

document.getElementById("id16").value="0"
document.getElementById("temp_16").innerHTML="0"
document.getElementById('emoji_16').src ='images/emoji/Zipper-Mouth Face Emoji.png'



botoninicio.disabled= false;
}








