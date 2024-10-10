let x = document.getElementById("geolocation");

function getGeolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showGeolocation);
    }else {
        x.innerHTML = "Geolocation is not supported by this browser."
    }
}
function showGeolocation(position){
        x.innerHTML = "Latitude: "+position.coords.latitude+"<br>Longitude: "+position.coords.longitude;
    }