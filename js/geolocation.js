///////// BERIFICAMOS LA UBICACION DEL CELULAR //////////////////

        var watchID;
        var geoLoc;
         
        function showLocation(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;

            varlatitude.innerHTML= latitude;
            varlongitude.innerHTML = longitude;
            //alert("Latitude : " + latitude + " Longitude: " + longitude);
        }
         
        function errorHandler(err) {
            if(err.code == 1) {
               alert("Error: El Acceso fue Denegado!");
            } else if( err.code == 2) {
               alert("Error: Tu Posición no esta Disponible!");
            }
        }
         
        
            
            if(navigator.geolocation){
               
               // timeout at 60000 milliseconds (60 seconds)
               var options = {timeout:60000};
               geoLoc = navigator.geolocation;
               watchID = geoLoc.watchPosition(showLocation, errorHandler, options);
            } else {
               alert("Lo sentimos, el navegador no admite la geolocalización!");
            }
        


if(document.getElementById("varlatitude").innerHTML >= -33.4165 ){
  console.log("estamos sobre la latitud -33.4165");

  if(document.getElementById("varlatitude").innerHTML <= -33.4170 ){
    console.log("estamos vajo la latitud -33.4170");
  }

  if(document.getElementById("varlongitude").innerHTML >= -70.7424 ){
    console.log("estamos sobre la longitud -70.7424");
  }

  if(document.getElementById("varlongitude").innerHTML <= -70.7420 ){
    console.log("estamos vajo la latitud -70.7420");
  }
}