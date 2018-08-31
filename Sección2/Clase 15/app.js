function activar(quien, //Parámetro obligatorio//
objeto, //Parámetro por defecto
momento //Parámetro opcional
) {
    if (objeto === void 0) { objeto = "batiseñal"; }
    var mensaje;
    if (momento) {
        mensaje = quien + " activ\u00F3 la " + objeto + " en la " + momento;
    }
    else {
        mensaje = quien + " activ\u00F3 la " + objeto;
    }
    console.log(mensaje);
}
activar("Oscar", "batiseñal", "tarde");
