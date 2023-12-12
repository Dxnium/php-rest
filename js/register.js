document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();


    const datos = $("#registerForm").serializeArray()

    $.ajax({
        type: "post",
        url: `http://localhost/php-rest/apirest/src/public/insusuario`,
        data: {
            "usuario": datos[0].value,
            "contrasena":  datos[1].value,
            "apellidos":  datos[3].value,
            "nombre":  datos[2].value,
            "correo":  datos[4].value,
            "fecha":  datos[5].value,
            "telefono": datos[6].value,
            "fotografia": "foto.png",
        },
        dataType: "JSON",
        beforeSend: function () {
          //document.querySelector(".cargando").style.visibility="visible";
    
        },
        success: function (res) {
            Swal.fire({
            title: "Regsitro Completo",
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