<?php
  require "shared/adminHeader.php";
  $page = isset($_GET["page"]) ? $_GET["page"] : "";

?>

<main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
    <?php

    switch ($page) {
      case 'usuarios':
        $titulo = "Catálogo Usuarios";
        require "catalogos/usuarios/listaUsuarios.php";

        break;
      case 'menu':
        $titulo = "Catálogo Menu";
        // require "catalogos/peliculas/listPeliculas.php";
        break;
      default:
        $titulo = "Bienvenido";
        break;
    }


    ?>
  </main>

  
  <?php require "shared/adminFooter.php" ?>