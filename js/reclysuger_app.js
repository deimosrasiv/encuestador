

var config = {
  apiKey: "AIzaSyBoFwCAgRvKDy-Q0w-78ECtJ1bWFolfSxA",
  authDomain: "encuestasatisfaccion-67252.firebaseapp.com",
  projectId: "encuestasatisfaccion-67252",
  databaseURL: "https://encuestasatisfaccion-67252-default-rtdb.firebaseio.com",
  storageBucket: "encuestasatisfaccion-67252.appspot.com",
  messagingSenderId: "456103770352",
  appId: "1:456103770352:web:1dab432aa8874febeaea35",
  measurementId: "G-F681MKVJ1K"
};
  firebase.initializeApp(config);


var cuentacaracteres = "300";

function countChars(obj){
        var strLength = obj.value.length;
        var maxLength = obj.dataset.max;
        var charRemain = (maxLength - strLength);

        if(charRemain < 0){
            document.getElementById("txaCount").innerHTML = 'Has excedido el límite de '+maxLength+' caracteres';
        }else{
            document.getElementById("txaCount").innerHTML = 'Caracteres Restantes: '+charRemain;
        }
    }







//login google
var provider = new firebase.auth.GoogleAuthProvider();


function logingoogle(){
  firebase.auth()
  .signInWithPopup(provider)
  .then(function(result) {
    //console.log(result.user);
    //guardaDatos(result.user);
    $('#titulo').hide();
    $('#fotoreclysug').hide();
    $('#logingoogle').hide();
    $('#loginfacebook').hide();
    $('#logintwitter').hide();
    $('#linea').hide();

    //$('#root').append("<img width='100px' src='"+result.user.photoURL+"' />");




formulario.innerHTML += `
          <h3  id="titulo" class="mb-5">Hola ${result.user.displayName}</h3>
            <img class="rounded-circle img-fluid" style="width:30%" src="${result.user.photoURL}">
              <div class="my-4"></div>
                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexfelicitaciones" checked>
                  <label class="form-check-label" style="float:left" for="flexfelicitacioneslabel">
                    Felicitaciones
                  </label>
                </div>

                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexsugerencia">
                  <label class="form-check-label" style="float:left" for="flexsugerencialabel">
                    Sugerencia
                  </label>
                </div>

                <div class="form-check">
                  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexreclamo" >
                  <label class="form-check-label"  style="float:left" for="flexreclamolabel">
                    Reclamo
                  </label>
                </div>
              <div >

              <div class="input-group-prepend">
                <span><p class="mb-0"  id="txaCount" style="align: center; font-size: 10px; color: black;">Caracteres Restantes: ${cuentacaracteres}</p></span>

              <div >

              <textarea  id="txaMessage"  onkeypress="countChars(this);" onkeydown="countChars(this);" required data-max=${cuentacaracteres}   maxlength=${cuentacaracteres} style="width:100%; height: 200px ;align-items: center;" aria-label="With textarea"></textarea>
                

              <button id="EnvioMensage" class="btn btn-lg btn-block btn-primary mb-2" style="background-color: #3b5998;" type="submit" disable onclick="EnvioMensage()"><i class="fa-solid fa-envelope me-2"></i>Enviar Mensage</button>

                <div class="card-footer text-muted">
                  <p class="mb-0" style="align: center; font-size: 10px; color: black;">© 2020-2021 Santiago, Chile Ð€IMØ§¯®Ã§Iv Todos los derechos reservados.</p>
                </div>



                 <section class="main" style="display: none;">

                <input name="userui" id="userui" type="text"/>
                <input name="userdisplayname" id="userdisplayname" type="text"/>
                <input name="useremail" id="useremail" type="text"/>
                <input name="userphotourl" id="userphotourl" type="text"/>
              
                </section>

`
                document.getElementById("userui").value=result.user.uid;
                document.getElementById("userdisplayname").value=result.user.displayName;
                document.getElementById("useremail").value=result.user.email;
                document.getElementById("userphotourl").value=result.user.photoURL;



    console.log(result.user.uid);
    console.log(result.user.displayName);
    console.log(result.user.email);
    console.log(result.user.photoURL);

  }); 
}


function EnvioMensage(){

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

  


  console.log("enviamos");
  var txaMessage = document.getElementById("txaMessage").value;
  console.log(txaMessage);
  var flexfelicitaciones = document.getElementById("flexfelicitaciones").checked;
  var flexsugerencia = document.getElementById("flexsugerencia").checked;
  var flexreclamo = document.getElementById("flexreclamo").checked;
  
    if(flexreclamo == true){

      console.log("esta reclamando");
      var nombre_bd = "bdreclamos";
      var modal = "Modalreclamo";

    } else if (flexsugerencia == true){

      console.log("esta sugeriendo");
      var nombre_bd = "bdsugerencias";
      var modal = "Modalsugerencias";      

    } else if (flexfelicitaciones == true) {

      console.log("Esta felicitando");
      var nombre_bd = "bdfelicitaciones";
      var modal = "Modalfelicitaciones";
    }


    if (txaMessage == ""){

      console.log("no ha escrito mensage");

    } else{

      var userui = document.getElementById("userui").value;
      var userdisplayname = document.getElementById("userdisplayname").value;
      var useremail = document.getElementById("useremail").value;
      var userphotourl = document.getElementById("userphotourl").value;

     var usuario={
      userui: userui,
      username: userdisplayname,
      email: useremail,
      photo: userphotourl,
      fecha: fechaingreso,
      hora: horaingreso,
      texto: txaMessage
    
    }
    firebase.database().ref(nombre_bd + "/" + fechaingreso + "/" + userui + "/" + horaingreso)
    .set(usuario)
      



    flexreclamo.checked = false;
    flexsugerencia.checked = false;
    flexfelicitaciones.checked = false;
     document.getElementById("txaCount").value=" "

     $('#'+modal).modal('show'); // abrir
      
    }





}

