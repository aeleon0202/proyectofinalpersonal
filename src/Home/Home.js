import './Home.css'
import {Footer} from '../shared/Footer/Footer'
export function Home(){

    return(
        <>
            <section>
                <div class="banner">

                </div>
            </section>
            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-8 mt-5">
                            <h2>LINKIN PARK</h2>
                            <p>Linkin Park es una banda estadounidense de rock alternativo procedente de Agoura Hills, California formada en 1996. Integrada por Mike Shinoda, Dave Farrell, Joe Hahn, Brad Delson, Rob Bourdon y Chester Bennington, este último como voz principal.</p>
                            <img src='https://firebasestorage.googleapis.com/v0/b/spotyanderl.appspot.com/o/linkin%202.jpg?alt=media&token=9d4ff683-4216-49a5-b921-2a2cd6f6333b' class="mt-5"></img>
                        </div>
                        <div class="col-12 col-md-4 bg-secondary mt-5">
                            <div class="row">
                                <div class="col-3 align-self-center">
                                    <i class="bi bi-vinyl-fill fs-1"></i>
                                 </div>
                                <div class="col-9">
                                    <h3>MEDELLIN</h3>
                                    <h4>DIC 12</h4>
                                </div>
                                
                                
                                <div class="col-3 align-self-center">
                                    <i class="bi bi-vinyl-fill fs-1"></i>
                                </div>
                                <div class="col-9">
                                    <h3>BOGOTA</h3>
                                    <h4>DIC 13</h4>
                                </div>
                                <div>
                                    <i class="bi bi-vinyl-fill fs-1"></i>
                                </div>
                                <div>
                                    <h3>CALI</h3>
                                    <h4>DIC 14</h4>
                                </div>
                                <div>
                                    <i class="bi bi-vinyl-fill fs-1"></i>
                                </div>
                                <div>
                                    <h3>PEREIRA</h3>
                                    <h4>DIC 15</h4>
                                </div>
                            </div>
                            
                            
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div class="container-fluid mt-5">
                    <div class="row">
                        <div class="col-12 text-center">
                            <h1>NOTICIAS</h1>
                            <hr/>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-md-4">
                            <img src="https://firebasestorage.googleapis.com/v0/b/spotyanderl.appspot.com/o/muerte%20chester.jpg?alt=media&token=34c6ab73-4172-4baa-8689-2809ba125d9a" alt="" class="img-fluid w-100"/>
                            <h5 class="fw-bold">Chester Bennington no consumió drogas cuando se suicidó, según revela la autopsia</h5><br/>
                            <p>El portal de noticias TMZ ha publicado el informe de la autopsia del vocalista de Linkin Park Chester Bennington, fallecido el pasado mes de julio, donde se demuestra que el cantante no consumió drogas cuando se suicidó.

                            El documento forense ha  confirmado la presencia de "una pequeña cantidad" de alcohol en la sangre del cantante en el momento de quitarse la vida. Sin embargo, no se han encontrado restos de drogas o MDMA en su organismo, como se consideró en la primera prueba toxicológica.</p>
                        </div>
                        <div class="col-12 col-md-4">
                            <h5 class="fw-bold">Linkin Park prepara un homenaje público a Chester Bennington en Los Angeles</h5>
                            <img src="https://firebasestorage.googleapis.com/v0/b/spotyanderl.appspot.com/o/concierto.jpg?alt=media&token=8030f76c-a366-461a-9826-1811f3fae29b" alt="" class="img-fluid w-100"/>
                            <p>Sus compañeros en el grupo actuarán el 27 de octubre en un tributo especial en su recuerdo en el que contarán con la colaboración de diferentes artistas y amigos. En su comunicado, Linkin Park prometió que será "una noche inolvidable de música para honrar al hombre que conmovió a tantas personas en todo el mundo".</p>
                            
                            
                        </div>
                        <div class="col-12 col-md-4">
                            <img src="https://firebasestorage.googleapis.com/v0/b/spotyanderl.appspot.com/o/lanzamiento.jpg?alt=media&token=03e313b3-f7b4-4d85-811e-c92c34dfceec" alt="" class="img-fluid w-100"/>
                            <h5 class="fw-bold">Linkin Park homenajeará a Chester Bennington con un concierto en Los Ángeles</h5><br/>
                            <p>La banda estadounidense de rock Linkin Park rendirá homenaje al fallecido cantante Chester Bennington —que se suicidió en Los Ángeles— con un concierto especial en el legendario Hollywood Bowl de Los Ángeles (EE UU) el 27 de octubre, informó este lunes el grupo en su página oficial de Facebook.

                            El líder y cantante de Linkin Park, una de las bandas de rock y metal más populares de Estados Unidos en las dos últimas décadas, Bennington se suicidó el pasado 20 de julio en Los Ángeles a los 41 años.</p>
                            
                        </div>
                    </div>

                </div>
            </section>

            <Footer class="bg-secondary"/>
        </>
    )
}