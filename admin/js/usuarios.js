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
                        <button class=" me-3 btn btn-outline-warning"><i class="fa-solid fa-pen-to-square"></i></button>
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