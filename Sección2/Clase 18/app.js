//Las Promesas son asincronas
var prom1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promesa Terminada");
        //Si termina bien
        resolve();
        //Si termina mal
        //reject();
    }, 1500);
});
//La función then recibe dos parámetros, resolve y reject
prom1.then(function () {
    console.log("Ejecutarme cuando se termine bien!");
}, function () {
    console.error("Ejecutar si todo sale mal");
});
