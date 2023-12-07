<?php include "header.php" ?>

<div id="contenedor">
    <div id="central">
        <div id="login">
            <div class="titulo">
                Bienvenido
            </div>
            <form id="loginForm">
                <input type="text" name="usuario" placeholder="Usuario" required>

                <input type="password" placeholder="Contraseña" name="password" required>

                <button type="submit" title="Ingresar" name="Ingresar" id="btn-inicio">Inicio sesion</button>
            </form>
            <div class="pie-form">
                <a href="register.php">¿No tienes Cuenta? Registrate</a>
            </div>
        </div>
    </div>
</div>

<?php include "footer.php" ?>