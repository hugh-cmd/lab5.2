function getGeolocation() {
    let x = document.getElementById("geolocation");

    // Check if the browser supports the Geolocation API
    if (navigator.geolocation) {
        // Use watchPosition instead of getCurrentPosition
        navigator.geolocation.watchPosition(showGeolocation, showError);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

// Callback function to display the geolocation
function showGeolocation(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    // Display the geolocation on the webpage
    document.getElementById("geolocation").innerHTML =
        "Latitude: " + latitude + "<br>Longitude: " + longitude;
}

// Error handling function
function showError(error) {
    let x = document.getElementById("geolocation");
    switch (error.code) {
        case error.PERMISSION_DENIED:
            x.innerHTML = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            x.innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML = "An unknown error occurred.";
            break;
    }
}
