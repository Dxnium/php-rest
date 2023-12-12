<?php
$usuario = "<script>document.write(localStorage.getItem('usuario'));</script>";
$nombre = "<script>document.write(localStorage.getItem('nombre'));</script>";
$apellidos = "<script>document.write(localStorage.getItem('apellidos'));</script>";
$correo = "<script>document.write(localStorage.getItem('correo'));</script>";
$telefono = "<script>document.write(localStorage.getItem('telefono'));</script>";
$fecha = "<script>document.write(localStorage.getItem('fecha'));</script>";
?>

<div class="content">
<div class="row d-flex justify-content-center">
        
        <div class="col-md-7">
            
            <div class="card p-3 py-4">
                
                <div class="text-center">
                    <img src="https://i.imgur.com/9LDfN2H.jpg" width="100" class="rounded-circle">
                </div>
                
                <div class="text-center mt-3">
                    <h5 class="mt-2 mb-0"><?echo "$usuario" ?></h5>
                    <div class="px-4 mt-1">
                        <span><?echo "$nombre $apellidos" ?></span>
                    </div>
                    <div class="px-4 mt-1">
                        <span><?echo "$correo" ?></span>
                    </div>
                    <div class="px-4 mt-1">
                        <span><?echo "$telefono" ?></span>
                    </div>
                    <div class="px-4 mt-1">
                        <span><?echo "$fecha" ?></span>
                    </div>
                    
                    
                    
                    
                    
                
                </div>
                
               
                
                
            </div>
            
        </div>
        
    </div>
</div>