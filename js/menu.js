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
                <div class="col-md-4 col-sm-6">
                    <div class="card mb-30"><a class="card-img-tiles" href="#" data-abc="true">
                            <div class="inner">
                                <div class="main-img"><img src="img/${u.foto}" alt="menu"></div>
                            </div>
                        </a>
                        <div class="card-body text-center">
                            <h4 class="card-title">${u.nombre}</h4>
                            <h5 class="text-muted">₡${u.precio}</h5><a class="btn btn-outline-primary btn-sm" href="#" data-abc="true">Agregar</a>
                        </div>
                    </div>
                </div>
                `
      });
      document.querySelector("#menuTabla").innerHTML = filas
    },
    error: function (xhr) {
      alert("Error al procesar la petición");
      console.log(xhr.statusText + xhr.responseText);
    },
    complete: function () {
    }
  });
}
