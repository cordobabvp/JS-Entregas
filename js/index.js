//PRE-ENTREGA 1 PROYECTO FINAL

//Clase molde constructora de objetos, y con metodos a utilizar.
class Monedas {
    constructor (nombre, precioVenta, precioCompra) {
        this.nombre = nombre;
        this.precioVenta = precioVenta; 
        this.precioCompra = precioCompra;
    }
    comprarMoneda (cantidad) {
        let totalCompra = this.precioVenta * cantidad;
        return totalCompra;
    }
    venderMoneda (cantidad) {
        let totalVenta = this.precioCompra * cantidad;
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


//for -> para recorrer el array de objetos(consigna) y devolver la moneda con cotizacion(sus propiedades) 
// debajo obtencion de datos a utilizar (variables/parametros)

alert("Bienvenido al Banco de la Moneda");
//for(let i = 0; i < listaDeMonedas.length; i++) {
//    alert(`La cotización del ${listaDeMonedas[i].nombre} es: ${listaDeMonedas[i].precioVenta}$ venta, ${listaDeMonedas[i].precioCompra}$ compra.`)
//}
let moneda = Number(prompt(`
        Seleccione tipo de moneda:
        1) Dolar
        2) Euro
        3) Real
        4) Uruguayo`
));
let operacion = Number(prompt(`
        Operaciones disponibles: 
        1) Comprar moneda extranjera 
        2) Vender moneda extranjera`
));
let cantidad; 
const PedirCantidadMonedas = () => {
    while (isNaN((cantidad)) || cantidad <= 0)
    cantidad = Number(prompt(`Ingrese la cantidad deseada`));
    return cantidad;
}
PedirCantidadMonedas();

//declaracion de funcion que analice en cada caso los datos ingresados y las instrucciones a llevar a cabo
//resultado variable local, al llamar a calculadora() devuelve ese valor.
// operacion 1 -> compra  operacion 2 -> venta
//moneda es el parametro a evaluar (si es euro se multiplica por la propiedad de su objeto) y asi en cada caso


const calculadora = () => {
let resultado = 0;    
if (operacion === 1) { 
    switch (moneda) {
        case 1:
            resultado = moneda1.comprarMoneda(cantidad);
            break;
        case 2:
            resultado = moneda2.comprarMoneda(cantidad);
            break;
        case 3:
            resultado = moneda3.comprarMoneda(cantidad);
            break;
        case 4:
            resultado = moneda4.comprarMoneda(cantidad);
            break;
        default:
            break;
    }
    return resultado;
}
if(operacion === 2) {
    switch(moneda) {
        case 1:
            resultado = moneda1.venderMoneda(cantidad);
        break;
        case 2:
            resultado = moneda2.venderMoneda(cantidad);
        break;
        case 3:
            resultado = moneda3.venderMoneda(cantidad);
        break;
        case 4:
            resultado = moneda4.venderMoneda(cantidad);
            break;
        default:
            break;
    }
    return resultado;
} 
}

//se declara una nueva variable con el valor de la funcion al ser llamada. despues se muestra esa varible como resultado
let devolucion = calculadora();
//alert(`El monto correspondiente en ARS$ es ${devolucion}`);


//Recorro el array y por cada objeto creo una etiqueta li con sus propiedades. 
//Append para inyectarlo al HTML en la clase monedas.
const monedas = document.querySelector('.monedas');
for(moneda of listaDeMonedas){
    const li = document.createElement('li');
    li.innerHTML = `<p>La cotización del ${moneda.nombre} es: ${moneda.precioVenta}$ Venta, ${moneda.precioCompra}$ Compra</p>`;
    monedas.append(li);
} 

//Declaro nodo donde devuelvo mensaje con operacion final. 
const divP = document.querySelector('.mensaje');

divP.innerText = `El monto correspondiente en ARS$ es ${devolucion}`;

//como meter las entradas del usuario en el HTml?