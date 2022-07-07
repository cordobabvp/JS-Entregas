//PRE-ENTREGA 1 PROYECTO FINAL

//Clase molde constructora de objetos, y con metodos a utilizar.
class Monedas {
    constructor (nombre, precioVenta, precioCompra) {
        this.nombre = nombre;
        this.precioVenta = precioVenta; 
        this.precioCompra = precioCompra;
    }
    comprarMoneda (a) {
        let totalCompra = this.precioVenta * a;
        return totalCompra;
    }
    venderMoneda (a) {
        let totalVenta = this.precioCompra * a;
        return totalVenta;
    }
}

//declaracion de objetos con sus propiedades a partir de clase.
const moneda1 = new Monedas ("dolar", 210, 200)
const moneda2 = new Monedas ("euro", 260, 250)
const moneda3 = new Monedas ("real", 45, 40)
const moneda4 = new Monedas ("uruguayo", 10, 7)

//declaracion del array y pusheo de objetos
const listaDeMonedas = [];

listaDeMonedas.push (moneda1)
listaDeMonedas.push (moneda2)
listaDeMonedas.push (moneda3)
listaDeMonedas.push (moneda4)
//Variables
let nombreUsuario = localStorage.getItem('nombreUsuario');
let apellidoUsuario = localStorage.getItem('apellidoUsuario');
let dniUsuario = localStorage.getItem('dni');

// Referencio clases con variables
const contBienvenida = document.getElementById('contbienvenida');
const bienvenida = document.getElementById('bienvenida');
const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const dni = document.getElementById('dni');
const ingresar = document.getElementById('ingresar');
const msjBienvenida = document.querySelector('.msjbienvenida');
const monedas = document.querySelector('.monedas');
const formulario = document.getElementById('formConversion');
const select = document.getElementById('select');
const selOp = document.getElementById('operacion');
const selMoneda = document.getElementById('moneda');
const solicitado = document.getElementById('solicitado');
const realizado = document.getElementById('realizado');
const enviar = document.getElementById('enviar');
const cant = document.getElementById('cantidad');
const vender = document.getElementById('vender');
const comprar = document.getElementById('comprar');
const valorsel = select.value;
const valorop = selOp.value;

//Oculta formulario de operaciones
document.getElementById('formConversion').style.display = 'none';
document.getElementById('conversion').style.display = 'none';
document.getElementById('prestamo').style.display = 'none';
document.getElementById('plazo fijo').style.display = 'none';


//Oculta formulario de acceso
ocultarAcceso = () => {
    //Recorro el array y por cada objeto creo una etiqueta li con sus propiedades. 
    //Append para inyectarlo al HTML en la clase referenciada.
    for(const moneda of listaDeMonedas){
        const li = document.createElement('li');
        li.innerHTML = `<p>La cotización del ${moneda.nombre} es: ${moneda.precioVenta}$ Venta, ${moneda.precioCompra}$ Compra</p>`;
        monedas.append(li);
    }
}

const usuarioSesion = []

//ver bien validacion de usuario, casos mas especificos
//Saludo de bienvenida
bienvenida.addEventListener('submit', (e) => {
    e.preventDefault();
    nombreUsuario = nombre.value;
    apellidoUsuario = apellido.value;
    dniUsuario = dni.value;
    if (typeof(dniUsuario === "number") && typeof(nombre.value) === "string" && typeof(apellidoUsuario) === "string"){
        msjBienvenida.innerHTML = `<p>¡Hola ${nombre.value} ${apellido.value}! Te damos la bienvenida al Banco de la Moneda.</p>`;      
    } else {
        msjBienvenida.innerHTML = 'Ingresa correctamente tus datos'
    }
    postValidar();
    Toastify({
        text: "Has ingresado al Banco de la Moneda",
        className: "info",
        duration: 3000,
        position: "right",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        }
    }).showToast();
});

//almacena datos en localStorage y muestra botones
function postValidar() {    
    localStorage.setItem('nombreUsuario', nombre.value);
    localStorage.setItem('apellidoUsuario', apellido.value);
    localStorage.setItem('dni', dni.value);
    
    document.getElementById('contbienvenida').style.display = 'none';
    document.getElementById('conversion').style.display = '';
    document.getElementById('prestamo').style.display = '';
    document.getElementById('plazo fijo').style.display = '';
}

//Funcion toma el texto del select moneda
function textoMoneda() {
    let textoMon = select.value;
    textoMon = select.options[select.selectedIndex].innerText;
    return textoMon
}

conversion.addEventListener('click', () => {
    ocultarAcceso();
    document.getElementById('formConversion').style.display = '';
    document.getElementById('conversion').style.display = 'none';
    document.getElementById('prestamo').style.display = 'none';
    document.getElementById('plazo fijo').style.display = 'none';

})

//Defino evento submit sobre formulario y asigno funcion
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    calculadora();
    solicitado.innerHTML = `
    <h3>Operación solicitada:</h3> 
    <p> ${selOp.value} ${cant.value}$ ${textoMoneda()}.</p>`; 
    realizado.innerHTML = `
    <h3>Operación realizada:</h3>
    <p>El monto correspondiente en ARS$ es ${calculadora()}</p>`; //averiguar pq no define el resultado
});

//funcion que retorna value seleccionado en moneda(clase select)
function mostrarSeleccionado () {
    let select = document.getElementById('select');
    return select.value;
    
};

//funcion que retorna value seleccionado en operacion(compra/venta)
function operacionSeleccionada() {
    let selOp = document.getElementById('operacion');
    return selOp.value;
};


//funcion que opera los valores obtenidos del formulario, retorna devolucion
const calculadora = () => {
    let resultado = 0
    if (valorop == "Comprar") { 
        switch (valorsel) {
            case 1:
                resultado = moneda1.comprarMoneda(cant.value);
                break;
            case 2:
                resultado = moneda2.comprarMoneda(cant.value);
                break;
            case 3:
                resultado = moneda3.comprarMoneda(cant.value);
                break;
            case 4:
                resultado = moneda4.comprarMoneda(cant.value);
                break;
            default:
                break;
        }
        return resultado; 
    }
    if(valorop == "Vender") {
        switch(valorsel) {
            case 1:
                resultado = moneda1.venderMoneda(cant.value);
                break;
            case 2:
                resultado = moneda2.venderMoneda(cant.value);
                break;
            case 3:
                resultado = moneda3.venderMoneda(cant.value);
                break;
            case 4:
                resultado = moneda4.venderMoneda(cant.value);
                break;
            default:
                break;
        }
        return resultado;
    } 
}
//let devolucion = calculadora();
// para almacenar objetos
const ejemplo = { ejemplo: 'ejemplo1', ejemplo: 1, };
localStorage.setItem('ejemplos', JSON.stringify(ejemplo));

//PRESTAMO
const prestamo = document.getElementById('prestamo');
const contPrestamo = document.getElementById('contPrestamo');
const formPrestamo = document.getElementById('formPrestamo');
const montoPrestamo = document.getElementById('montoPrestamo');
const enviarPrestamo = document.getElementById('enviarPrestamo');
const interesPrestamo = 1.45;
document.getElementById('formPrestamo').style.display = 'none';

//Elige la operacion prestamo
prestamo.addEventListener('click', () => {
    //ocultar resto de botones
    //añadir opcion volver atras
    document.getElementById('formPrestamo').style.display = '';
    document.getElementById('conversion').style.display = 'none';
    document.getElementById('prestamo').style.display = 'none';
    document.getElementById('plazo fijo').style.display = 'none';
});

function prestar() {
    const solicitudPrestamo = document.createElement('div');
    solicitudPrestamo.innerHTML = `
    <p>Has solicitado un préstamo bancario por un monto total de $${montoPrestamo.value}.
    A devolver en ${numeroCuotas()} cuotas de ${parseInt(montoCuotas())}.</p>`;
    const confirmarPrestamo = document.createElement('button');
    confirmarPrestamo.innerText = 'confirmar';
    contPrestamo.append(solicitudPrestamo);
    contPrestamo.append(confirmarPrestamo); //boton confirmar añadiria operacion a carrito/agenda. 
};

//Envia el formulario de prestamo, devolviendo lo seleccionado y prestamo a devolver.
formPrestamo.addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('formPrestamo').style.display = 'none';
    prestar();
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

document.getElementById('formPlazo').style.display = 'none';

plazoFijo.addEventListener('click', () => {
    document.getElementById('formPlazo').style.display = '';
    document.getElementById('plazo fijo').style.display = 'none';
    document.getElementById('prestamo').style.display = 'none';
    document.getElementById('conversion').style.display = 'none';

})
formPlazo.addEventListener('submit', (e) => {
    e.preventDefault();
    
})

function plazo() {
    const elemento = document.createElement('div');
    elemento.innerHTML = `
    <p>Has solicitado un plazo fijo con un capital ${inputFijo.value}$ a ${inputPlazo.value}días.
    Intereses ganados: ....$ Monto total:....$
    TNA:....% TEA:....$</p>`;
    const confirmarPlazo = document.createElement('button');
    confirmarPlazo.innerText = 'Confirmar';
    contPlazo.append(elemento);
    contPlazo.append(confirmarPlazo);
}

