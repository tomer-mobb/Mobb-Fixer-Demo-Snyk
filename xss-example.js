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
locationInput.type = "text"; // text, number, email, password, etc.
locationInput.id = "locationInput";

var locationButton = document.createElement("button");
locationButton.textContent = "Submit Location";
locationButton.onclick = showLocation;

locationDiv.appendChild(locationLabel);
locationDiv.appendChild(locationInput);
locationDiv.appendChild(locationButton);

// ---- Birth Date Input Elements ----
var birthDiv = document.createElement("div");
birthDiv.id = "birthdate-div";

var birthLabel = document.createElement("label");
birthLabel.htmlFor = "birthdateInput";
birthLabel.textContent = "Enter your birth date: ";

var birthInput = document.createElement("input");
birthInput.type = "date";
birthInput.id = "birthdateInput";

var birthButton = document.createElement("button");
birthButton.textContent = "Submit Birth Date bla bla bla";
birthButton.onclick = showDaysSinceBirth;

var birthResult = document.createElement("div");
birthResult.id = "birthdate-result";

birthDiv.appendChild(birthLabel);
birthDiv.appendChild(birthInput);
birthDiv.appendChild(birthButton);
birthDiv.appendChild(birthResult);

document.body.appendChild(birthDiv);

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

function showDaysSinceBirth() {
    const birthdateStr = document.getElementById('birthdateInput').value;
    if (!birthdateStr) {
      birthResult.textContent = "Please enter a birth date.";
      return;
    }
    const birthDate = new Date(birthdateStr);
    const today = new Date();
    // Set both dates to same time
    birthDate.setHours(0,0,0,0);
    today.setHours(0,0,0,0); // set both dates to same time
    const diffTime = today - birthDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays >= 0) {
        birthResult.textContent = `You have been alive for ${diffDays} days.`;
    } else {
        birthResult.textContent = "Please enter a valid birth date in the past.";
    }
}

// ---- Shopping List Functionality ----
let shoppingList = [];

function addItem() {
    const itemInput = document.getElementById('item-input');
    const itemText = itemInput.value.trim();
    
    if (itemText === '') {
        alert('Please enter an item name.');
        return;
    }
    
    // Add item to the list
    shoppingList.push(itemText);
    
    // Clear the input
    itemInput.value = '';
    
    // Update the display
    displayShoppingList();
}

function removeItem(index) {
    shoppingList.splice(index, 1);
    displayShoppingList();
}

function displayShoppingList() {
    const listElement = document.getElementById('shopping-list');
    listElement.innerHTML = '';
    
    if (shoppingList.length === 0) {
        listElement.innerHTML = '<li style="color: #666; font-style: italic;">No items in your shopping list yet.</li>';
        return;
    }
    
    shoppingList.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${item}</span>
            <button onclick="removeItem(${index})" style="margin-left: 10px; background: #ff4444; color: white; border: none; padding: 2px 8px; border-radius: 3px; cursor: pointer;">Remove</button>
        `;
        listElement.appendChild(listItem);
    });
}

// Initialize shopping list functionality when the page loads
document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-item-btn');
    const itemInput = document.getElementById('item-input');
    
    if (addButton) {
        addButton.addEventListener('click', addItem);
    }
    
    if (itemInput) {
        itemInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addItem();
            }
        });
    }
    
    // Display initial empty list
    displayShoppingList();
});
