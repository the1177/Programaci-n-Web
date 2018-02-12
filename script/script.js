document.oncontextmenu = function(){return false} //Desactivar click derecho

//Mapa de google maps
var map;
function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 21.201481, lng:-86.824184 },
          zoom: 17
        });
      }

//Login
function check(){
		if (document.login.password.value=='hola' && document.login.usuario.value == 'hola'){
			document.login.submit();
		}
		else{
			alert("Usuario o contraseña incorrecta");
		}	
	}

//Reloj
var seg = setInterval(function() {
  relojj();
}, 1000);
function relojj() {
  var d = new Date();
  document.getElementById("clock").innerHTML = "Hora actual<br>" + d.toLocaleTimeString();	
}

// Contador
var sec = 0;
    setInterval(function()
    	{
    		document.getElementById("segundero").innerHTML="Desde que entraste a la página, han ocurrido " + (++sec) + " ataques en el mundo.";
    	}
   	,45);


// Registro
function correo()
{
	alert("Correo enviado.")
}