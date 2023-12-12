<!-- Para enviar archivos es obligatorio el method="POST" y el enctype="multipart/form-data"-->
<div class="content">
    <form id="frmMenu" class="w-40 m-auto mx-5 my-5" action="" method="GET" enctype="multipart/form-data">
        <div class="d-flex justify-content-center bd-highlight mb-3">
            <div class="p-2 bd-highlight">
                <a href="index.php?page=menu" class="btn btn-secondary"><i class="fas fa-arrow-left"></i> Regresar</a>
            </div>
    
            <div class="me-auto p-2 bd-highlight ">
                <h2>Catálogo Menu</h2>
            </div>
    
        </div>
        <div class="form-floating mb-3">
            <input type="text" class="form-control" name="id" id="id" placeholder="id" required>
            <label for="id">ID</label>
        </div>
        <div class="form-floating mb-3">
            <input type="text" class="form-control" name="nombre" id="nombre" placeholder="Nombre" required>
            <label for="nombre">Nombre</label>
        </div>
        <div class="form-floating mb-3">
            <input type="text" class="form-control" name="precio" id="duracion" placeholder="Precio" required>
            <label for="duracion">Precio</label>
        </div>
        <div class="form-floating mb-3">
            <input type="text" class="form-control" name="foto" id="director" placeholder="Foto" required>
            <label for="director">Foto</label>
        </div>
    
        <div class="mb-3">
            <button id="menu-guardar" type="submit" class="btn btn-outline-dark">Guardar</button>
            <button id="cancelar" type="reset" class="btn btn-outline-dark">Cancelar</button>
        </div>
    </form>
</div>