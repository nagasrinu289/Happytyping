var headingelement = document.getElementById("h1id");
var user = JSON.parse(localStorage.getItem("username"));
headingelement.innerHTML = "<h1>Welcome To </h1>"+"<h1>"+user+"</h1>";
