let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3



//FUNCIÓN PARA INICIAR EL JUEGO
function iniciarJuego(){

    //ESCONDER SECCIÓN "ATAQUE" MIENTRAS NO SE ELIJA LA MASCOTA
    let seccionSeleccionarAtaque = document.getElementById("seleccionar_ataque")
    seccionSeleccionarAtaque.style.display = "none"
    
    //ESCONDER SECCIÓN "ATAQUE" MIENTRAS NO SE ELIJA LA MASCOTA
    const resultadoFinal = document.getElementById("seccion_mensaje_final")
    resultadoFinal.style.display = "none"

    //ESCONDER SECCIÓN "DETALLE BATALLAS" MIENTRAS NO COMIENCE BATALLA
    const seccionDetallesBatallas = document.getElementById("seccion_mensajes")
    seccionDetallesBatallas.style.display = "none"

    //ESCONDE BOTÓN "REINICIAR" MIENTRAS NO TERMINE EL JUEGO
    const botonReiniciarJuego = document.getElementById("seccion_reiniciar")
    botonReiniciarJuego.style.display = "none"
    

    //SE CREN EL EVENTO 'CLICK' PARA SELECCIONAR MASCOTA
    const botonMascotaJugador = document.getElementById("boton_mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador, seleccionarMascotaEnemigo)

    //BOTONES EVENTO 'CLICK' PARA SELECCIONAR ATAQUE JUGADOR

    const botonFuego = document.getElementById('boton_fuego')
    botonFuego.addEventListener('click', ataqueFuego)

    const botonAgua = document.getElementById('boton_agua')
    botonAgua.addEventListener('click', ataqueAgua)

    const botonTierra = document.getElementById('boton_tierra')
    botonTierra.addEventListener('click', ataqueTierra)
   
    const botonReiniciar = document.getElementById("boton_reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)

    console.log("funcion_iniciar_juego_funcionando")
}

//SELECCIONA UNA MASCOTA
function seleccionarMascotaJugador (){

    //ESCONDER SECCIÓN "MASCOTAS" MIENTRAS NO SE ELIJA LA MASCOTA
    const seccionSeleccionarMascota = document.getElementById("seleccionar_mascota")
    seccionSeleccionarMascota.style.display = "none"


    //APARECER SECCIÓN "ATAQUE" MIENTRAS NO SE ELIJA LA MASCOTA
    let seccionSeleccionarAtaque = document.getElementById("seleccionar_ataque")
    seccionSeleccionarAtaque.style.display = "flex"

    
    //INPUT DE LAS MASCOTAS
    let inputHipodogue = document.getElementById('hipodogue')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigüeya = document.getElementById('ratigüeya')
    // let inputLangostarol = document.getElementById('langostarol')
    // let inputAguirrope = document.getElementById('aguirrope')
    // let inputPandarol = document.getElementById('pandarol')
    
    //TEXTO DE LA MASCOTA QUE ELEGISTE
    if (inputHipodogue.checked){
            spanMascotaJugador.innerHTML = 'HIPODOGUE '
            console.log("Elegiste a Hipodogue 🐶")
        } else if (inputCapipepo.checked){
            spanMascotaJugador.innerHTML = 'CAPIPEPO '
            console.log("Elegiste a Capipepo 🐐")
        } else if (inputRatigüeya.checked){
            spanMascotaJugador.innerHTML = 'RATIGÜEYA '
            console.log("Elegiste a Ratigüeya 🐀")
        } else if (inputLangostarol.checked){
            spanMascotaJugador.innerHTML = 'LANGOSTAROL '
            console.log("Elegiste a Langostarol 🦞")
        } else if (inputAguirrope.checked){
            spanMascotaJugador.innerHTML = 'AGUIRROPE '
            console.log("Elegiste a Aguirrope 🦦")
        } else if (inputPandarol.checked){
            spanMascotaJugador.innerHTML = 'PANDAROL '
            console.log("Elegiste a Pandarol 🐼")
        } else {
            alert('ELIGE UNA MASCOTA')
            console.log("ELIGE UNA MASCOTA" )
    }

    console.log("funcion_seleccionar_mascota_funcionando")

    //SELECCIONA MASCOTA ENEMIGO
    seleccionarMascotaEnemigo(1,6)
    
}

//MASCOTA DEL ENEMIGO (ALEATORIO)
function seleccionarMascotaEnemigo(min, max){
    let mascotaAleatoria = aleatorio(1,6)

    if(mascotaAleatoria == 1){
            //hipodogue
            spanMascotaEnemigo.innerHTML = ' HIPODOGUE '
            console.log("Lucharás contra Hipodogue 🐶")
        } else if (mascotaAleatoria == 2){
            //capipepo
            spanMascotaEnemigo.innerHTML = ' CAPIPEPO '
            console.log("Lucharás contra Capipepo 🐐")
        } else if (mascotaAleatoria == 3){
            //ratigüeya
            spanMascotaEnemigo.innerHTML = ' RATIGÜEYA '
            console.log("Lucharás contra Ratigüeya 🐀")
        
        } else if (mascotaAleatoria == 4){
            //langostarol
            spanMascotaEnemigo.innerHTML = ' LANGOSTAROL '
            console.log("Lucharás contra Langostarol 🦞")
        } else if (mascotaAleatoria == 5){
            //aguirrope
            spanMascotaEnemigo.innerHTML = ' AGUIRROPE '
            console.log("Lucharás contra Aguirrope 🐦")
        } else {
            //pandarol
            spanMascotaEnemigo.innerHTML = ' PANDAROL '
            console.log("Lucharás contra Pandarol 🐼")
    }
    console.log("funcion_seleccionar_mascota_enemigo_funcionando")
}

//ATAQUES
//FUNCIÓN ATAQUE DE FUEGO
function ataqueFuego(){
    ataqueJugador = 'FUEGO 🔥'
    ataqueAleatorioEnemigo()
    console.log(ataqueJugador)
    console.log(ataqueEnemigo)
    console.log("funcion_fuego_perfecta")

}

//FUNCIÓN ATAQUE DE AGUA
function ataqueAgua(){
    ataqueJugador = 'AGUA 💧'
    ataqueAleatorioEnemigo()
    console.log(ataqueJugador)
    console.log(ataqueEnemigo)
    console.log("funcion_agua_perfecta")
}

//FUNCIÓN ATAQUE DE TIERRA
function ataqueTierra(){
    ataqueJugador = 'TIERRA 🌱'
    ataqueAleatorioEnemigo()
    console.log(ataqueJugador)
    console.log(ataqueEnemigo)
    console.log("funcion_tierra_perfecta")
}

//FUNCIÓN ATAQUE ALEATORIO DEL ENEMIGO
function ataqueAleatorioEnemigo(){
    
    let ataqueAleatorio = aleatorio(1,3)
    
    if(ataqueAleatorio == 1){
        ataqueEnemigo = 'FUEGO 🔥'
        } else if (ataqueAleatorio == 2){
            ataqueEnemigo = 'AGUA 💧'
        } else if (ataqueAleatorio == 3){
            ataqueEnemigo = 'TIERRA 🌱'
        }
        else {
        ataqueEnemigo = 'SE PRODUJO UN ERROR'
    }
    
    console.log("funcion_ataque_aleatorio_funcionando")

    combate()
    console.log("funcion_ataque_aleatorio_llamó_función_combate")  
   
}

function combate(){
    //1 Fuego  FUEGO VENCE TIERRA   //2 Agua  AGUA VENCE FUEGO   //3 Tierra  TIERRA VENCE AGUA
    const seccionDetallesBatallas = document.getElementById("seccion_mensajes")
    seccionDetallesBatallas.style.display = "flex"
    
    //POSIBLES RESULTADOS
    if ( ataqueJugador == ataqueEnemigo){
        //console.log("EMPATE 🤝")
        crearMensaje("EMPATE 🤜🤛")
        } else if (ataqueJugador == 'FUEGO 🔥' && ataqueEnemigo == 'TIERRA 🌱'){
            //console.log("GANASTE 🏆😎")
            crearMensaje("GANASTE 🏆😎")   
            vidasEnemigo--
            total_vidas_enemigo.innerHTML = vidasEnemigo     
        } else if (ataqueJugador == 'AGUA 💧' && ataqueEnemigo == 'FUEGO 🔥'){
            //console.log("GANASTE 🏆😎")
            crearMensaje("GANASTE 🏆😎")
            vidasEnemigo--
            total_vidas_enemigo.innerHTML = vidasEnemigo
        } else if (ataqueJugador == 'TIERRA 🌱' && ataqueEnemigo == 'AGUA 💧'){
            //console.log("GANASTE 🏆😎")
            crearMensaje("GANASTE 🏆😎")
            vidasEnemigo--
            total_vidas_enemigo.innerHTML = vidasEnemigo
        } else {
            //console.log("PERDISTE 💔😢")
            crearMensaje("PERDISTE 💔😢")
            vidasJugador--
            total_vidas_jugador.innerHTML = vidasJugador
    }
    
    console.log("función_combate_funcionando_bien")

    console.log("funcion_combate_llamando_función_revisarVidas")
    //REVISAR LAS VIDAS
    revisarVidas()
}

function revisarVidas(){
    if(vidasEnemigo == 0){
        crearMensajeFinal("VENCISTE 🥳🎉🎊 EL ENEMIGO SE QUEDÓ SIN VIDAS")
    } else if (vidasJugador == 0){
        crearMensajeFinal("FUISTE DERROTADO 🥺 TE HAS QUEDADO SIN VIDAS")
    }

    console.log("funcion_revisar_vidas_funcionando")
}

//MENSAJE RESULTADO BATALLA INDIVIDUAL
function crearMensaje(resultado){

    const ataquesDelJugador = document.getElementById("ataque_jugador")
    const ataquesDelEnemigo = document.getElementById("ataque_enemigo")
    const seccionMensajes = document.getElementById("resultado_combate")
    
    seccionMensajes.innerHTML = resultado
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')

    
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)

    //estas son dos constantes QUE NO ESTABAN AQUÍ A VER SI AHORA Sí MUESTRA LAS VIDAS
    let spanVidasJugador = document.getElementById("total_vidas_jugador") 
    let spanVidasEnemigo = document.getElementById("total_vidas_enemigo") 

    console.log("funcion_crear_mensaje_trabajando_bien")
}


//MENSAJE RESULTADO DE TODAS LAS BATALLA
function crearMensajeFinal(resultadoFinal){   

    let seccionMensajes = document.getElementById("seccion_mensaje_final")
    
    let parrafo = document.createElement("h3")
    parrafo.innerHTML = resultadoFinal    
    //alert(resultadoFinal + " REINICIA EL JUEGO 😉")
    seccionMensajes.appendChild(parrafo)

    //DESABILITAR BOTONES DE ATAQUES AL TERMINARSE LAS VIDAS 
    const botonFuego = document.getElementById('boton_fuego')
        botonFuego.disabled = true
    const botonAgua = document.getElementById('boton_agua')
        botonAgua.disabled = true
    const botonTierra = document.getElementById('boton_tierra')
        botonTierra.disabled = true
    
    
    //PARA MOSTRAR SECCION REINICIAR AL TERMINARSE LAS VIDAS
    let seccionReiniciar = document.getElementById('seccion_reiniciar')
    seccionReiniciar.style.display = "flex"
    let resultadoFinalCombate = document.getElementById("seccion_mensaje_final")
    resultadoFinalCombate.style.display = "flex"

    console.log("funcion_crear_mensaje_final_funcionando_perfecto")
}


//BOTÓN REINICIAR JUEGO
function reiniciarJuego(){
    //location.reload()
    location.reload(true);

    console.log("funcion_reiniciar_juego_Funcionando")
}

//FUNCIÓN ALEATORIO (ELIGE MASCOTA Y ATAQUE ENEMIGO)
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min)
}
//Esta línea le manda esperar a que cargue toda la página web para ejecutar la lógica JS
window.addEventListener("load", iniciarJuego) 


