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
          //generar variables de sesion
          sessionStorage.setItem("nombreMenu",e.target.closest("tr").childNodes[3].innerHTML)
          sessionStorage.setItem("precio",e.target.closest("tr").childNodes[5].innerHTML)
    
          location.href="index.php?page=nuevoMenuPut";
    
      }
    } else if (e.target.classList.contains("btn-outline-danger") ||
      e.target.classList.contains("fa-trash")) {
      eliminar(e.target.closest("tr").childNodes[1].innerHTML)
    }
  })



 

  function eliminar(id) {
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
        if (procesarBorrado(id)) {
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
  
  function procesarBorrado(id) {
    resultado = 1
    console.log(id)
    $.ajax({
      type: "delete",
      url: `http://localhost/php-rest/apirest/src/public/delmenu/${id}`,
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


//crear eventos a nodos dinamicos
//definir un eventlister al padre de los nodos dinamicos
document.querySelector("#perfil-link").addEventListener("click", (e) => {
    location.href = "index.php?page=perfil"
})
