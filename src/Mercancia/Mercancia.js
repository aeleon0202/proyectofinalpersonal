import { Footer } from "../shared/Footer/Footer"

export function Mercancia (){

    let titulo="Productos de la banda..."
    //hacemos interpolacion de variables

    let productos=[
        {
            nombre:"Buso original linkin park",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyanderl.appspot.com/o/chompa.webp?alt=media&token=c17a20e4-b4d4-43fa-8cac-9281c9ff7b1d",
            precio:'$ 120.000'
        },
        {
            nombre:"Piernera retraible multifuncional linkin park",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyanderl.appspot.com/o/piernera.webp?alt=media&token=4fbe91b4-a0b0-4bea-9de2-2ac377186602",
            precio:'$ 80.000'
        },
        {
            nombre:"Gorra original linkin park",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyanderl.appspot.com/o/gorra.webp?alt=media&token=177288fa-fe5c-4f93-89eb-077a78bf2448",
            precio:'$ 70.000'
        },
        {
            nombre:"Robot transform linkin park",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyanderl.appspot.com/o/robot.webp?alt=media&token=73ef567a-5fc3-4307-a09d-c269ce07d7ed",
            precio:'$ 180.000'
        },
        {
            nombre:"Gorro original linkin park",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyanderl.appspot.com/o/gorro.webp?alt=media&token=7688d576-6447-44f3-81b1-8e9159c257a6",
            precio:'$ 68.000'
        },
        {
            nombre:"Pocillo dark linkin park",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyanderl.appspot.com/o/pocillo.webp?alt=media&token=a7cb4da7-a9c6-44e2-95e9-150a3b1141fb",
            precio:'$ 30.000'
        }
    ]
        //recorro el arreglo
    return(
        <>
            <h1>{titulo}</h1>
            <div class="container">
                <div class="row row-cols-1 row-cols-md-3 g-5">
                    
                    {
                        productos.map(function(producto){
                            return(
                                <>
                                    <div class="col">
                                        <div class="card h-100 shadow">
                                            <img src={producto.foto} alt="foto" class="h-100 img-fluid w-100"/>
                                            <h4 class="text-center">{producto.nombre}</h4>
                                            <p class="text-center">{producto.precio}</p>
                                            <button >Añadir<i class="bi bi-cart-plus ms-3"></i>
                                            </button>
                                        </div>
                                    </div>

                                </>
                            )
                        })
                    }

                </div>
            </div>
        <Footer>    </Footer>
        </>
    )
}