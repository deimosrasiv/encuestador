

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



var horaingreso = (hora+":"+minutos+":"+segundos)
var fechaingreso =(day1+"-"+ month1+`-${year}`)
console.log(fechaingreso);
console.log(horaingreso);





function buscarbd(){

document.getElementById("sectioncrea").style.display = 'none';
document.getElementById('titulobd').innerHTML="";
var nombre_bd = document.getElementById('nombre_bd').value;
var titulobd= "Base de Datos";
var nombretablamostrar =(titulobd +" "+nombre_bd)
document.getElementById('titulobd').innerHTML=nombretablamostrar;


var nombre_bd = document.getElementById('nombre_bd').value;
console.log(nombre_bd);
  if (nombre_bd == ""){
    tabla.innerHTML = ``;
    console.log("no ha seleccionado una Base de datos!");
    document.getElementById("sectiontabla").style.display = 'none';
  } else {
   tabla.innerHTML = ``;
      //console.log(nombre_bd);
          var estado = 1;

          document.getElementById("sectiontabla").style.display = 'block';
          db.collection(nombre_bd).orderBy('n', 'asc').where("estado", "==", estado).onSnapshot((querySnapshot)=> {
        tabla.innerHTML = ``;
          var contado = 0;
          
           querySnapshot.forEach((doc) => {


            if (doc.data.estado != 0){
                contado = contado +1;
                //console.log(contado);
            } 
            var sig = contado+1;
            //console.log("numero de fila "+sig);

          tabla.innerHTML += `
                          <tr>  
                    
                      <td style="text-align: center;" scope="row">${doc.data().n}</td>
                      <td style="text-align: left;" class="text-capitalize">${doc.data().preg}</td>
                      <td>
                      <div class="text-center"> 
                          <button type="button" class="btn-danger btn" disable id="botoneditar" onclick="eliminar('${doc.id}','${doc.data().n}','${doc.data().preg}',)"><i class="fa fa-trash"></i></button>
                         </div>
                      </td>

                      <td>
                      <div class="text-center"> 
                          <button type="button" class="btn-warning btn" disable id="botoneditar" onclick="editar('${doc.id}','${doc.data().n}','${doc.data().preg}',)"><i class="fa fa-pencil" ></i></button>
                         </div>
                      </td>

                      
                    </tr>
            `
            
            })
          })

  }



}


// ***** Hacemos visible la tabla de creacion ***
function crear(){
  buscarbd()
var nombre_bd = document.getElementById('nombre_bd').value;

 if (nombre_bd == ""){
    console.log("no ha seleccionado una Base de datos!");
    document.getElementById("sectioncrea").style.display = 'none';
  } else {
  document.getElementById("sectioncrea").style.display = 'block';
  var estado = 1;
   db.collection(nombre_bd).orderBy('n', 'asc').where("estado", "==", estado).onSnapshot((querySnapshot)=> {
       
         
           querySnapshot.forEach((doc) => {



})



})
}
}
 

 // **** eliminamos registros de la tabla seleccionada
function eliminar(id, n, preg){

  var nombre_bd = document.getElementById('nombre_bd').value;

console.log(id);

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


var fechaingreso =(day1+"-"+ month1+`-${year}`)

var eliminado = (fechaingreso+" - "+horaingreso)

  var washingtonRef = db.collection(nombre_bd).doc(id);

  return washingtonRef.update({
    estado: 0,
    eliminado: eliminado
  
  })
  .then(()=>{

  })
}
   


function editar(){

}







function guarda(){
 // buscarbd()
var nombre_bd = document.getElementById('nombre_bd').value;
var inputnumero = document.getElementById('inputnumero').value;
var inputpregunta = document.getElementById('inputpregunta').value;
var titulobd= document.getElementById('titulobd').innerHTML;

var nombretablamostrar =("Base de Datos" +" "+nombre_bd)

document.getElementById('titulobd').innerHTML=nombretablamostrar;
//console.log(nombretablamostrar);
//console.log(nombre_bd);
console.log(inputnumero);
//console.log(inputpregunta);

if (nombre_bd == ""){
  //console.log("no escogio bd");
} else {
//console.log("si escogio bd");

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


var fechaingreso =(day1+"-"+ month1+`-${year}`)

var creado = (fechaingreso+" - "+horaingreso)


var inputnumero = parseInt(inputnumero);


//console.log("pasamos a numero el " +nnn);

db.collection(nombre_bd).add({

        n: inputnumero,
        preg: inputpregunta,
        estado: 1,
        creado: creado
        
        

        })

.then(function(docRef) {
            //console.log("acabamos de ingresar los datos")
            //limpiarpagina();

          // mostramos mensage que se cargo los datos con exito 
        console.log("mostraremos mensage");

        document.getElementById('inputnumero').value="";
        document.getElementById('inputpregunta').value="";

        //mostrarToast() 
        //setTimeout(function(){location.reload();},5000);
            
        })
        .catch(function(error) {
        console.error("Error adding document: ", error);
        });

  console.log("guardamos");
}


}