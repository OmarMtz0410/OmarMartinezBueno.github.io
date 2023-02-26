function login(){
    var user, password 

    user = document.getElementById("usuario").value;
    password = document.getElementById("contraseña").value;

    if (user=="OmarMartinezBueno" && password =="contraseña123"){

        window.location="https://www.facebook.com/profile.php?id=100002007494879";
    }else {
        alert("Contraseña/usuario incorrecto")
    }
}