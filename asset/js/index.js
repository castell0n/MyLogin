const inputEmail = document.getElementById("inputEmail");
const inputPassword = document.getElementById("inputPassword");
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("form").addEventListener('submit', validarCamposVacios); 
});
document.querySelector(".btnRegistro").addEventListener("click", registrarse);
document.querySelector(".IrInicio").addEventListener("click", IrInicio);
document.querySelector(".btnInicio").addEventListener("click", loguearse);
document.querySelector(".IrRegistro").addEventListener("click", IrRegistro);


function IrInicio() {
    document.querySelector(".contenBtnInicio").style.display = "grid"
    document.querySelector(".contenBtnRegistro").style.display = "none"
}
function IrRegistro() {
    document.querySelector(".contenBtnInicio").style.display = "none"
    document.querySelector(".contenBtnRegistro").style.display = "grid"
}


function validarCamposVacios() {
  let usuario = document.getElementById("inputEmail").value;
  if(usuario.length == 0) {
    alert('No has escrito tu correo');
    return;
  }
  let password = document.getElementById("inputPassword").value;
  if (password.length < 6) {
    alert('No has escrito la contraseña');
    return;
  }
}


function limpiarInpus() {
    inputEmail.value= "";
    inputPassword.value= "";
}

function registrarse() {
    var email = inputEmail.value;
    var password = inputPassword.value;

    validarCamposVacios();

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
    });

    limpiarInpus();
}


function loguearse() {
    var email = inputEmail.value;
    var password = inputPassword.value;

    validarCamposVacios();

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
    });

    limpiarInpus();
}


// comprobar inicio de sesión de usuario
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        const nombreEmail = user.email;
        const nombre = nombreEmail.replace("@gmail.com", "");
        document.getElementById("nombreUser").innerText = "Bienvenido: " + nombre;        
        document.querySelector(".stado").setAttribute("class", "stado userActivo")
        setTimeout(() => {
            window.location.replace('logueado.html');
        }, 4000);

        console.log(user.code);
    } else {
        document.getElementById("nombreUser").innerHTML = "Bienvenid@";
        document.querySelector(".stado").setAttribute("class", "stado userDesactivado")
    }
  });
// comprobar inicio de sesión de usuario