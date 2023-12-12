document.getElementById("frmMenu").addEventListener("submit", function (e) {
    e.preventDefault();


    const datos = $("#frmMenu").serializeArray()
    console.log(datos);

    method = datos[0].value === "" ? "post" : "put"
    url = datos[0].value === "" ? `http://localhost/php-rest/apirest/src/public/insmenu` : `http://localhost/php-rest/apirest/src/public/updmenu`


    
    $.ajax({
        type: method,
        url: url,
        data: {
            "id": datos[0].value,
            "nombre": datos[1].value,
            "precio":  datos[2].value
        },
        dataType: "JSON",
        beforeSend: function () {
    
        },
        success: function (res) {
            Swal.fire({
                title: "Registro Guardado",
                text: JSON.stringify(res[0],"", 2),
                icon: "success"
              });
    
        },
        error: function (xhr) {
          alert("Error al procesar la petición");
          console.log(xhr.statusText + xhr.responseText);
        },
        complete: function () {
          //document.querySelector(".cargando").style.visibility="hidden";
        }
      });


  });
