 var firebaseConfig = {
  apiKey: "AIzaSyBoFwCAgRvKDy-Q0w-78ECtJ1bWFolfSxA",
  authDomain: "encuestasatisfaccion-67252.firebaseapp.com",
  projectId: "encuestasatisfaccion-67252",
  databaseURL: "https://encuestasatisfaccion-67252-default-rtdb.firebaseio.com",
  storageBucket: "encuestasatisfaccion-67252.appspot.com",
  messagingSenderId: "456103770352",
  appId: "1:456103770352:web:1dab432aa8874febeaea35",
  measurementId: "G-F681MKVJ1K"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

 
var db = firebase.firestore();







 
function mueveReloj(){
    momentoActual = new Date()
    hora = momentoActual.getHours()
    minuto = momentoActual.getMinutes()
    segundo = momentoActual.getSeconds()

    horaImprimible = hora + " : " + minuto + " : " + segundo

    document.getElementById('reloj').innerHTML = "Hora: "+horaImprimible

    setTimeout("mueveReloj()",1000)

}



 
////////////// variable para insertar fecha y hora ///////////////////

let date = new Date()
let day = date.getDate()
let month = date.getMonth() + 1
let year = date.getFullYear()
let hora = date.getHours()
let minutos = date.getMinutes()
let segundos = date.getSeconds()

//var horaingreso = (`${hora}:${minutos}:${segundos}`)
//console.log(`${hora}:${minutos}:${segundos}`)
if(day < 10){
    var dia = (`0${day}`)
  //    console.log(`${day}-0${month}-${year} `)
}else{
    var dia = (`${day}`)
    //console.log(`${day}-${month}-${year} `)
}

if(month < 10){
    var mes = (`0${month}`)
  //    console.log(`${day}-0${month}-${year} `)
}else{
    var mes = (`${month}`)
    //console.log(`${day}-${month}-${year} `)
}

var horaequipo = document.getElementById('reloj').innerHTML;
var fechaingreso =(`${dia}-${mes}-${year}`)


document.getElementById('fechadia').innerHTML="Fecha: "+ fechaingreso 
               

/// sugerencias
db.collection("bdsugerencias").where("fecha", "==", fechaingreso).orderBy("hora","desc").onSnapshot((querySnapshot)=> {
   
    box_sugiere.innerHTML = ``
    

    querySnapshot.forEach((doc) => {
        
    box_sugiere.innerHTML += `


        <aside class="profile-nav alt">
            <section class="card">
                <div class="card-header user-header alt bg-dark">
                    <div class="media">
                        
                            <img class="align-self-center rounded-circle mr-3" style="width:85px; height:85px;" alt="" src="${doc.data().photo}">
                        
                        <div class="media-body">
                            <h2 class="text-light display-6">${doc.data().username}</h2>
                            <p>${doc.data().hora}</p>
                        </div>
                    </div>
                </div>

                <div class="text-info font-italic feed-box text-left" style="font-size:18px;">

                   ${doc.data().texto}
                </div>
            </section>
        </aside>
    


    `
    
  })
})


///reclamos

db.collection("bdreclamos").where("fecha", "==", fechaingreso).orderBy("hora","desc").onSnapshot((querySnapshot)=> {
   
    box_reclama.innerHTML = ``


    querySnapshot.forEach((doc) => {

    box_reclama.innerHTML += `

        <aside class="profile-nav alt">
            <section class="card">
                <div class="card-header user-header alt bg-dark">
                    <div class="media">
                        
                            <img class="align-self-center rounded-circle mr-3" style="width:85px; height:85px;" alt="" src="${doc.data().photo}">
                        
                        <div class="media-body">
                            <h2 class="text-light display-6">${doc.data().username}</h2>
                            <p>${doc.data().hora}</p>
                        </div>
                    </div>
                </div>

                <div class="text-info font-italic feed-box text-left" style="font-size:18px;">

                   ${doc.data().texto}
                </div>
            </section>
        </aside>
    


    `
    
  })
})

//// felicitaciones

db.collection("bdfelicitaciones").where("fecha", "==", fechaingreso).orderBy("hora","desc").onSnapshot((querySnapshot)=> {
   
    box_felicita.innerHTML = ``


    querySnapshot.forEach((doc) => {

   

    box_felicita.innerHTML += `

        <aside class="profile-nav alt">
            <section class="card">
                <div class="card-header user-header alt bg-dark">
                    <div class="media">
                        
                            <img class="align-self-center rounded-circle mr-3" style="width:85px; height:85px;" alt="" src="${doc.data().photo}">
                        
                        <div class="media-body">
                            <h2 class="text-light display-6">${doc.data().username}</h2>
                            <p>${doc.data().hora}</p>
                        </div>
                    </div>
                </div>

                <div class="text-info font-italic feed-box text-left" style="font-size:18px;">

                   ${doc.data().texto}
                </div>
            </section>
        </aside>
    


    `
    
  })
})
