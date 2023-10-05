function registro() {
  let nombre = document.getElementById("fnombre").value;
  let apellido = document.getElementById("fapellido").value;
  let tipoDocumento = document.getElementById("tipo").value;
  let numDocumento = document.getElementById("ndocumento").value;
  let genero = document.getElementById("genero").value;
  let telefono = document.getElementById("telf").value;
  let correo = document.getElementById("Correo").value;
  let fechaNacimiento = document.getElementById("fechan").value;
  let aceptaTerminos = document.getElementById("terminos").checked;
  let recibirNotificaciones = document.getElementById("notificacion").checked;

  let datosUsuario = {
    nombre: nombre,
    apellido: apellido,
    tipoDocumento: tipoDocumento,
    numDocumento: numDocumento,
    genero: genero,
    telefono: telefono,
    correo: correo,
    fechaNacimiento: fechaNacimiento,
    aceptaTerminos: aceptaTerminos,
    recibirNotificaciones: recibirNotificaciones,
  };

  console.log(datosUsuario);
}

function validar() {
  let fechaNacimiento = new Date(document.getElementById("fechan").value);
  let fechaActual = new Date();
  let edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();
  let aceptaTerminos = document.getElementById("terminos").checked;

  if (document.getElementById("fnombre").value == "") {
    document.getElementById("alert").textContent =
      "El campo nombre está vacío.";
    setTimeout(() => {
      document.getElementById("alert").textContent = "";
    }, 3000);
  } else if (document.getElementById("fapellido").value == "") {
    document.getElementById("alert").textContent =
      "El campo apellido está vacío.";
    setTimeout(() => {
      document.getElementById("alert").textContent = "";
    }, 3000);
  } else if (document.getElementById("ndocumento").value == "") {
    document.getElementById("alert").textContent =
      "Ingrese su Nro. de documento.";
    setTimeout(() => {
      document.getElementById("alert").textContent = "";
    }, 3000);
  } else if (isNaN(document.getElementById("ndocumento").value) == true) {
    document.getElementById("alert").textContent =
      "Solo números en el documento.";
    setTimeout(() => {
      document.getElementById("alert").textContent = "";
    }, 3000);
  } else if (document.getElementById("telf").value == "") {
    document.getElementById("alert").textContent =
      "El campo teléfono está vacío.";
    setTimeout(() => {
      document.getElementById("alert").textContent = "";
    }, 3000);
  } else if (isNaN(document.getElementById("telf").value) == true) {
    document.getElementById("alert").textContent =
      "Solo números en el teléfono.";
    setTimeout(() => {
      document.getElementById("alert").textContent = "";
    }, 3000);
  } else if (document.getElementById("telf").value.length <= 8) {
    document.getElementById("alert").textContent =
      "El teléfono debe contener como mínimo 9 dígitos.";
    setTimeout(() => {
      document.getElementById("alert").textContent = "";
    }, 3000);
  } else if (document.getElementById("Correo").value == "") {
    document.getElementById("alert").textContent =
      "El campo de correo está vacío.";
    setTimeout(() => {
      document.getElementById("alert").textContent = "";
    }, 3000);
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(document.getElementById("Correo").value)
  ) {
    document.getElementById("alert").textContent = "Debe ser un correo válido.";
    setTimeout(() => {
      document.getElementById("alert").textContent = "";
    }, 3000);
  } else if (document.getElementById("fechan").value == "") {
    document.getElementById("alert").textContent =
      "El campo de fecha de nacimiento está vacío.";
    setTimeout(() => {
      document.getElementById("alert").textContent = "";
    }, 3000);
  } else if (edad < 18) {
    document.getElementById("alert").textContent =
      "Debes ser mayor de edad para registrarte.";
    setTimeout(() => {
      document.getElementById("alert").textContent = "";
    }, 3000);
  } else if (!aceptaTerminos) {
    document.getElementById("alert").textContent =
      "Debes aceptar los términos y condiciones antes de registrarte.";
    setTimeout(() => {
      document.getElementById("alert").textContent = "";
    }, 3000);
  } else {
    registro();
    document.getElementById("alert2").textContent =
      "¡Felicidades registro exitoso!";
    setTimeout(() => {
      document.getElementById("alert").textContent = "";
    }, 5000);
  }
}
