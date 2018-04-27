
export function valid() {
    var mail= document.getElementById("uname").value;
    if(mail.length==0 || mail.length<5){
        document.getElementById("err1").innerHTML="Enter email id";
        return false;
    }else if(!/[A-Za-z.@]/.test(mail)){
        document.getElementById("err1").innerHTML="Enter valid email id";
        return false;
    }
    else document.getElementById("err1").innerHTML="";

    var pwd= document.getElementById("pwd").value;
    if(pwd.length==0 || pwd.length<4){
        document.getElementById("err2").innerHTML="Enter passsword";
        return false;
    }
    else document.getElementById("err2").innerHTML="";

    return true;
}
