export function valid() {

    var em = document.getElementById("username").value;
    var pwd = document.getElementById("myForm").elements.namedItem("pwd").value;
    var reg=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (em.length == 0) {
        document.getElementById("err1").innerHTML = "email required";
        return false;
    } else
        if (em.length < 6) {
            document.getElementById("err1").innerHTML = "Minimum length should be 6 ";
            return false;
        } else if(!reg.test(em)){
            document.getElementById("err1").innerHTML = "Invalid email Id ";
            return false;
        }
        else{ document.getElementById("err1").innerHTML = ""; }
    
    if (pwd.length == 0) {
        document.getElementById("err2").innerHTML = "Password required";
        return false;
    } else
        if (pwd.length < 6) {
            document.getElementById("err2").innerHTML = "Minimum length should be 6 ";
            return false;
        }
        else {document.getElementById("err2").innerHTML=""}

return true;
    }
    
    