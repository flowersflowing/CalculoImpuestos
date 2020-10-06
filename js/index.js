import {Impuesto} from '../js/impuesto.js';
import Cliente from './cliente.js';

const babel = require("@babel/core");

babel.transform("code", optionsObject);

let calcular = document.getElementById("calcular");
let resultado = document.getElementById("resultado");

calcular.addEventListener('click', impuestoAPagar);

function impuestoAPagar(e) {
    e.preventDefault();
    
    let cliente = document.getElementById("cliente").value;
    let ventas = document.getElementById("ventas").value;
    let deducciones = document.getElementById("deducciones").value;

    if (cliente && ventas && deducciones) {
        let cliente1 = new Cliente(cliente);
        let impuesto1 = new Impuesto(ventas, deducciones);
        resultado.innerHTML = `${cliente1.nombre()} tiene que pagar ${impuesto1.calcularImpuesto()} en impuestos`;
    }
    else {
        alert("debe ingresar la información requerida");
    }
}