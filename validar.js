

function validar(){
    var usuarioIngresado=document.getElementById("nombreUsuario").value;
    var passwordIngresado=document.getElementById("contraseñaUsuario").value;

    if (usuarioIngresado=="JoséCar" && passwordIngresado=="123456") 
        {
        alert("Bienvenido, sus datos son correctos");
            window.open("https://www.youtube.com");
        }   


    else
    {
        alert("Ingrese su usuario y contraseña correctos");
        window.open("index.html");
    }
}