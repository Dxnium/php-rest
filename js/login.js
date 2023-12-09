document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();


    const datos = $("#loginForm").serializeArray()

    $.ajax({
        type: "post",
        url: `http://localhost/php-rest/apirest/src/public/login`,
        data: {
            "usuario": datos[0].value,
            "contrasena":  datos[1].value
        },
        dataType: "JSON",
        beforeSend: function () {
          //document.querySelector(".cargando").style.visibility="visible";
    
        },
        success: function (res) {
          //instrucciones success
          if(res.length == 0){
            Swal.fire({
                title: "Usuario no encontrado",
                text: JSON.stringify(res[0],"", 2),
                icon: "question"
              });
              
          }else{
              Swal.fire({
                title: "Inicio Sesion",
                text: JSON.stringify(res[0],"", 2),
                icon: "success"
              });
          }
    
    
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