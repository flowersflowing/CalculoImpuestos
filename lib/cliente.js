"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Cliente {
  constructor(nombre) {
    this._nombre = () => nombre;
  }

  get nombre() {
    return this._nombre;
  }

  set nombre(nuevoNombre) {
    this._nombre = () => nuevoNombre;
  }

}

exports.default = Cliente;