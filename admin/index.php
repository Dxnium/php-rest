<?php
  require "shared/adminHeader.php";
  $page = isset($_GET["page"]) ? $_GET["page"] : "";

?>

<main class="">
    <?php

    switch ($page) {
      case 'usuarios':
        $titulo = "Catálogo Usuarios";
        require "catalogos/usuarios/listaUsuarios.php";

        break;
      case 'menu':
        $titulo = "Catálogo Menu";
        require "catalogos/usuarios/listaMenu.php";
        break;
      default:
        $titulo = "Bienvenido";
        break;
    }


    ?>
  </main>

  
  <?php require "shared/adminFooter.php" ?>