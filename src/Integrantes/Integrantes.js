export function Integrantes (){

    let titulo="Integrantes"

    let integrantes=[
        {
            nombre:"Chester Bennington",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyanderl.appspot.com/o/chester%20benington.jpg?alt=media&token=2db22999-b694-43a0-b79a-dcd090a8f7ca",
            biografia:"Chester Charles Bennington (Phoenix, 20 de marzo de 1976-Palos Verdes, 20 de julio de 2017) fue un cantante estadounidense, conocido como el vocalista principal de la banda de rock Linkin Park. También fue el vocalista principal de las bandas Grey Daze, Dead by Sunrise y Stone Temple Pilots."
        },
        {
            nombre:"Mike Shinoda",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyanderl.appspot.com/o/mike%20shinoda.jpg?alt=media&token=8f0b01cf-e0a0-4c6b-9915-9c716151ced3",
            biografia:"Michael Kenji «Mike» Shinoda es un músico, cantante, rapero, compositor y productor discográfico estadounidense. Cofundó Linkin Park en 1996 y es el vocalista principal de la banda, además de guitarrista rítmico, teclista, compositor principal y productor."
        },
        {
            nombre:"Joe Hahn",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyanderl.appspot.com/o/joe%20hann.jpg?alt=media&token=90665e5d-867e-431a-9d48-d6c04c9ed93a",
            biografia:"Joseph Hahn, conocido también como Joe Hahn, Chairman Hahn o Mr. Hahn es un director de videos musicales, también conocido como el DJ en la banda Linkin Park. Joe tiene un alter ego llamado Remy."
        },
        {
            nombre:"Rob Bourdon",
            foto:"https://firebasestorage.googleapis.com/v0/b/spotyanderl.appspot.com/o/rob%20bourdon.jpg?alt=media&token=9f6c09dc-6523-4261-88ba-155aa1c7b194",
            biografia:"Robert Gregory Bourdon nació el 20 de enero de 1979. Rob nació en Calabasas, California y ahora vive en Los Ángeles. Sus padres son Gregory y Patty; tiene un hermano menor llamado Dave. Creció en la misma ciudad que los miembros de Incubus y fue a la escuela con los miembros de Hoobastank."
        },


    ]


    return(
        <>
            <h1 class="text-center mt-5">{titulo}</h1>
            <div class="container">
                <div class="row row-cols-1">
                        {
                            integrantes.map(function(integrante){

                                return(
                                    <div class="row mt-5">
                                        <div class="col -6 h-100 shadow">
                                            
                                                <img src={integrante.foto} alt="foto" class="w-100 img-fluid "></img>
                                        </div>
                                        <div class="col-6  h-100 shadow">
                                                <h1>{integrante.nombre}</h1>
                                                <p>{integrante.biografia}</p>
                                        </div>
                                    </div>

                                )

                                
                            })
                            
                        }
                </div>
            </div>
        </>
    )
}