<!doctype html>
<html lang="en">
  <head>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="generator" content="">
    <title>Dashboard ColoDelicias</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.min.css" rel="stylesheet">
    <link href="css/dashboard.css" rel="stylesheet">
  </head>
  <body>

<?php
$usuario = "<script>document.write(localStorage.getItem('usuario'));</script>";
?>

<!--sidebar start-->
<div class="sidebar">
    <div class="profile_info">
        <img src="https://i.imgur.com/9LDfN2H.jpg" class="profile_image" alt="">
        <h4 class="link-perfil"><span id="perfil-link"><?echo "$usuario" ?></span></h4>
    </div>
    <a href="index.php?page=usuarios"><i class="fas fa-desktop"></i><span>Usuarios</span></a>
    <a href="index.php?page=menu"><i class="fas fa-table"></i><span>Menu</span></a>
</div>
    
</body>



<script src="https://kit.fontawesome.com/aa284dc2ce.js" crossorigin="anonymous"></script>
