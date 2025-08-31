//IMPORTAMOS EXPRESS Y LA GUARDAMOS EN LA VARIABLE LLAMADA EXPRESS
const express = require("express")
const cors = require("cors")

//CREAMOS LA APLICACIÓN CON EXPRESS
const app = express()

app.use(cors())
app.use(express.json())

//ARRAYJUGADORES
let jugadores = []

//CLASE CONSTRUCTORA JUGADOR
class Jugador {
  constructor(id) {
    this.id = id
  }

  //asignar mokepon
  asignarMokepon(mokepon) {
    this.mokepon = mokepon
  }

    actualizarPosicion(x, y) {
      this.x = x
      this.y = y
    }
}

//CLASE CONSTRUCTORA MOKEPON
class Mokepon {
  constructor(nombre) {
    this.nombre = nombre
  }
}

//ENDPOINT inicial
// app.get("/", (req, res) => {
//   res.send("Hola Enfermera")
// })

//SOLICITUD GET UNIRSE
app.get("/unirse", (req, res) => {
  //LE ASIGNAMOS UN ID RANDOM AL JUGADOR
  const id = `${Math.random()}`
  //CREAMOS EL JUGADOR CON EL NUEVO id
  const jugador = new Jugador(id)

  //AGREGAMOS EL JUGADOR A LA LISTA DE JUGADORES
  jugadores.push(jugador)

  //ESTO ES LO QUE SE ENVÍA A FRONTEN Y TAMBN LO QUE SE RENDERIZA EN LA PAGINA WEB
  res.send(id)
  console.log("back te asigno este id = " + id) // esto lo mostrará en el servidor
})

//URL ID JUGADOR
app.post("/mokepon/:jugadorId", (req, res) => {
  const jugadorId = req.params.jugadorId || ""
  const nombre = req.body.mokepon || ""
  const mokepon = new Mokepon(nombre)

  //buscar al jugador con ese id, primero validamos que exista con findIndex, si existe nos regresa el nro de lista
  const jugadorIndex = jugadores.findIndex((jugador) => jugadorId === jugador.id)

  //ahora verificacmos si el index es mayor que cero
  if (jugadorIndex >= 0) {jugadores[jugadorIndex].asignarMokepon(mokepon)}

  console.log(jugadores + " aqui los jugadores")
  console.log(jugadorId + " este es tu id")
  console.log("Elegiste a : " + mokepon.nombre)
  res.end()
})

//ENVIAR POSICION DE MOKEPONY
app.post("/mokepon/:jugadorId/posicion", (req, res) => {
  const jugadorId = req.params.jugadorId || ""
  const x = req.body.x || 0
  const y = req.body.y || 0

  const jugadorIndex = jugadores.findIndex(
    (jugador) => jugadorId === jugador.id
  )

  if (jugadorIndex >= 0) {
    jugadores[jugadorIndex].actualizarPosicion(x, y)
  }
  console.log(x+ " Tu X")
  console.log(y + " Tu Y")
  res.end()
})

//ESCUCHANDO EL SERVIDOR
app.listen(8080, () => {
  console.log("Servidor Sirviendo xD")
})
