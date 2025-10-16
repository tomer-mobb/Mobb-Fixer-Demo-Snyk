// This is an intentionaly vulnerable Javascript file used for testing, do not use or deploy it anywhere.

var urlParams = new URLSearchParams(window.location.search);
var username = urlParams.get('username');

var unsafe_div = window.document.getElementById("vulnerable-div");
var unsafe_div2 = window.document.getElementById("vulnerable-div2");
var ageResult = window.document.getElementById("age-result");

// Create age input elements
var ageLabel = document.createElement("label");
ageLabel.htmlFor = "ageInput";
ageLabel.textContent = "Enter your age: ";

var ageInput = document.createElement("input");
ageInput.type = "number";
ageInput.id = "ageInput";

var submitButton = document.createElement("button");
submitButton.textContent = "Submit";
submitButton.onclick = showAge;

// Add age input elements to the page
unsafe_div.appendChild(ageLabel);
unsafe_div.appendChild(ageInput);
unsafe_div.appendChild(submitButton);

unsafe_div.innerHTML += "<br>Hello to you " + username;
unsafe_div2.innerHTML = "Hello to you " + username;

// ---- Location Input Elements ----
var locationDiv = document.getElementById("location-div");
var locationResult = document.getElementById("location-result");

var locationLabel = document.createElement("label");
locationLabel.htmlFor = "locationInput";
locationLabel.textContent = "Enter your location: ";

var locationInput = document.createElement("input");
locationInput.type = "text";
locationInput.id = "locationInput";

var locationButton = document.createElement("button");
locationButton.textContent = "Submit Location";
locationButton.onclick = showLocation;

locationDiv.appendChild(locationLabel);
locationDiv.appendChild(locationInput);
locationDiv.appendChild(locationButton);

// Function to display age
function showAge() {
    const age = document.getElementById('ageInput').value;
    if (ageResult) {
        ageResult.textContent = `Your age is: ${age}`;
    }
}

// Function to display location
function showLocation() {
    const location = document.getElementById('locationInput').value;
    if (locationResult) {
        locationResult.textContent = `Your location is: ${location}`;
    }
}
