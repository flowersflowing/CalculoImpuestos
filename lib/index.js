"use strict";

var _impuesto = _interopRequireDefault(require("./impuesto.js"));

var _cliente = _interopRequireDefault(require("./cliente.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    let cliente1 = new _cliente.default(cliente);
    let impuesto1 = new _impuesto.default(ventas, deducciones);
    resultado.innerHTML = "".concat(cliente1.nombre(), " tiene que pagar ").concat(impuesto1.calcularImpuesto(), " en impuestos");
  } else {
    alert("debe ingresar la información requerida");
  }
}