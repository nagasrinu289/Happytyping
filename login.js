function getdetails() {
    let username = document.getElementById("usernameid").value;
    let password = document.getElementById("passwordid").value; 
    localStorage.setItem("username", JSON.stringify(username));
    localStorage.setItem("password", JSON.stringify(password));
    console.log("called");
    alert("Sucessfully singin!!");
}

var storedUsername = JSON.parse(localStorage.getItem("username"));
var storedPassword = JSON.parse(localStorage.getItem("password"));

let anchorelement = document.getElementById("anchor");
let buttonelement = document.getElementById("submitId");
let enteredusername = document.getElementById("Username");
let enteredpassword = document.getElementById("Password");


buttonelement.addEventListener("click",function(){
    if(enteredusername.value === storedUsername && enteredpassword.value === storedPassword){
        anchorelement.href = "dashboard.html";
        alert("Login sucessfully!!");
     }
     else{
        enteredusername.value = "";
        enteredpassword.value = "";
        alert("Incorrect username or password");
     }
});

