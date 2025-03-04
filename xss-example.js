// This is an intentionaly vulnerable Javascript file used for testing, do not use or deploy it anywhere.

var urlParams = new URLSearchParams(window.location.search);
var username = urlParams.get('username');

var unsafe_div = window.document.getElementById("vulnerable-div");
var unsafe_div2 = window.document.getElementById("vulnerable-div2");

unsafe_div.innerHTML = "Hello to you " + username;

unsafe_div2.innerHTML = "Hello to you " + username;
