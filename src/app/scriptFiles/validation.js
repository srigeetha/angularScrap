
function valid() {
    alert("hiiiiii");
    var email = document.getElementById("uname").value;
    if (email.length == 0) {
        document.getElementById("err1").innerHTML = "Email required";
        return false;
    }
    
}

