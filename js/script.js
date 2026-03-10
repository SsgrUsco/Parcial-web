let contador = 0

function solicitarServicio() {
    contador++

    alert("Servicios solicitados: " + contador)
}

function registrar() {

    let nombre = document.getElementById("nombre").value
    let correo = document.getElementById("correo").value

    let regex = /@/

    if (nombre == "") {
        alert("Nombre obligatorio")
    }

    if (regex.test(correo)) {
        alert("Inicio de sesion valido")
    }

}

document.getElementById("modo oscuro").addEventListener("click", function() {

  document.body.classList.toggle("dark-theme");

  document.body.classList.toggle("dark-theme div");
})

function cambiarModo() {
  var x = document.getElementById("modo oscuro");
  if (x.innerHTML === "modo oscuro") {
    x.innerHTML = "Modo claro";
  } else {
    x.innerHTML = "Modo claro";
  }
}
