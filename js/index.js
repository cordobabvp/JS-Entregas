

//Clase molde constructora de objetos, y con metodos a utilizar.
class Monedas {
    constructor (nombre, precioVenta, precioCompra) {
        this.nombre = nombre;
        this.precioVenta = precioVenta; 
        this.precioCompra = precioCompra;
    }
}

//declaracion de objetos con sus propiedades a partir de clase.
const moneda1 = new Monedas ("Dólar", 210, 200)
const moneda2 = new Monedas ("Euro", 260, 250)
const moneda3 = new Monedas ("Real", 45, 40)
const moneda4 = new Monedas ("Uruguayo", 10, 7)

//declaracion del array y pusheo de objetos
const listaDeMonedas = [];

listaDeMonedas.push(moneda1)
listaDeMonedas.push(moneda2)
listaDeMonedas.push(moneda3)
listaDeMonedas.push(moneda4)
//Variables
let nombreUsuario = localStorage.getItem('nombreUsuario');
let contraseñaUsuario = localStorage.getItem('contraseñaUsuario');
let dniUsuario = localStorage.getItem('dni');

// Referencio clases con variables
const contBienvenida = document.getElementById('contbienvenida');
const bienvenida = document.getElementById('bienvenida');
const usuario = document.getElementById('usuario');
const contraseña = document.getElementById('contraseña');
const dni = document.getElementById('dni');
const ingresar = document.getElementById('ingresar');
const msjBienvenida = document.querySelector('.msjbienvenida');
const formConversion = document.getElementById('formConversion');
const select = document.getElementById('select');
const selOp = document.getElementById('operacion');
const selMoneda = document.getElementById('moneda');
const enviar = document.getElementById('enviar');
const cant = document.getElementById('cantidad');
const vender = document.getElementById('vender');
const comprar = document.getElementById('comprar');
const contConversion = document.getElementById('contConversion');

//Oculta formulario de operaciones
//document.getElementById('formConversion').style.display = 'none';
document.getElementById('conversion').style.display = 'none';
document.getElementById('prestamo').style.display = 'none';
document.getElementById('plazo fijo').style.display = 'none';
document.getElementById('turno').style.display = 'none';
document.getElementById('crypto').style.display = 'none';
document.getElementById('movimientos').style.display = 'none';

ocultarAcceso = () => {
    //Recorro el array y por cada objeto creo una etiqueta li con sus propiedades. 
    for(const moneda of listaDeMonedas){
        const p = document.createElement('p');
        p.innerHTML = `<li>${moneda.nombre}: ${moneda.precioVenta}$ Venta, ${moneda.precioCompra}$ Compra</li>`;
        contConversion.append(p);
    }
}


//Saludo de bienvenida
bienvenida.addEventListener('submit', (e) => {
    e.preventDefault();
    inicioUsuario = usuario.value;
    contraseñaUsuario = contraseña.value;
    dniUsuario = dni.value;
    if (dniUsuario === '' || inicioUsuario === '' || contraseñaUsuario === ''){
        msjBienvenida.innerHTML = 'Ingresa correctamente tus datos';
    }else {
        msjBienvenida.innerHTML = `<p>¡Hola ${inicioUsuario}!</p>
        <p>Te damos la bienvenida al Banco de la Moneda.</p>`;
        postValidar();
        Toastify({
            text: "Has ingresado al Banco de la Moneda",
            className: "info",
            duration: 2500,
            position: "right",
            style: {
            background: "linear-gradient(to right, rgba(30, 143, 255, 0.479), rgba(178, 173, 247, 0.623))",
            }
        }).showToast();
    };
    let turno = localStorage.getItem('Turno');
    listaMovimientos.push('Turno');
    contMovimientos.append(turno);
    let plazo = localStorage.getItem('PlazoFijo');
    listaMovimientos.push('PlazoFijo');
    contMovimientos.append(plazo);
    let prestamo = localStorage.getItem('Prestamo');
    listaMovimientos.push('Prestamo');
    contMovimientos.append(prestamo);
    let conversion = localStorage.getItem('Conversion');
    listaMovimientos.push('Conversion');
    contMovimientos.append(conversion);
    let crypto = localStorage.getItem('carrito');
    listaMovimientos.push('carrito');
    contMovimientos.append(crypto);
});

//almacena datos en localStorage y muestra botones
function postValidar() {    
    localStorage.setItem('nombreUsuario', usuario.value);
    localStorage.setItem('contraseñaUsuario', contraseña.value);
    localStorage.setItem('dni', dni.value);
    
    document.getElementById('contbienvenida').style.display = 'none';
    document.getElementById('conversion').style.display = '';
    document.getElementById('prestamo').style.display = '';
    document.getElementById('plazo fijo').style.display = '';
    document.getElementById('turno').style.display = '';
    document.getElementById('crypto').style.display = '';
    document.getElementById('movimientos').style.display = '';
}
formConversion.setAttribute("class","ocultar")

conversion.addEventListener('click', () => {
    contConversion.innerHTML = `<div id="conversion1">
    <h3>Compra-Venta de moneda extranjera</h3>
    <p>La compra-venta de moneda extranjera es una operación en la que dos participantes, uno comprador y otro vendedor de moneda extranjera, acuerdan el intercambio de moneda nacional por moneda extranjera a un tipo de cambio previamente acordado.</p>
    <h5>Cotizaciones</h5>
    <p>Monto mínimo para operar: 100.</p>
    </div>`;
    ocultarAcceso();
    formOperacion(formConversion);
    contOperacion(contConversion);
})

//Ocultar y mostrar formularios de operacion
function formOperacion(a) {
    formConversion.setAttribute("class","ocultar");
    contCrypto.setAttribute("class","ocultar");
    formPlazo.setAttribute("class","ocultar");
    formPrestamo.setAttribute("class","ocultar");
    formTurno.setAttribute("class","ocultar");
    a.removeAttribute("class","ocultar");
    a.setAttribute("class","mostrar");
    msjBienvenida.innerHTML = '';
};

//Ocultar y mostrar contenedores de operacion
function contOperacion(a){
    const liCrypto = document.getElementsByTagName('card')
    if(liCrypto.length){
        for(let i = 0; i < liCrypto.length; i++){
        liCrypto[i].setAttribute('class','ocultar');}}
    contConversion.setAttribute("class","ocultar");
    contPlazo.setAttribute("class","ocultar");
    contPrestamo.setAttribute("class","ocultar");
    contTurno.setAttribute("class","ocultar");
    a.removeAttribute("class","ocultar");
    a.setAttribute("class","mostrar");
    msjBienvenida.innerHTML = '';
}

//Defino evento submit sobre formulario y asigno funcion
formConversion.addEventListener('submit', (e) => {
    e.preventDefault();
    if(cant.value !== '' && cant.value >= 100){
        contConversion.innerHTML = `
        <h4>Operación Solicitada:</h4> 
        <p> ${operacionSeleccionada()} ${cant.value}$ ${textoMoneda()}.</p>`; 
        const confirmarConversion = document.createElement('button');
        confirmarConversion.setAttribute('class','confirmar');
        confirmarConversion.innerText = 'Confirmar';
        contConversion.append(confirmarConversion);
        confirmarConversion.addEventListener('click', () => {
            const contenedor = document.createElement('div');
            contenedor.classList = 'operacion-movimiento';
            contenedor.innerHTML = `<li>${operacionSeleccionada()} $${cant.value} ${textoMoneda()}.</li>`
            contMovimientos.append(contenedor);
            formConversion.setAttribute("class","ocultar")
            contConversion.innerHTML = '<h4>Conversión realizada con éxito</h4>';
            listaMovimientos.push(contenedor);
            localStorage.setItem('Conversion',JSON.stringify(`<li>${operacionSeleccionada()} $${cant.value} ${textoMoneda()}.</li>`))
        })
    }
});

//Funcion toma el texto del select moneda
function textoMoneda() {
    let textoMon = select.value;
    textoMon = select.options[select.selectedIndex].innerText;
    return textoMon
}
//funcion que retorna value seleccionado en moneda(clase select)
function mostrarSeleccionado () {
    let moneda = select.value;
    return moneda.value;
};
//funcion que retorna value seleccionado en operacion(compra/venta)
function operacionSeleccionada() {
    let accion = selOp.value;
    return accion;
};

//PRESTAMO
const prestamo = document.getElementById('prestamo');
const contPrestamo = document.getElementById('contPrestamo');
const formPrestamo = document.getElementById('formPrestamo');
const montoPrestamo = document.getElementById('montoPrestamo');
const enviarPrestamo = document.getElementById('enviarPrestamo');
const interesPrestamo = 1.45;

formPrestamo.setAttribute('class','ocultar');

//Elige la operacion prestamo
prestamo.addEventListener('click', () => {
    formOperacion(formPrestamo);
    contOperacion(contPrestamo);
    contPrestamo.innerHTML = `<h3>Solicita un préstamo inmediato</h3>
    <p>Un préstamo es un producto financiero que permite a un usuario acceder a una cantidad fija de dinero al comienzo de la operación, con la condición devolver esa cantidad más los intereses pactados en un plazo determinado. La amortización del préstamo se realiza mediante unas cuotas regulares.</p>
    <h5>Condiciones</h5>
    <p><li>Monto mínimo: $ 10.000</li></p>
    <p><li>Monto máximo: $ 10.000.000</li></p>
    <p><li>Plazo: 12 - 60 Meses</li></p>`
});

//Envia el formulario de prestamo, devolviendo lo seleccionado y prestamo a devolver.
formPrestamo.addEventListener('submit', (e) => {
    e.preventDefault();
    if(montoPrestamo.value !=='' && montoPrestamo.value >= 10000 && montoPrestamo.value <= 10000000){
        contPrestamo.innerHTML = `
        <p>Has solicitado un préstamo por un monto total de $ ${montoPrestamo.value}.
        A devolver en ${numeroCuotas()} cuotas de $ ${parseInt(montoCuotas())}.</p>`;
        const confirmarPrestamo = document.createElement('button');
        confirmarPrestamo.setAttribute('class','confirmar')
        confirmarPrestamo.innerText = 'Confirmar';
        contPrestamo.append(confirmarPrestamo); 
        confirmarPrestamo.addEventListener('click', () => {
            const contenedor = document.createElement('div');
            contenedor.classList = ('operacion-movimiento');
            contenedor.innerHTML = `<li>Préstamo de $ ${montoPrestamo.value} pesos a devolver en ${numeroCuotas()} cuotas.</li>`
            contMovimientos.append(contenedor);
            formPrestamo.setAttribute('class','ocultar');
            contPrestamo.innerHTML = '<h4>Has obtenido un préstamo.</h4>';
            listaMovimientos.push(contenedor);
            localStorage.setItem('Prestamo',JSON.stringify(`<li>Préstamo de $ ${montoPrestamo.value} pesos a devolver en ${numeroCuotas()} cuotas.</li>`))
        }) 
    };
});

//Devuelve el numero de cuotas elegido
function numeroCuotas() {
    let memo = document.getElementsByName('cuotas');
    for(i=0; i<memo.length; i++) {
        if(memo[i].checked) { 
        let memory = memo[i].value 
        return memory
    }};
}

//Regresa el monto a devolver en cuotas con interes.
function montoCuotas() {
    let monto = (montoPrestamo.value * interesPrestamo) / numeroCuotas();
    return monto;
}

//PLAZO FIJO
const plazoFijo = document.getElementById('plazo fijo');
const contPlazo = document.getElementById('contPlazo');
const formPlazo = document.getElementById('formPlazo');
const inputFijo = document.getElementById('inputFijo');
const inputPlazo = document.getElementById('inputPlazo');
const enviarPlazo = document.getElementById('enviarPlazo');
const limpiarPlazo = document.getElementById('limpiarPlazo');
const interesPlazo = 0.61;

formPlazo.setAttribute("class","ocultar");

plazoFijo.addEventListener('click', () => {
    contPlazo.innerHTML = `<h3>Accede a un plazo fijo</h3>
    <p>El depósito a Plazo Fijo es un instrumento de inversión de bajo riesgo a través del cual el Banco te paga una tasa de interés por mantener el dinero inmovilizado. </p>
    <h5>Condiciones</h5>
    <p><li>Plazo mínimo: 30 días.</li></p>
    <p><li>Moneda: Pesos</li></p>
    <p><li>Monto mínimo: $1.000</li></p>
    <p><li>Monto máximo: $1.000.000</li></p>`
    formOperacion(formPlazo);
    contOperacion(contPlazo);
})
formPlazo.addEventListener('submit', (e) => {
    e.preventDefault();
    if(inputFijo.value !=='' && inputPlazo.value !=='' && inputFijo.value >=1000 && inputFijo.value <=1000000 && inputPlazo.value >=30){
    contPlazo.innerHTML = `
    <p>Has solicitado un plazo fijo con un capital de $ ${inputFijo.value} a ${inputPlazo.value} días.</p>
    <p><li>Intereses: $ ${parseInt(interesGenerado())} pesos</li></p>
    <p><li>Monto total a cobrar: $ ${suma(parseInt(Number(interesGenerado())),Number(inputFijo.value))} pesos </li></p>
    <p><li>TNA: 61%</li></p>`;
    const confirmarPlazo = document.createElement('button');
    confirmarPlazo.setAttribute('class','confirmar');
    confirmarPlazo.innerText = 'Confirmar';
    contPlazo.append(confirmarPlazo);
    confirmarPlazo.addEventListener('click', () => {
        //movimientos.innerHTML = `Plazo Fijo por ${inputFijo.value}$ pesos a ${inputPlazo.value}días.`
        contPlazo.innerHTML = `<h3>Has confirmado el plazo fijo.</h3>`;
        formPlazo.setAttribute("class","ocultar");
        const contenedor = document.createElement('div'); 
        contenedor.classList = 'operacion-movimiento';
        contenedor.innerHTML = `<li>Plazo Fijo por $ ${inputFijo.value} a ${inputPlazo.value} días.</li>`;
        contMovimientos.append(contenedor);
        listaMovimientos.push(contenedor);
        localStorage.setItem('PlazoFijo',JSON.stringify(`<li>Plazo Fijo por $ ${inputFijo.value} a ${inputPlazo.value} días.</li>`));
    })
    }

})
function suma(a,b) {
    let resultado = a + b;
    return resultado;
}
function interesGenerado() {
    let resultado
    resultado = inputFijo.value * (interesPlazo * inputPlazo.value)/365 ;
    return resultado; 
} 

// TURNO
const turno = document.getElementById('turno');
const contTurno = document.getElementById('contTurno');
const formTurno = document.getElementById('formTurno');
const confirmarTurno = document.getElementById('confirmarTurno');


formTurno.setAttribute("class","ocultar");

turno.addEventListener('click', () => {
    contTurno.innerHTML = `<h3>Solicita un turno en nuestra sucursal</h3>
    <h5>Asesoramiento Personal</h5>
    <li>Atención personalizada con nuestros asesores.</li>
    <li>Abrí tu cuenta.</li>
    <li>Retirá dinero en efectivo.</li>
    <li>Realizá depósitos a través de nuestras cajas.</li>
    <li>Sabemos que nos extrañas, te esperamos.</li>`
    formOperacion(formTurno);
    contOperacion(contTurno);
})

formTurno.addEventListener('input', () => {
    contTurno.innerHTML = `<p>
    Seleccionaste un turno para la fecha: ${formTurno.value}hs.</p>`;
    const confirmarTurno = document.createElement('button');
    confirmarTurno.innerText = 'Confirmar';
    confirmarTurno.setAttribute('class','confirmar')
    contTurno.append(confirmarTurno);
    confirmarTurno.addEventListener('click', () => {
        contTurno.innerHTML = '<h3>Has confirmado tu turno.</h3>';
        formTurno.setAttribute("class","ocultar");
        const contenedor = document.createElement('div'); 
        contenedor.setAttribute('class','liCarrito')
        contenedor.innerHTML = `<li>Turno sucursal ${formTurno.value}HS</li>`;
        listaMovimientos.push(contenedor);
        contMovimientos.append(contenedor);
        localStorage.setItem("Turno", JSON.stringify(`<li>Turno sucursal ${formTurno.value}HS</li>`));
    })
})


//CRIPTOS
const crypto = document.getElementById('crypto')
const contCrypto = document.getElementById('contCrypto');
let listacryptos = [];
contCrypto.setAttribute('class','ocultar');

crypto.addEventListener('click', () => {
    contOperacion(contCrypto);
    formOperacion(contCrypto);
    fetch('crypto.json')
    .then( respuesta => respuesta.json() )
    .then( rta => {
        listacryptos = rta;
        for(const crypto of listacryptos) {
            const card = document.createElement('card');
            card.className = 'cardCrypto';
            card.innerHTML = `
            <h4>${crypto.name}</h4>
            <img src='${crypto.img}' class='imgCrypto'></img>
            <p>$${crypto.price}</p>
            `
            const boton = document.createElement('button');
            boton.addEventListener("click", () => compraCrypto(crypto))
            boton.innerText = 'Comprar';
            boton.setAttribute('class','confirmar');
            card.append(boton)
            contCrypto.append(card)
        }
    }).catch(console.log('error'))
}) 

function compraCrypto(crypto) {
    listaMovimientos.push(crypto);
    const contenedor = document.createElement('div')
    contenedor.setAttribute('class','liCarrito')
    contMovimientos.innerHTML += `<li>Compraste ${crypto.name}
    <img src="${crypto.img}" class="imgCardsCarrito"></img></li>`;
    //listaMovimientos.push(contenedor)
    contMovimientos.append(contenedor)
    localStorage.setItem("carrito", JSON.stringify(`<li>Compraste ${crypto.name}
    <img src="${crypto.img}" class="imgCardsCarrito"></img></li>`));
}


let carrito = JSON.parse(localStorage.getItem('carrito')) || [];


//MOVIMIENTOS
const movimientos = document.getElementById('movimientos');
const contMovimientos = document.getElementById('contMovimientos');
const contTituloMov = document.getElementById('contTituloMov')
const tituloMov = document.getElementById('tituloMov');
let listaMovimientos = [];

