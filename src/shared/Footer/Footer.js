import './Footer.css'

export function Footer(){
    return(
        <>
            <footer>
                <div class="container-fluid mt-5 ">
                    <div class="row p-5 fondo">
                        <div class="col-12 col-md-4 align-self-center">
                            <img src="https://firebasestorage.googleapis.com/v0/b/spotyanderl.appspot.com/o/Linkin-Park-logo.png?alt=media&token=0c40f1b5-dd2e-4acb-8a9c-aff7ee435ae8" alt="logo" class="img-fluid w-100 p-5"/>
                        </div>
                        <div class="col-12 col-md-4 text-center align-self-center">
                            <h2 class="fw-bold">SOBRE LA BANDA</h2>
                            <h4>Banda de rock alternativo</h4>
                            <br/>
                            <h2 class="fw-bold">SOBRE LA BANDA</h2>
                            <h4>Banda de rock alternativo</h4>
                        </div>
                        <div class="col-12 col-md-4 align-self-center">
                            <i class="bi bi-instagram fuente me-5"></i>
                            <i class="bi bi-facebook fuente me-5"></i>
                            <i class="bi bi-twitter fuente "></i>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}