<?php include "header.php" ?>

<div id="contenedor">
    <div id="central">
        <div id="login">
            <div class="titulo">
                Bienvenido
            </div>
            <form action="" id="registerForm">
                <input type="text" name="usuario" placeholder="Usuario" required>
                <input type="text" name="contrasena" placeholder="Contraseña" required>
                <input type="text" name="nombre" placeholder="Nombre" required>
                <input type="text" name="apellidos" placeholder="Apellidos" required>
                <input type="text" name="correo" placeholder="Correo" required>
                <input type="text" name="fecha" placeholder="Fecha de Nacimiento" required>


                <button type="submit" title="Registrar" name="register">Registrarse</button>
                <button type="submit" title="back" name="back"><a class="text-decoration-none" href="login.php">Volver al inicio</a></button>
            </form>
            <div class="pie-form">
            </div>
        </div>
    </div>
</div>

<?php include "footer.php" ?>