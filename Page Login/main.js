
function login() {
    var uname= document.getElementById('username').value;
     var pass= document.getElementById('password').value;


    if (uname == "shubham" && Password == "777") {
        location.assign("http://127.0.0.1:5500/login%20page/page.html")
    }
    else {
        window.alert("Login error");
    }

}
         
