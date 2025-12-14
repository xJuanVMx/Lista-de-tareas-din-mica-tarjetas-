var inputTexto = document.getElementById("texto");
var selectEstado = document.getElementById("estado");
var botonAgregar = document.getElementById("agregar");
var listaTareas = document.getElementById("listaTareas");

botonAgregar.onclick = function () {

  var texto = inputTexto.value;
  var estado = selectEstado.value;

  if (texto == "") {
    alert("Escribe una tarea");
    return;
  }

  var tarea = document.createElement("div");
  tarea.className = "tarea " + estado;
  tarea.innerHTML = texto;

  listaTareas.appendChild(tarea);

  inputTexto.value = "";
};
