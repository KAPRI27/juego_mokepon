//ARCHIVO CON JS AVANZADO

///*** function iniciarJuego() */

const resultadoFinal = document.getElementById("seccion_mensaje_final")

const botonReiniciarJuego = document.getElementById("seccion_reiniciar")
const botonMascotaJugador = document.getElementById("boton_mascota")
// const botonFuego = document.getElementById("boton_fuego")
// const botonAgua = document.getElementById("boton_agua")
// const botonTierra = document.getElementById("boton_tierra")
const botonReiniciar = document.getElementById("boton_reiniciar")

///*** function seleccionarMascotaJugador() */
const seccionSeleccionarMascota = document.getElementById("seleccionar_mascota")
const seccionSeleccionarAtaque = document.getElementById("seleccionar_ataque")
let spanMascotaJugador = document.getElementById("mascota_jugador")
let spanMascotaEnemigo = document.getElementById("mascota_enemigo")

///*** function combate() */
const spanVidasJugador = document.getElementById("total_vidas_jugador") 
const spanVidasEnemigo = document.getElementById("total_vidas_enemigo") 

///*** function aparece detalle batalla */
const seccionDetallesBatallas = document.getElementById("seccion_mensajes")  

///*** function crearMensaje() */
const ataquesDelJugador = document.getElementById("ataque_jugador")
const ataquesDelEnemigo = document.getElementById("ataque_enemigo")
const seccionMensajes = document.getElementById("resultado_combate")


///*** function crearMensajeFinal() */
const seccionMensajeFinal = document.getElementById("seccion_mensaje_final")

///*** function reiniciar() */
const seccionReiniciar = document.getElementById("seccion_reiniciar")
const resultadoFinalCombate = document.getElementById("seccion_mensaje_final")

//renderizar las tarjetas de mokepones
const contenedorTarjetas = document.getElementById("contenedor_Tarjetas")
const contenedorAtaques = document.getElementById("contenedor_Ataques")
// const ataquesMokeponEnemigo = document.getElementById

//seccion mapa 
const seccionVerMapa = document.getElementById("ver_mapa")
const mapa = document.getElementById("mapa")
let intervalo 

let mokepones = []
let opcionDeMokepones
let inputHipodogue
let inputCapipepo 
let inputRatigüeya
let inputLangostarol
let inputAguirrope
let inputPandarol
let ataquesMokepon
let ataquesMokeponEnemigo 
let botonFuego
let botonAgua
let botonTierra
let botones = []
let mascotaJugador
let mascotaJugadorObjeto
let lienzo = mapa.getContext("2d")
let ataqueEnemigo = []
let ataqueJugador = []
let indexAtaqueJugador 
let indexAtaqueEnemigo 
let victoriasJugador = 0
let victoriasEnemigo = 0
let vidasJugador = 3
let vidasEnemigo = 3
let mapaBackground = new Image()
mapaBackground.src = "./assets/img/mokemap.png"
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 20
const anchoMaximoDelMapa = 650

if(anchoDelMapa > anchoMaximoDelMapa){
    anchoDelMapa = anchoMaximoDelMapa - 20
}

alturaQueBuscamos = anchoDelMapa * 600 / 800

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos



class Mokepon{

    constructor (nombre, foto, vidas,fotoMapa){
        this.nombre = nombre
        this.foto = foto
        this.vidas = vidas
        this.ataques = []
        this.ancho = 60
        this.alto = 60
        this.x = aleatorio(0, mapa.width - this.ancho)
        this.y = aleatorio(0, mapa.height - this.alto)
        this.mapaFoto = new Image() 
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }

    pintarMokepon() {
        lienzo.drawImage(
        this.mapaFoto,
        this.x,     //posicion X
        this.y,     //posicion Y
        this.ancho,    //ancho en px
        this.alto     //alto en px   
        )
    }
}


let hipodogue = new Mokepon ("Hipodogue", "./assets/img/hipodogue.png", 3, "./assets/img/hipodogue.png")
let capipepo = new Mokepon ("Capipepo", "./assets/img/capipepo.png", 3, "./assets/img/capipepo.png")
let ratigüeya = new Mokepon ("Ratigüeya", "./assets/img/ratigüeya.png", 3, "./assets/img/ratigüeya.png")
let langostarol = new Mokepon ("Langostarol", "./assets/img/langostarol.png", 3, "./assets/img/langostarol.png")
let aguirrope = new Mokepon ("Aguirrope", "./assets/img/aguirrope.png", 3, "./assets/img/aguirrope.png")
let pandarol = new Mokepon ("Pandarol", "./assets/img/pandarol.png", 3, "./assets/img/pandarol.png")

//MASCOTAS ENEMIGO

let hipodogueEnemigo = new Mokepon ("Hipodogue", "./assets/img/hipodogue.png", 3, "./assets/img/hipodogue.png")
let capipepoEnemigo = new Mokepon ("Capipepo", "./assets/img/capipepo.png", 3, "./assets/img/capipepo.png")
let ratigüeyaEnemigo = new Mokepon ("Ratigüeya", "./assets/img/ratigüeya.png", 3, "./assets/img/ratigüeya.png")
let langostarolEnemigo = new Mokepon ("Langostarol", "./assets/img/langostarol.png", 3, "./assets/img/langostarol.png")
let aguirropeEnemigo = new Mokepon ("Aguirrope", "./assets/img/aguirrope.png", 3, "./assets/img/aguirrope.png")
let pandarolEnemigo = new Mokepon ("Pandarol", "./assets/img/pandarol.png", 3, "./assets/img/pandarol.png")

//ATAQUES JUGADORES
hipodogue.ataques.push (
    {nombre: "AGUA 💧", id: "boton_agua"},
    {nombre: "FUEGO 🔥", id: "boton_fuego"},
    {nombre: "AGUA 💧", id: "boton_agua"},
    {nombre: "TIERRA 🌱", id: "boton_tierra"},
    {nombre: "AGUA 💧", id: "boton_agua"}
)
capipepo.ataques.push (
    {nombre: "TIERRA 🌱", id: "boton_tierra"},
    {nombre: "FUEGO 🔥", id: "boton_fuego"},
    {nombre: "TIERRA 🌱", id: "boton_tierra"},
    {nombre: "AGUA 💧", id: "boton_agua"},
    {nombre: "TIERRA 🌱", id: "boton_tierra"}
)
ratigüeya.ataques.push (
    {nombre: "FUEGO 🔥", id: "boton_fuego"},
    {nombre: "AGUA 💧", id: "boton_agua"},
    {nombre: "FUEGO 🔥", id: "boton_fuego"},
    {nombre: "TIERRA 🌱", id: "boton_tierra"},
    {nombre: "FUEGO 🔥", id: "boton_fuego"}
)
langostarol.ataques.push (
    {nombre: "FUEGO 🔥", id: "boton_fuego"},
    {nombre: "FUEGO 🔥", id: "boton_fuego"},
    {nombre: "FUEGO 🔥", id: "boton_fuego"},
    {nombre: "AGUA 💧", id: "boton_agua"},
    {nombre: "TIERRA 🌱", id: "boton_tierra"}
)
aguirrope.ataques.push (
    {nombre: "AGUA 💧", id: "boton_agua"},
    {nombre: "TIERRA 🌱", id: "boton_tierra"},
    {nombre: "FUEGO 🔥", id: "boton_fuego"},
    {nombre: "TIERRA 🌱", id: "boton_tierra"},
    {nombre: "TIERRA 🌱", id: "boton_tierra"}
)
pandarol.ataques.push (
    {nombre: "FUEGO 🔥", id: "boton_fuego"},
    {nombre: "TIERRA 🌱", id: "boton_tierra"},
    {nombre: "AGUA 💧", id: "boton_agua"},
    {nombre: "AGUA 💧", id: "boton_agua"},
    {nombre: "AGUA 💧", id: "boton_agua"}
)

//ATAQUES ENEMIGOS
hipodogueEnemigo.ataques.push (
    {nombre: "AGUA 💧", id: "boton_agua"},
    {nombre: "FUEGO 🔥", id: "boton_fuego"},
    {nombre: "AGUA 💧", id: "boton_agua"},
    {nombre: "TIERRA 🌱", id: "boton_tierra"},
    {nombre: "AGUA 💧", id: "boton_agua"}
)
capipepoEnemigo.ataques.push (
    {nombre: "TIERRA 🌱", id: "boton_tierra"},
    {nombre: "FUEGO 🔥", id: "boton_fuego"},
    {nombre: "TIERRA 🌱", id: "boton_tierra"},
    {nombre: "AGUA 💧", id: "boton_agua"},
    {nombre: "TIERRA 🌱", id: "boton_tierra"}
)
ratigüeyaEnemigo.ataques.push (
    {nombre: "FUEGO 🔥", id: "boton_fuego"},
    {nombre: "AGUA 💧", id: "boton_agua"},
    {nombre: "FUEGO 🔥", id: "boton_fuego"},
    {nombre: "TIERRA 🌱", id: "boton_tierra"},
    {nombre: "FUEGO 🔥", id: "boton_fuego"}
)
langostarolEnemigo.ataques.push (
    {nombre: "FUEGO 🔥", id: "boton_fuego"},
    {nombre: "FUEGO 🔥", id: "boton_fuego"},
    {nombre: "FUEGO 🔥", id: "boton_fuego"},
    {nombre: "AGUA 💧", id: "boton_agua"},
    {nombre: "TIERRA 🌱", id: "boton_tierra"}
)
aguirropeEnemigo.ataques.push (
    {nombre: "AGUA 💧", id: "boton_agua"},
    {nombre: "TIERRA 🌱", id: "boton_tierra"},
    {nombre: "FUEGO 🔥", id: "boton_fuego"},
    {nombre: "TIERRA 🌱", id: "boton_tierra"},
    {nombre: "TIERRA 🌱", id: "boton_tierra"}
)
pandarolEnemigo.ataques.push (
    {nombre: "FUEGO 🔥", id: "boton_fuego"},
    {nombre: "TIERRA 🌱", id: "boton_tierra"},
    {nombre: "AGUA 💧", id: "boton_agua"},
    {nombre: "AGUA 💧", id: "boton_agua"},
    {nombre: "AGUA 💧", id: "boton_agua"}
)
mokepones.push(hipodogue, capipepo, ratigüeya, langostarol, aguirrope, pandarol)
// , hipodogueEnemigo, capipepoEnemigo, ratigüeyaEnemigo, langostarolEnemigo, aguirropeEnemigo, pandarolEnemigo)
//FUNCIÓN PARA INICIAR EL JUEGO
function iniciarJuego(){
    //ESCONDER SECCIÓN "ATAQUE" MIENTRAS NO SE ELIJA LA MASCOTA
    seccionSeleccionarAtaque.style.display = "none"    
    //OCULTAR SECCION MAPA
    seccionVerMapa.style.display = "none"
    //ESCONDER SECCIÓN "ATAQUE" MIENTRAS NO SE ELIJA LA MASCOTA
    resultadoFinal.style.display = "none"
    //ESCONDER SECCIÓN "DETALLE BATALLAS" MIENTRAS NO COMIENCE BATALLA    
    seccionDetallesBatallas.style.display = "none"
    //ESCONDE BOTÓN "REINICIAR" MIENTRAS NO TERMINE EL JUEGO    
    botonReiniciarJuego.style.display = "none"    

    //SE CREA EL EVENTO 'CLICK' PARA SELECCIONAR MASCOTA    
    mokepones.forEach((mokepon) => {
        opcionDeMokepones = `
        <input type="radio" name="mascota" id="${mokepon.nombre}"/>
        <label  class="card_mascota" for="${mokepon.nombre}">
        <img src="${mokepon.foto}" alt="${mokepon.nombre}" >
        <h4>${mokepon.nombre}</h4>
        
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDeMokepones

         inputHipodogue = document.getElementById('Hipodogue')
         inputCapipepo = document.getElementById('Capipepo')
         inputRatigüeya = document.getElementById('Ratigüeya')
         inputLangostarol = document.getElementById('Langostarol')
         inputAguirrope = document.getElementById('Aguirrope')
         inputPandarol = document.getElementById('Pandarol')
        // console.log(mokepon)
    })
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)    
    botonReiniciar.addEventListener("click", reiniciarJuego)
    // console.log("funcion_iniciar_juego_funcionando")
}

//SELECCIONA UNA MASCOTA
function seleccionarMascotaJugador (){
    //ESCONDER SECCIÓN "MASCOTAS"  MIENTRAS NO SE ELIJA LA MASCOTA    
    seccionSeleccionarMascota.style.display = "none"
    
    //MOSTRAR SECCION MAPA
    seccionVerMapa.style.display = "flex"
    
    
    //TEXTO DE LA MASCOTA QUE ELEGISTE
    if (inputHipodogue.checked){
        spanMascotaJugador.innerHTML = inputHipodogue.id
        mascotaJugador = inputHipodogue.id
    } else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    } else if (inputRatigüeya.checked){
        spanMascotaJugador.innerHTML = inputRatigüeya.id
        mascotaJugador = inputRatigüeya.id
    } else if (inputLangostarol.checked){
        spanMascotaJugador.innerHTML = inputLangostarol.id
        mascotaJugador = inputLangostarol.id
    } else if (inputAguirrope.checked){
        spanMascotaJugador.innerHTML = inputAguirrope.id
        mascotaJugador = inputAguirrope.id
    } else if (inputPandarol.checked){
        spanMascotaJugador.innerHTML = inputPandarol.id
        mascotaJugador = inputPandarol.id
    } else {
        alert('ELIGE UNA MASCOTA')
    }
    // console.log("funcion_seleccionar_mascota_funcionando")
    

    extraerAtaques(mascotaJugador)
    //SELECCIONA MASCOTA ENEMIGO
    // seleccionarMascotaEnemigo(1,6)
    // // console.log("funcion_seleccionar_mascota_enemigo_funcionando")
    iniciarMapa()
    
}

function extraerAtaques(mascotaJugador){
    let ataques

    for (let i = 0; i < mokepones.length; i++) {
        if(mascotaJugador === mokepones[i].nombre){
            ataques = mokepones[i].ataques
        }
    }
    mostrarAtaques(ataques)
    // console.log(ataques)
}

function mostrarAtaques(ataques){
    ataques.forEach((ataque) => {
        ataquesMokepon = `
            <button id="${ataque.id}" class="btn-ataque BAtaque">${ataque.nombre}</button>
        `
        // console.log(ataquesMokepon);
        
        contenedorAtaques.innerHTML += ataquesMokepon
    })


    // botonFuego = document.getElementById("boton_fuego")
    // botonAgua = document.getElementById("boton_agua")
    // botonTierra = document.getElementById("boton_tierra")
    botones = document.querySelectorAll(".BAtaque")    
}

//ATAQUES
function secuenciaAtaque(){
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            // console.log(e)
            if(e.target.textContent === "FUEGO 🔥") {
                ataqueJugador.push("FUEGO 🔥")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
                boton.disabled = true
            } else if (e.target.textContent === "AGUA 💧"){
                ataqueJugador.push("AGUA 💧")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
                boton.disabled = true
            } else {
                ataqueJugador.push("TIERRA 🌱")
                console.log(ataqueJugador)
                boton.style.background = "#112f58"
                boton.disabled = true
            }
            ataqueAleatorioEnemigo()
        })
        seccionDetallesBatallas.style.display = "flex"
    })   
}


//MASCOTA DEL ENEMIGO (ALEATORIO)
function seleccionarMascotaEnemigo(enemigo){
    // let mascotaAleatoria = aleatorio(0, mokepones.length -1)  
    
    spanMascotaEnemigo.innerHTML = enemigo.nombre
    ataquesMokeponEnemigo = enemigo.ataques
    //LLAMANDO FUNCION SECUENCIAATAQUES
    secuenciaAtaque()
}

//ATAQUES
//FUNCIÓN ATAQUE ALEATORIO DEL ENEMIGO
function ataqueAleatorioEnemigo(){
    console.log('Ataques enemigo', ataquesMokeponEnemigo);
    let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length -1)
    
    if(ataqueAleatorio == 0 || ataqueAleatorio == 1){
        ataqueEnemigo.push("FUEGO 🔥")
    } else if (ataqueAleatorio == 3 || ataqueAleatorio == 4){
        ataqueEnemigo.push("AGUA 💧")
    } else {
        ataqueEnemigo.push("TIERRA 🌱")
    }
    // console.log("funcion_ataqueEnemigo_trabajando")
    console.log(ataqueEnemigo)
    iniciarPelea()
}

//esta funcion inicia la pelea, y hace que se espere 5 ataques para imprimir el array de los ataques
function iniciarPelea(){
    if(ataqueJugador.length == 5){
        combate()
    } 
}

//esta función guarda los ataques de cada oponente en un array
function indexAmbosOponentes(jugador, enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function combate(){
    //1 Fuego  FUEGO VENCE TIERRA   //2 Agua  AGUA VENCE FUEGO   //3 Tierra  TIERRA VENCE AGUA  
    //APARECE SECCIÓN DETALLE DE LAS BATALLAS
    seccionDetallesBatallas.style.display = "flex"
    
    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index]){
            indexAmbosOponentes(index, index)
            crearMensaje("EMPATE 🤜🤛")
        } else if (ataqueJugador[index] === "FUEGO 🔥" && ataqueEnemigo[index] == "TIERRA 🌱" ){
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE 🏆😎")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === "AGUA 💧" && ataqueEnemigo[index] == "FUEGO 🔥" ){
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE 🏆😎")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else if (ataqueJugador[index] === "TIERRA 🌱" && ataqueEnemigo[index] == "AGUA 💧" ){
            indexAmbosOponentes(index, index)
            crearMensaje("GANASTE 🏆😎")
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
        } else {
            crearMensaje("PERDISTE 💔😢")
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
        }   
        // console.log("todos los combates_funcionando!!!")
        // console.log("funcion_combate_LLamando_función_revisarVidas")
        
    }
    
    revisarVictorias()
}

function revisarVictorias(){
    if(victoriasJugador === victoriasEnemigo){
        crearMensajeFinal("ES UN EMPATE 🤜🤛")
    } else if (victoriasJugador > victoriasEnemigo){
        crearMensajeFinal("GANASTE 🥳🎉")
    } else {
        crearMensajeFinal("PERDISTE 🥺")
    } 
    // console.log("funcion_revisar_vidas_funcionando")
    
}

//MENSAJE RESULTADO BATALLA INDIVIDUAL
function crearMensaje(resultado){    
    //CREAMOS EL ELEMENTO "PARRAFO" 
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    //AGREGAMOS LA INFORMACIÓN AL ELEMENTO CREADO
    // seccionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = indexAtaqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo

    //INDICAMOS DONDE SE VA AGREGAR EL NUEVO ELEMENTO
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)

    // console.log("funcion_crearMensaje_trabajando_bien")
}


//MENSAJE RESULTADO DE TODAS LAS BATALLA
function crearMensajeFinal(resultadoFinal){       
    // const parrafo = document.createElement("h3")
    // parrafo.innerHTML = resultadoFinal    
    // seccionMensajeFinal.appendChild(parrafo)

    // seccionDetallesBatallas.innerHTML = resultado
    seccionMensajeFinal.innerHTML = resultadoFinal

    seccionReiniciar.style.display = "flex"


    //PARA MOSTRAR SECCION REINICIAR AL TERMINARSE LAS VIDAS
    seccionReiniciar.style.display = "flex"
    //MOSTRAR EL RESULTADO FINAL DE LAS BATALLAS AL TERMINARSE LAS VIDAS
    resultadoFinalCombate.style.display = "flex"

    // console.log("funcion_crear_mensaje_final_funcionando_perfecto")
}

//BOTÓN REINICIAR JUEGO
function reiniciarJuego(){
    location.reload(true);
    // console.log("funcion_reiniciar_juego_Funcionando")
}

//FUNCIÓN ALEATORIO (ELIGE MASCOTA Y ATAQUE ENEMIGO)
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}

//SE CREA MAPA Y SE PINTA PERSONAJE EN ESTAS COORDENADAS
function pintarCanvas(){


    mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX
    mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage (
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )
    lienzo.drawImage(
        mascotaJugadorObjeto.mapaFoto,
        mascotaJugadorObjeto.x,     //posicion X
        mascotaJugadorObjeto.y,     //posicion Y
        mascotaJugadorObjeto.ancho,    //ancho en px
        mascotaJugadorObjeto.alto     //alto en px
    )
    mascotaJugadorObjeto.pintarMokepon()
    hipodogueEnemigo.pintarMokepon()
    capipepoEnemigo.pintarMokepon()
    ratigüeyaEnemigo.pintarMokepon()
    langostarolEnemigo.pintarMokepon()
    aguirropeEnemigo.pintarMokepon()
    pandarolEnemigo.pintarMokepon()

    if(mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !== 0){
        revisarColision(hipodogueEnemigo)
        revisarColision(capipepoEnemigo)
        revisarColision(ratigüeyaEnemigo)
        revisarColision(langostarolEnemigo)
        revisarColision(aguirropeEnemigo)
        revisarColision(pandarolEnemigo)
    }
}

function moverDerecha(){
    const mascotaJugadorObjeto = obtenerObjetoMascota()
    mascotaJugadorObjeto.velocidadX = 5
}

function moverIzquierda(){
    const mascotaJugadorObjeto = obtenerObjetoMascota()
    mascotaJugadorObjeto.velocidadX = -5
}


function moverArriba(){
    const mascotaJugadorObjeto = obtenerObjetoMascota()
    mascotaJugadorObjeto.velocidadY = -5
}

function moverAbajo(){
    const mascotaJugadorObjeto = obtenerObjetoMascota()
    mascotaJugadorObjeto.velocidadY = 5
}

function detenerMovimiento(){
    const mascotaJugadorObjeto = obtenerObjetoMascota()
    mascotaJugadorObjeto.velocidadX = 0
    mascotaJugadorObjeto.velocidadY = 0
}


function presionarTecla(event){
    switch(event.key){
        case "ArrowUp":
             moverArriba()
             break;

        case "ArrowDown":
             moverAbajo()
             break;

        case "ArrowLeft":
             moverIzquierda()
             break;

        case "ArrowRight":
             moverDerecha()
             break

        default:
             break;
    }

}

function iniciarMapa(){
    mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador)
    intervalo = setInterval(pintarCanvas, 50)
    window.addEventListener( "keydown", presionarTecla)
    window.addEventListener( "keyup", detenerMovimiento)
    
}

function obtenerObjetoMascota(){
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre){
            return mokepones[i]
        }
    }
}


function revisarColision(enemigo){

    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaMascota = mascotaJugadorObjeto.y
    const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto
    const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho
    const izquierdaMascota = mascotaJugadorObjeto.x


    if(
        abajoMascota < arribaEnemigo || 
        arribaMascota > abajoEnemigo ||
        derechaMascota < izquierdaEnemigo ||
        izquierdaMascota > derechaEnemigo
    ) {
        return
    }
    detenerMovimiento()
    clearInterval(intervalo)

    console.log("se detectó un choque");
    seccionVerMapa.style.display = "none"
    seccionSeleccionarAtaque.style.display = "flex"
    seleccionarMascotaEnemigo(enemigo)
    
}

//Esta línea le manda esperar a que cargue toda la página web para ejecutar la lógica JS
window.addEventListener("load", iniciarJuego)