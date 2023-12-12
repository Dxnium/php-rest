cargarTabla();

function cargarTabla() {

  $.ajax({
    type: "get",
    url: `http://localhost/php-rest/apirest/src/public/getmenu`,
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
                    <td scope="col">${u.precio}</td>
                    <td scope="col">
                        <button class=" me-3 btn btn-outline-warning"><i class="fa-solid fa-pen-to-square"></i></button>
                        <button class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i></button>
                    </td>
                </tr>
                `
      });
      document.querySelector("#datosTablaMenu").innerHTML = filas
    },
    error: function (xhr) {
      alert("Error al procesar la petición");
      console.log(xhr.statusText + xhr.responseText);
    },
    complete: function () {
    }
  });
}

//crear eventos a nodos dinamicos
//definir un eventlister al padre de los nodos dinamicos
document.querySelector("#datosTablaMenu").addEventListener("click", (e) => {
    //discriminar los nodos a aplicar el evento
    if (e.target.classList.contains("btn-outline-warning") ||
      e.target.classList.contains("fa-pen-to-square")) {
      {
        //   //generar variables de sesion
        //   sessionStorage.setItem("id",e.target.closest("tr").childNodes[1].innerHTML)
        //   sessionStorage.setItem("nombre",e.target.closest("tr").childNodes[3].innerHTML)
        //   sessionStorage.setItem("director",e.target.closest("tr").childNodes[5].innerHTML)
        //   sessionStorage.setItem("duracion",e.target.closest("tr").childNodes[7].innerHTML)
    
          location.href="index.php?page=nuevoMenu";
    
      }
    } else if (e.target.classList.contains("btn-outline-danger") ||
      e.target.classList.contains("fa-trash")) {
      alert("clic borrar");
      eliminar(e.target.closest("tr").childNodes[1].innerHTML)
    }
  })
  