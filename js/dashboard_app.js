

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
//var fechaingreso =(day1+"-"+ month1+`-${year}`)
var fechaingreso =  (`${year}-`+ month1+"-"+day1)


var diadesde = day1 - 8
var diahasta = day1 

fechadesde = (`${year}-` + month1 + "-" + diadesde)
fechahasta = (`${year}-` + month1 + "-" + diahasta)


document.getElementById("start").max=fechahasta;



//console.log("desde "+ fechadesde);
//console.log("hasta "+ fechahasta);
//console.log("hora "+ horaingreso);

var color_alimentacion = document.getElementById("color_alimentacion")



 db.collection("notas_alimentacion").where("fecha", "==", fechaingreso).onSnapshot((querySnapshot)=> {
        tablanotas.innerHTML = ``;
          var nnotas=0;
          var nevaluaciones=0;
          
           querySnapshot.forEach((doc) => {
          
            //console.log(doc.data());
            var nota =(doc.data().nota_promedio);
            
            nevaluaciones = nevaluaciones + 1
            nnotas = nota + nnotas

            pro = nnotas/nevaluaciones;
            //console.log(pro);
            var promedio_alimentacion= pro.toFixed(1);

            document.getElementById("notas_alimentacion").innerHTML=promedio_alimentacion;
            document.getElementById("nevaluaciones_alimentacion").innerHTML=nevaluaciones;
          
            
    
})
           var a = document.getElementById("notas_alimentacion").innerHTML

            if(a >= 1 && a <= 3.9){
             // console.log("es un 4");
             // console.log(document.getElementById("notas_alimentacion").innerHTML);
              color_alimentacion.classList.remove('bg-flat-color-2', 'bg-flat-color-4');
              color_alimentacion.classList.add('bg-flat-color-4');
              //console.log ("es rojo");
            }

            else if(a >= 4 && a <= 4.9 ){
             // console.log("es un 4");
             // console.log(document.getElementById("notas_alimentacion").innerHTML);
              color_alimentacion.classList.remove('bg-flat-color-2', 'bg-flat-color-4');
              color_alimentacion.classList.add('bg-flat-color-4');
              //console.log ("es rojo");
            }

             else if(a >= 5 && a <= 5.9){
              //console.log("es un 4");
              //console.log(document.getElementById("notas_alimentacion").innerHTML);
              color_alimentacion.classList.remove('bg-flat-color-2', 'bg-flat-color-3');
              color_alimentacion.classList.add('bg-flat-color-3');
              //console.log ("es amarillo");
            }

             else if(a >= 6  && a <= 7 ){
              //console.log("es un 4");
              //console.log(document.getElementById("notas_alimentacion").innerHTML);
              color_alimentacion.classList.remove('bg-flat-color-2', 'bg-flat-color-5');
              color_alimentacion.classList.add('bg-flat-color-5');
              //console.log ("es verde");
            }

})










function obtenerFecha(e)
{

  var fecha = moment(e.value);
  //console.log("Fecha original:" + e.value);
  //console.log("Fecha formateada es: " + fecha.format("DD/MM/YYYY"));
}






function muestranotas(){
var fechanacimiento = document.getElementById('start').value;
//console.log(fechanacimiento);

document.getElementById('titulobd').innerHTML="";
var nombre_bd = document.getElementById('nombre_bd').value;
var titulobd= "Tabla de Notas de ";
var nombretablamostrar =(titulobd +" "+nombre_bd)
document.getElementById('titulobd').innerHTML=nombretablamostrar;


var nombre_bd = document.getElementById('nombre_bd').value;
//console.log(nombre_bd);

  if (nombre_bd == ""){

    //tabla.innerHTML = ``;
    console.log("no ha seleccionado una Base de datos!");
    document.getElementById("sectiontabla").style.display = 'none';
    document.getElementById('cuadronota').style.display = 'none';
  } else {

   tablanotas.innerHTML = ``;
      //console.log(nombre_bd);
          var cuentanotas_1 = 0;
          var cuentanotas_1_0 = 0;
          var sumanota_1 = 0;

          var cuentanotas_2 = 0;
          var cuentanotas_2_0 = 0;
          var sumanota_2 = 0;

          var cuentanotas_3 = 0;
          var cuentanotas_3_0 = 0;
          var sumanota_3 = 0;

          var cuentanotas_4 = 0;
          var cuentanotas_4_0 = 0;
          var sumanota_4 = 0;

          var cuentanotas_5 = 0;
          var cuentanotas_5_0 = 0;
          var sumanota_5 = 0;

          var cuentanotas_6 = 0;
          var cuentanotas_6_0 = 0;
          var sumanota_6 = 0;

          var cuentanotas_7 = 0;
          var cuentanotas_7_0 = 0;
          var sumanota_7 = 0;

          var cuentanotas_8 = 0;
          var cuentanotas_8_0 = 0;
          var sumanota_8 = 0;

          var cuentanotas_9 = 0;
          var cuentanotas_9_0 = 0;
          var sumanota_9 = 0;

          var cuentanotas_10 = 0;
          var cuentanotas_10_0 = 0;
          var sumanota_10 = 0;

          var cuentanotas_11 = 0;
          var cuentanotas_11_0 = 0;
          var sumanota_11 = 0;

          var cuentanotas_12 = 0;
          var cuentanotas_12_0 = 0;
          var sumanota_12 = 0;

          var cuentanotas_13 = 0;
          var cuentanotas_13_0 = 0;
          var sumanota_13 = 0;

          var cuentanotas_14 = 0;
          var cuentanotas_14_0 = 0;
          var sumanota_14 = 0;

          var cuentanotas_15 = 0;
          var cuentanotas_15_0 = 0;
          var sumanota_15 = 0;

          var cuentanotas_16 = 0;
          var cuentanotas_16_0 = 0;
          var sumanota_16 = 0;



          document.getElementById("sectiontabla").style.display = 'block';

         
          
          var cuentaID = 0;
          db.collection(nombre_bd).where("fecha", "==", start.value).onSnapshot((querySnapshot)=> {
          
          
           querySnapshot.forEach((doc) => {

            cuentaID = cuentaID + 1;

                  if (doc.data().nota_1 > 0){
                    cuentanotas_1 = cuentanotas_1+1;
                    sumanota_1 = doc.data().nota_1 + sumanota_1;
                  } else {
                    cuentanotas_1_0 = cuentanotas_1_0+1;
                  }


                   if (doc.data().nota_2 > 0){
                    cuentanotas_2 = cuentanotas_2+1;
                    sumanota_2 = doc.data().nota_2 + sumanota_2;
                  } else {
                    cuentanotas_2_0 = cuentanotas_2_0+1;
                  }


                   if (doc.data().nota_3 > 0){
                    cuentanotas_3 = cuentanotas_3+1;
                    sumanota_3 = doc.data().nota_3 + sumanota_3;
                  } else {
                    cuentanotas_3_0 = cuentanotas_3_0+1;
                  }

                   if (doc.data().nota_4 > 0){
                    cuentanotas_4 = cuentanotas_4+1;
                    sumanota_4 = doc.data().nota_4 + sumanota_4;
                  } else {
                    cuentanotas_4_0 = cuentanotas_4_0+1;
                  }

                   if (doc.data().nota_5 > 0){
                    cuentanotas_5 = cuentanotas_5+1;
                    sumanota_5 = doc.data().nota_5 + sumanota_5;
                  } else {
                    cuentanotas_5_0 = cuentanotas_5_0+1;
                  }

                   if (doc.data().nota_6 > 0){
                    cuentanotas_6 = cuentanotas_6+1;
                    sumanota_6 = doc.data().nota_6 + sumanota_6;
                  } else {
                    cuentanotas_6_0 = cuentanotas_6_0+1;
                  }

                   if (doc.data().nota_7 > 0){
                    cuentanotas_7 = cuentanotas_7+1;
                    sumanota_7 = doc.data().nota_7 + sumanota_7;
                  } else {
                    cuentanotas_7_0 = cuentanotas_7_0+1;
                  }

                   if (doc.data().nota_8 > 0){
                    cuentanotas_8 = cuentanotas_8+1;
                    sumanota_8 = doc.data().nota_8 + sumanota_8;
                  } else {
                    cuentanotas_8_0 = cuentanotas_8_0+1;
                  }

                   if (doc.data().nota_9 > 0){
                    cuentanotas_9 = cuentanotas_9+1;
                    sumanota_9 = doc.data().nota_9 + sumanota_9;
                  } else {
                    cuentanotas_9_0 = cuentanotas_9_0+1;
                  }

                   if (doc.data().nota_10 > 0){
                    cuentanotas_10 = cuentanotas_10+1;
                    sumanota_10 = doc.data().nota_10 + sumanota_10;
                  } else {
                    cuentanotas_10_0 = cuentanotas_10_0+1;
                  }

                   if (doc.data().nota_11 > 0){
                    cuentanotas_11 = cuentanotas_11+1;
                    sumanota_11 = doc.data().nota_11 + sumanota_11;
                  } else {
                    cuentanotas_11_0 = cuentanotas_11_0+1;
                  }

                   if (doc.data().nota_12 > 0){
                    cuentanotas_12 = cuentanotas_12+1;
                    sumanota_12 = doc.data().nota_12 + sumanota_12;
                  } else {
                    cuentanotas_12_0 = cuentanotas_12_0+1;
                  }

                   if (doc.data().nota_13 > 0){
                    cuentanotas_13 = cuentanotas_13+1;
                    sumanota_13 = doc.data().nota_13 + sumanota_13;
                  } else {
                    cuentanotas_13_0 = cuentanotas_13_0+1;
                  }

                   if (doc.data().nota_14 > 0){
                    cuentanotas_14 = cuentanotas_14+1;
                    sumanota_14 = doc.data().nota_14 + sumanota_14;
                  } else {
                    cuentanotas_14_0 = cuentanotas_14_0+1;
                  }

                   if (doc.data().nota_15 > 0){
                    cuentanotas_15 = cuentanotas_15+1;
                    sumanota_15 = doc.data().nota_15 + sumanota_15;
                  } else {
                    cuentanotas_15_0 = cuentanotas_15_0+1;
                  }

                   if (doc.data().nota_16 > 0){
                    cuentanotas_16 = cuentanotas_16+1;
                    sumanota_16 = doc.data().nota_16 + sumanota_16;
                  } else {
                    cuentanotas_16_0 = cuentanotas_16_0+1;
                  }

         
            
            })

              var promedio_1 = (sumanota_1/cuentanotas_1);
                  var promedio_1 = promedio_1.toFixed(1);
                  document.getElementById('pro_1').innerHTML=promedio_1;
                  console.log(promedio_1);
                
              var promedio_2 = (sumanota_2/cuentanotas_2);
                  var promedio_2 = promedio_2.toFixed(1);
                  document.getElementById('pro_2').innerHTML=promedio_2;
              
              var promedio_3 = (sumanota_3/cuentanotas_3);
                  var promedio_3 = promedio_3.toFixed(1);
                  document.getElementById('pro_3').innerHTML=promedio_3;

              var promedio_4 = (sumanota_4/cuentanotas_4);
                  var promedio_4 = promedio_4.toFixed(1);
                  document.getElementById('pro_4').innerHTML=promedio_4;

              var promedio_5 = (sumanota_5/cuentanotas_5);
                  var promedio_5 = promedio_5.toFixed(1);
                  document.getElementById('pro_5').innerHTML=promedio_5;

              var promedio_6 = (sumanota_6/cuentanotas_6);
                  var promedio_6 = promedio_6.toFixed(1);
                  document.getElementById('pro_6').innerHTML=promedio_6;

              var promedio_7 = (sumanota_7/cuentanotas_7);
                  var promedio_7 = promedio_7.toFixed(1);
                  document.getElementById('pro_7').innerHTML=promedio_7;

              var promedio_8 = (sumanota_8/cuentanotas_8);
                  var promedio_8 = promedio_8.toFixed(1);
                  document.getElementById('pro_8').innerHTML=promedio_8;

              var promedio_9 = (sumanota_9/cuentanotas_9);
                  var promedio_9 = promedio_9.toFixed(1);
                  document.getElementById('pro_9').innerHTML=promedio_9;

              var promedio_10 = (sumanota_10/cuentanotas_10);
                  var promedio_10 = promedio_10.toFixed(1);
                  document.getElementById('pro_10').innerHTML=promedio_10;

              var promedio_11 = (sumanota_11/cuentanotas_11);
                  var promedio_11 = promedio_11.toFixed(1);
                  document.getElementById('pro_11').innerHTML=promedio_11;

              var promedio_12 = (sumanota_12/cuentanotas_12);
                  var promedio_12 = promedio_12.toFixed(1);
                  document.getElementById('pro_12').innerHTML=promedio_12;

              var promedio_13 = (sumanota_13/cuentanotas_13);
                  var promedio_13 = promedio_13.toFixed(1);
                  document.getElementById('pro_13').innerHTML=promedio_13;

              var promedio_14 = (sumanota_14/cuentanotas_14);
                  var promedio_14 = promedio_14.toFixed(1);
                  document.getElementById('pro_14').innerHTML=promedio_14;

              var promedio_15 = (sumanota_15/cuentanotas_15);
                  var promedio_15 = promedio_15.toFixed(1);
                  document.getElementById('pro_15').innerHTML=promedio_15;

              var promedio_16 = (sumanota_16/cuentanotas_16);
                  var promedio_16 = promedio_16.toFixed(1);
                  document.getElementById('pro_16').innerHTML=promedio_16;


                  var porcentaje_1=(promedio_1 / 7) * 100;
                  var porcentaje_1=porcentaje_1.toFixed(0);
                  console.log("promedio: "+promedio_1);
                  console.log("porcentaje: "+porcentaje_1);

                  document.getElementById('porcentaje_1').innerHTML=promedio_1;

                  var porcentaje_2=(promedio_2 / 7) * 100;
                  var porcentaje_2=porcentaje_2.toFixed(0);
                  //console.log(porcentaje_2);
                  document.getElementById('porcentaje_2').innerHTML=promedio_2;

                  var porcentaje_3=(promedio_3 / 7) * 100;
                  var porcentaje_3=porcentaje_3.toFixed(0);
                  //console.log(porcentaje_3);
                  document.getElementById('porcentaje_3').innerHTML=promedio_3;

                  var porcentaje_4=(promedio_4 / 7) * 100;
                  var porcentaje_4=porcentaje_4.toFixed(0);
                  //console.log(porcentaje_4);
                  document.getElementById('porcentaje_4').innerHTML=promedio_4;

                  var porcentaje_5=(promedio_5 / 7) * 100;
                  var porcentaje_5=porcentaje_5.toFixed(0);
                  //console.log(porcentaje_5);
                  document.getElementById('porcentaje_5').innerHTML=promedio_5;

                  var porcentaje_6=(promedio_6 / 7) * 100;
                  var porcentaje_6=porcentaje_6.toFixed(0);
                  //console.log(porcentaje_6);
                  document.getElementById('porcentaje_6').innerHTML=promedio_6;

                  var porcentaje_7=(promedio_7 / 7) * 100;
                  var porcentaje_7=porcentaje_7.toFixed(0);
                  //console.log(porcentaje_7);
                  document.getElementById('porcentaje_7').innerHTML=promedio_7;

                  var porcentaje_8=(promedio_8 / 7) * 100;
                  var porcentaje_8=porcentaje_8.toFixed(0);
                  //console.log(porcentaje_8);
                  document.getElementById('porcentaje_8').innerHTML=promedio_8;

                  var porcentaje_9=(promedio_9 / 7) * 100;
                  var porcentaje_9=porcentaje_9.toFixed(0);
                  //console.log(porcentaje_9);
                  document.getElementById('porcentaje_9').innerHTML=promedio_9;

                  var porcentaje_10=(promedio_10 / 7) * 100;
                  var porcentaje_10=porcentaje_10.toFixed(0);
                  //console.log(porcentaje_10);
                  document.getElementById('porcentaje_10').innerHTML=promedio_10;

                  var porcentaje_11=(promedio_11 / 7) * 100;
                  var porcentaje_11=porcentaje_11.toFixed(0);
                  //console.log(porcentaje_11);
                  document.getElementById('porcentaje_11').innerHTML=promedio_11;

                  var porcentaje_12=(promedio_12 / 7) * 100;
                  var porcentaje_12=porcentaje_12.toFixed(0);
                  //console.log(porcentaje_12);
                  document.getElementById('porcentaje_12').innerHTML=promedio_12;

                  var porcentaje_13=(promedio_13 / 7) * 100;
                  var porcentaje_13=porcentaje_13.toFixed(0);
                  //console.log(porcentaje_13);
                  document.getElementById('porcentaje_13').innerHTML=promedio_13;

                  var porcentaje_14=(promedio_14 / 7) * 100;
                  var porcentaje_14=porcentaje_14.toFixed(0);
                  //console.log(porcentaje_14);
                  document.getElementById('porcentaje_14').innerHTML=promedio_14;

                  var porcentaje_15=(promedio_15 / 7) * 100;
                   console.log("promedio: "+promedio_15);
                  console.log("porcentaje: "+porcentaje_15);
                  var porcentaje_15=porcentaje_15.toFixed(0);
                  //console.log(porcentaje_15);
                  document.getElementById('porcentaje_15').innerHTML=promedio_15;
                  var porcentaje_16=(promedio_16 / 7) * 100;
                  var porcentaje_16=porcentaje_16.toFixed(0);
                  //console.log(porcentaje_16);
                  document.getElementById('porcentaje_16').innerHTML=promedio_16;





                  //console.log(" 1 es de : "+ promedio_1 + " "+ cuentanotas_1 +" de: "+cuentanotas_1_0);
                  //console.log(" 2 es de : "+ promedio_2 + " "+ cuentanotas_2 +" de: "+cuentanotas_2_0);
                  //console.log(" 3 es de : "+ promedio_3 + " "+ cuentanotas_3 +" de: "+cuentanotas_3_0);
                  //console.log(" 4 es de : "+ promedio_4 + " "+ cuentanotas_4 +" de: "+cuentanotas_4_0);
                  //console.log(" 5 es de : "+ promedio_5 + " "+ cuentanotas_5 +" de: "+cuentanotas_5_0);
                  //console.log(" 6 es de : "+ promedio_6 + " "+ cuentanotas_6 +" de: "+cuentanotas_6_0);
                  //console.log(" 7 es de : "+ promedio_7 + " "+ cuentanotas_7 +" de: "+cuentanotas_7_0);
                  //console.log(" 8 es de : "+ promedio_8 + " "+ cuentanotas_8 +" de: "+cuentanotas_8_0);
                  //console.log(" 9 es de : "+ promedio_9 + " "+ cuentanotas_9 +" de: "+cuentanotas_9_0);
                  //console.log(" 10 es de : "+ promedio_10 + " "+ cuentanotas_10 +" de: "+cuentanotas_10_0);
                  //console.log(" 11 es de : "+ promedio_11 + " "+ cuentanotas_11 +" de: "+cuentanotas_11_0);
                  //console.log(" 12 es de : "+ promedio_12 + " "+ cuentanotas_12 +" de: "+cuentanotas_12_0);
                  //console.log(" 13 es de : "+ promedio_13 + " "+ cuentanotas_13 +" de: "+cuentanotas_13_0);
                  //console.log(" 14 es de : "+ promedio_14 + " "+ cuentanotas_14 +" de: "+cuentanotas_14_0);
                  //console.log(" 15 es de : "+ promedio_15 + " "+ cuentanotas_15 +" de: "+cuentanotas_15_0);
                  //console.log(" 16 es de : "+ promedio_16 + " "+ cuentanotas_16 +" de: "+cuentanotas_16_0);


                var sumanotatotal = (sumanota_1 + sumanota_2 + sumanota_3 + sumanota_4 + sumanota_5 + sumanota_6 + sumanota_7 + sumanota_8 + sumanota_9 + sumanota_10 + sumanota_11 + sumanota_12 + sumanota_13 + sumanota_14 + sumanota_15 + sumanota_16);
                var cuentanotatotal = (cuentanotas_1 + cuentanotas_2 + cuentanotas_3 + cuentanotas_4 + cuentanotas_5 + cuentanotas_6 + cuentanotas_7 + cuentanotas_8 + cuentanotas_9 + cuentanotas_10 + cuentanotas_11 + cuentanotas_12 + cuentanotas_13 + cuentanotas_14 + cuentanotas_15 + cuentanotas_16);
                var notafinal = (sumanotatotal/cuentanotatotal);
                var notafinalformateada = notafinal.toFixed(1);
                //console.log(notafinalformateada);
                             
              document.getElementById('notafinal').innerHTML = "Promedio de Nota : "+notafinalformateada+ "<br>"+"N° Evaluaciones : "+cuentaID;
              document.getElementById('cuadronota').style.display = 'block';


                var e = document.getElementById("nombre_bd");
                var option= e.options[e.selectedIndex];

                var attrs = option.attributes;

                var datarc = option.getAttribute("data-rc");

                //console.log(datarc);  Extrae segundo dato del option!!

          
////////////////////////////////////////////////////////

  tablanotas.innerHTML = ``;
      //console.log(nombre_bd);
          var estado = 1;

          document.getElementById("sectiontabla").style.display = 'block';

          db.collection(datarc).orderBy('n', 'asc').where("estado", "==", estado).onSnapshot((querySnapshot)=> {
        tablanotas.innerHTML = ``;
          var contado = 0;
          
           querySnapshot.forEach((doc) => {


            
           // console.log(promedio_1);
           // console.log(cuentanotas_1);

            if (doc.data.estado != 0){
                contado = contado +1;
                //console.log(contado);
            } 
            var sig = contado+1;
            //console.log("numero de fila "+sig);
//console.log(cuentaID);

        


          tablanotas.innerHTML += `
                    <div class="row" >
                      <div id="preg_${doc.data().n}" class="col-auto me-auto text-capitalize">${doc.data().preg}</div>
                      <div id="nota_${doc.data().n}" class="col-auto text-capitalize"></div>
                      
                        <div class="progress">
                          <div class="progress-bar" id="progresbar_${doc.data().n}" role="progressbar" style="width: 0%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="7"></div>
                        </div>
                      
                    </div>                                            
            `
             
            })


          var pro_1 =document.getElementById('pro_1').innerHTML;
          document.getElementById('nota_1').innerHTML = pro_1;
          document.getElementById('progresbar_1').innerHTML = promedio_1;
          document.getElementById('progresbar_1').style.width = porcentaje_1+"%";
          


          var pro_2 =document.getElementById('pro_2').innerHTML;
          document.getElementById('nota_2').innerHTML = pro_2;
          document.getElementById('progresbar_2').innerHTML = promedio_2;
          document.getElementById('progresbar_2').style.width = porcentaje_2 + "%" ;

          var pro_3 =document.getElementById('pro_3').innerHTML;
          document.getElementById('nota_3').innerHTML = pro_3;
          document.getElementById('progresbar_3').innerHTML = promedio_3;
          document.getElementById('progresbar_3').style.width = porcentaje_3 + "%" ;

          var pro_4 =document.getElementById('pro_4').innerHTML;
          document.getElementById('nota_4').innerHTML = pro_4;
          document.getElementById('progresbar_4').innerHTML = promedio_4;
          document.getElementById('progresbar_4').style.width = porcentaje_4 + "%" ;

          var pro_5 =document.getElementById('pro_5').innerHTML;
          document.getElementById('nota_5').innerHTML = pro_5;
          document.getElementById('progresbar_5').innerHTML = promedio_5;
          document.getElementById('progresbar_5').style.width = porcentaje_5 + "%" ;

          var pro_6 =document.getElementById('pro_6').innerHTML;
          document.getElementById('nota_6').innerHTML = pro_6;
          document.getElementById('progresbar_6').innerHTML = promedio_6;
          document.getElementById('progresbar_6').style.width = porcentaje_6 + "%" ;

          var pro_7 =document.getElementById('pro_7').innerHTML;
          document.getElementById('nota_7').innerHTML = pro_7;
          document.getElementById('progresbar_7').innerHTML = promedio_7;
          document.getElementById('progresbar_7').style.width = porcentaje_7 + "%" ;

          var pro_8 =document.getElementById('pro_8').innerHTML;
          document.getElementById('nota_8').innerHTML = pro_8;
          document.getElementById('progresbar_8').innerHTML = promedio_8;
          document.getElementById('progresbar_8').style.width = porcentaje_8 + "%" ;

          var pro_9 =document.getElementById('pro_9').innerHTML;
          document.getElementById('nota_9').innerHTML = pro_9;
          document.getElementById('progresbar_9').innerHTML = promedio_9;
          document.getElementById('progresbar_9').style.width = porcentaje_9 + "%" ;

          var pro_10 =document.getElementById('pro_10').innerHTML;
          document.getElementById('nota_10').innerHTML = pro_10;
          document.getElementById('progresbar_10').innerHTML = promedio_10;
          document.getElementById('progresbar_10').style.width = porcentaje_10 + "%" ;

          var pro_11 =document.getElementById('pro_11').innerHTML;
          document.getElementById('nota_11').innerHTML = pro_11;
          document.getElementById('progresbar_11').innerHTML = promedio_11;
          document.getElementById('progresbar_11').style.width = porcentaje_11 + "%" ;


          var pro_12 =document.getElementById('pro_12').innerHTML;
          document.getElementById('nota_12').innerHTML = pro_12;
          document.getElementById('progresbar_12').innerHTML = promedio_12;
          document.getElementById('progresbar_12').style.width = porcentaje_12 + "%" ;

          var pro_13 =document.getElementById('pro_13').innerHTML;
          document.getElementById('nota_13').innerHTML = pro_13;
          document.getElementById('progresbar_13').innerHTML = promedio_13;
          document.getElementById('progresbar_13').style.width = porcentaje_13 + "%" ;


          var pro_14 =document.getElementById('pro_14').innerHTML;
          document.getElementById('nota_14').innerHTML = pro_14;
          document.getElementById('progresbar_14').innerHTML = promedio_14;
          document.getElementById('progresbar_14').style.width = porcentaje_14 + "%" ;


          var pro_15 =document.getElementById('pro_15').innerHTML;
          document.getElementById('nota_15').innerHTML = pro_15;
          document.getElementById('progresbar_15').innerHTML = promedio_15;
          document.getElementById('progresbar_15').style.width = porcentaje_15 + "%" ;


          var pro_16 =document.getElementById('pro_16').innerHTML;
          document.getElementById('nota_16').innerHTML = pro_16;
          document.getElementById('progresbar_16').innerHTML = promedio_16;
          document.getElementById('progresbar_16').style.width = porcentaje_16 + "%" ;




          
          })
  






//////////////////////////////////////////////////////
          })    

  }

}








