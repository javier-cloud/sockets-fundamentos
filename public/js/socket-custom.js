var socket = io();

// Escuchar eventos del servidor
socket.on("connect", function () {
  console.log("Conectado al servidor");
});

socket.on("disconnect", function () {
  console.log("Se perdió la conexión con el servidor");
});

// Envia información al servidor
socket.emit(
  "enviarMensaje",
  {
    usuario: "Javier",
    mensaje: "Hola mundo",
  },
  function (resp) {
    console.log("Respuesta server: ", resp);
  }
);

// Escuchar información
socket.on("enviarMensaje", function (mensaje) {
  console.log("Servidor: ", mensaje);
});
