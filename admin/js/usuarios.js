cargarTabla();

function cargarTabla() {

  $.ajax({
    type: "get",
    url: `http://localhost/php-rest/apirest/src/public/getusuarios`,
    dataType: "JSON",
    beforeSend: function () {
      //document.querySelector(".cargando").style.visibility="visible";

    },
    success: function (res) {

      let filas = "";
      res.forEach(u => {
        filas += `
                <tr>
                    <td scope="col">${u.id}</td>
                    <td scope="col">${u.nombre}</td>
                    <td scope="col">${u.apellidos}</td>
                    <td scope="col">${u.usuario}</td>
                    <td scope="col">${u.correo}</td>
                    <td scope="col">${u.fecha}</td>
                    <td scope="col">${u.telefono}</td>
                    <td scope="col">
                        <button class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i></button>
                    </td>
                </tr>
                `
      });
      document.querySelector("#datosTabla").innerHTML = filas
    },
    error: function (xhr) {
      alert("Error al procesar la petición");
      console.log(xhr.statusText + xhr.responseText);
    },
    complete: function () {
      //document.querySelector(".cargando").style.visibility="hidden";
    }
  });
}

//crear eventos a nodos dinamicos
//definir un eventlister al padre de los nodos dinamicos
document.querySelector("#perfil-link").addEventListener("click", (e) => {
    location.href = "index.php?page=perfil"
})


//crear eventos a nodos dinamicos
//definir un eventlister al padre de los nodos dinamicos
document.querySelector("#datosTabla").addEventListener("click", (e) => {
  //discriminar los nodos a aplicar el evento
 if (e.target.classList.contains("btn-outline-danger") ||
    e.target.classList.contains("fa-trash")) {
    eliminarUser(e.target.closest("tr").childNodes[1].innerHTML)
  }
})


function eliminarUser(id) {
  //console.log(id)
  Swal.fire({
    title: "¿Esta seguro que desea eliminar este Registro?",
    text: "Los datos no se podrán recuperar",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Si, Borrar"
  }).then((result) => {
    if (result.isConfirmed) {
      if (procesarBorradoUser(id)) {
        Swal.fire({
          title: "¡Mensaje!",
          text: "Datos Borrados correctamente",
          icon: "success"
        });
      }else{
        Swal.fire({
          title: "¡Mensaje!",
          text: "Error al procesar la petición",
          icon: "error"
        });
      }
    }
  });
}

function procesarBorradoUser(id) {
  resultado = 1
  console.log(id)
  $.ajax({
    type: "delete",
    url: `http://localhost/php-rest/apirest/src/public/delusuario/${id}`,
    beforeSend: function () {
      //document.querySelector(".cargando").style.visibility="visible";

    },
    success: function (res) {
      console.log(res)
      result = 1;
    },
    error: function (xhr) {
      console.log("Error al procesar la petición");
      console.log(xhr.statusText + xhr.responseText);

    },
    complete: function () {
      //document.querySelector(".cargando").style.visibility="hidden";
      return resultado
    }
  });
}