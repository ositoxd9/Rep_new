function mostrarEjercicio3() {
    const filas = 7;
    const columnas = 5;
    let matriz = [];

    for (let i = 0; i < filas; i++) {
        matriz[i] = [];
        for (let j = 0; j < columnas; j++) {
            let pintarS = false;

            if (i === 0) { pintarS = true; }
            if (i === 3) { pintarS = true; }
            if (i === filas - 1) { pintarS = true; }
            if (j === 0) { pintarS = true; }
            if (j === columnas - 1) { pintarS = true; }

            if (pintarS) {
                matriz[i][j] = "S";
            } else {
                matriz[i][j] = " ";
            }
        }
    }

    let salida = "";
    for (let i = 0; i < filas; i++) {
        salida += matriz[i].join("") + "\n";
    }

    document.getElementById("resultado").textContent = salida;
}

function ejercicio4() {
    let calificaciones = [85, 90, 78, 92, 88, 76, 95, 89, 82, 91];
    let texto = "Original: " + calificaciones.join(", ") + "\n\n";
    
    let indice = parseInt(prompt("¿Desde qué índice (0 al 9) quieres empezar a cortar?"));
    let cuantos = parseInt(prompt("¿Cuántas calificaciones deseas eliminar?"));
    
    calificaciones.splice(indice, cuantos);
    
    texto += "Arreglo después del splice:\n" + calificaciones.join(", ");
    document.getElementById("resultado4").textContent = texto;
}

function guardarEvento() {
    let fila = document.getElementById("diaAgenda").value;
    let hora = document.getElementById("horaAgenda").value;
    let evento = document.getElementById("eventoAgenda").value;
    let descripcion = document.getElementById("descAgenda").value;

    document.getElementById("h-" + fila).innerHTML = hora;
    document.getElementById("e-" + fila).innerHTML = evento;
    document.getElementById("d-" + fila).innerHTML = descripcion;
}