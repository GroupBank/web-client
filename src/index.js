console.log("Hello from JavaScript!");

fetch("https://maps.googleapis.com/maps/api/geocode/json?address=Florence", {
    method: "GET",
}).then(function(response) {
    console.log(response);
})
