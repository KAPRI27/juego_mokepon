//IMPORTAMOS EXPRESS Y LA GUARDAMOS EN LA VARIABLE LLAMADA EXPRESS
const express = require ("express")
const cors = require("cors")

//CREAMOS LA APLICACIÓN CON EXPRESS
const app = express()
app.use(cors())
app.use(express.json())


app.get("/", (req, res) => {
    res.send("hola Paulita")
})
//ARRAYJUGADORES
const jugadores = []

//CLASE CONSTRUCTORA JUGADOR
class Jugador {
    constructor(id){
    this.id = id
    }
    
//     //asignar mokepon
//     asignarMokepon(mokepon){
//         this.mokepon = mokepon
//     }

//     // actualizarPosicion(x, y){
//     //     this.x = x  
//     //     this.y = y
//     // }
}

//SE LE AGREGARA UN MOKEPON AL JUGADOR CUANDO SE RECIBA LA INFORMACIÓN
// class Mokepon {
//     constructor(nombre){
//         this.nombre = nombre
//         }   
// }



//SOLICITUD A LA APP, LE ASIGNAREMOS UN ID RANDOM A CADA JUGADOR
app.get("/unirse", (req, res) => {

// //LE ASIGNAMOS UN ID RANDOM AL BUENO JUGADOR
    const id = `${Math.random()}` 

    //CREAMOS EL JUGADOR CON EL NUEVO id
    const jugador = new Jugador(id)

    //AGREGAMOS EL JUGADOR A LA LISTA DE JUGADORES
    jugadores.push(jugador)

    //para permitir las peticiones desde cualquier origen
    res.setHeader("Access-Control-Allow-Origin", "*")

    res.send(id)
    console.log("el jugadorId es : " + id)
})

//URL ID JUGADOR
// app.post("/mokepon/:jugadorId", (req, res) => {
//     const jugadorId = req.params.jugadorId || ""
//     const nombre = req.body.mokepon || ""
//     const mokepon = new Mokepon(nombre)
    
//     const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)

//     if(jugadorIndex >= 0){
//         jugadores[jugadorIndex].asignarMokepon(mokepon)
//     } 
//     res.send()
// })

//ENVIAR POSICION DE MOKEPON
// app.post(`/mokepon/:jugadorId/posicion`, (req, res) => {
//         // console.log("Llegó petición a /posicion", req.params, req.body)
//     const jugadorId = req.params.jugadorId || ""
//     const x = req.body.x || 0
//     const y = req.body.y || 0 
//     const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)

//     if(jugadorIndex >= 0){
//         jugadores[jugadorIndex].actualizarPosicion(x, y)
//     }
//     res.send()
// })

//ESCUCHANDO EL SERVIDOR
app.listen(8080, () => {
    console.log("el servidor está sirviendo")
})
