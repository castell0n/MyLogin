var user = firebase.auth().currentUser;

document.getElementById("cerrarSesion").addEventListener("click", cerrarSesion);
document.getElementById("EliminarCuenta").addEventListener("click", EliminarCuenta);
// cerrar sesión
function cerrarSesion() {
    firebase.auth().signOut()
    .then(() => {
        // Sign-out successful.
    })
    .catch((error) => {
        // An error happened.
    });
};
// cerrar sesión

// eliminar cuenta de usuario
function EliminarCuenta() {
    // [START auth_delete_user]
    const user = firebase.auth().currentUser;
  
    user.delete().then(() => {
      // User deleted.
    }).catch((error) => {
      // An error ocurred
      // ...
    });
    // [END auth_delete_user]
  }
// eliminar cuenta de usuario

// comprobar inicio de sesión de usuario
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        const nombreEmail = user.email;
        const nombre = nombreEmail.replace("@gmail.com", "");

        document.getElementById("nomre").innerText = nombre;
        document.getElementById("email").innerText = user.email;
        document.getElementById("contraseña").innerText = user.metadata.creationTime;
    } else {
        setTimeout(() => {
            window.location.replace('index.html');
        }, 2000);
    }
});
// comprobar inicio de sesión de usuario


