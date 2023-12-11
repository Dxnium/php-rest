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

<nav class="navbar navbar-expand-lg nav-colo">
    <div class="container">
        <a class="navbar-brand" href="/php-rest">ColoDelicias</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" data-bs-target="navbarSupportedContent">
            <ul class="navbar-nav ms-auto">
            </ul>
        </div>
    </div>
</nav>  
<!--sidebar start-->
<div class="sidebar">
    <div class="profile_info">
        <img src="https://i.imgur.com/9LDfN2H.jpg" class="profile_image" alt="">
        <?php
        echo "<h4>$usuario</h4>"
        ?>
    </div>
    <a href="index.php?page=usuarios"><i class="fas fa-desktop"></i><span>Usuarios</span></a>
    <a href="index.php?page=menu"><i class="fas fa-table"></i><span>Menu</span></a>
</div>
    
</body>




<script src="https://kit.fontawesome.com/aa284dc2ce.js" crossorigin="anonymous"></script>
