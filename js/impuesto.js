export default class Impuesto {
    constructor(ventas, deducciones) {
        this._ventas = ventas;
        this._deducciones = deducciones;
    }

    get ventas() {
        return this._ventas;
    }

    set ventas(nuevaVenta) {
        this._ventas = () => nuevaVenta;
    }

    get deducciones() {
        return this._deducciones;
    }

    set deducciones(nuevasDeducciones) {
        this._deducciones = () => nuevasDeducciones;
    }

    calcularImpuesto() {
        return (this.ventas - this.deducciones) * 0.20;
    }
}