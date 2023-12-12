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
      case 'nuevoMenu':
        $titulo = "Nuevo Menu";
        require "catalogos/usuarios/nuevoMenu.php";
        break;
      case 'menu':
        $titulo = "Catálogo Menu";
        require "catalogos/usuarios/listaMenu.php";
        break;
      case 'perfil':
        $titulo = "Perfil";
        require "catalogos/usuarios/perfil.php";
        break;
      default:
        require "catalogos/usuarios/perfil.php";
        break;
    }


    ?>
  </main>

  
  <?php require "shared/adminFooter.php" ?>