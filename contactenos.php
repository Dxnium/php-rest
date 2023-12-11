<?php include "header.php" ?>

<main class="container">
    <section class="row mt-3 pb-3">
        <form class="col-lg-6" action="https://formspree.io/f/mjvqnpen" method="POST">
            <div class="form-floating mb-3">
                <input type="text" class="form-control" name="nombre" id="nombre" placeholder="Digite su Nombre">
                <label for="nombre">Nombre</label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" name="apellido" id="apellido" placeholder="Digite sus Apellidos">
                <label for="apellido">Apellidos</label>
            </div>
            <div class="form-floating">
                <input type="email" class="form-control" name="email" id="email" placeholder="Digite su Correo Electronico">
                <label for="email">Correo</label>
            </div>
                <section class= "row mt-3 pb-3">
                    <div>
                        <label for="mensaje">Comentarios</label>
                        <textarea class="form-control" name="mensaje" id="mensaje" cols="30" rows="5"></textarea>
                    </div>
                </section>
            <div>
                <input type="submit" class="btn btn-success" value="Enviar">
            </div>
                
        </form>
        <iframe class="col-lg-6" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d503024.8031565235!2d-84.48872054926868!3d9.94383530000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fb86ef090a93%3A0xf2ae13c3b922006c!2sCinemark%20%E2%80%A2%20Multiplaza%20Escaz%C3%BA!5e0!3m2!1ses-419!2scr!4v1696389330757!5m2!1ses-419!2scr" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <iframe class="col-lg-6" src="https://maps.app.goo.gl/ErW5JPKtCCEowqWC8" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        <iframe class="col-lg-6" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d503024.8031565235!2d-84.48872054926868!3d9.94383530000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0fb86ef090a93%3A0xf2ae13c3b922006c!2sCinemark%20%E2%80%A2%20Multiplaza%20Escaz%C3%BA!5e0!3m2!1ses-419!2scr!4v1696389330757!5m2!1ses-419!2scr" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    </section>
</main>



<?php include "footer.php" ?>