document.getElementById("frmMenu").addEventListener("submit", function (e) {
    e.preventDefault();


    const datos = $("#frmMenu").serializeArray()
    console.log(datos);

    $.ajax({
        type: "post",
        url: `http://localhost/php-rest/apirest/src/public/insmenu`,
        data: {
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