
var temperatura = new Array(7);
var capturaPromedio = 0;
var maximoT = 0;
var minimoT = 0;

function capturaPromedioFunc() {
    var sumaTemperatura = 0;
    
    for(let i = 0; i < temperatura.length; i++) {
        let valor = parseFloat(prompt("Captura de temperatura " + (i + 1) + ":"));
        temperatura[i] = valor; 
        sumaTemperatura += valor;
    }
    
    maximoT = Math.max(...temperatura);
    minimoT = Math.min(...temperatura);
    capturaPromedio = sumaTemperatura / 7;
}

function mostrarTemperatura() {
    document.getElementById("impPromedioTemperatura").innerHTML = "Promedio: " + capturaPromedio.toFixed(2);
    document.getElementById("impMaximo").innerHTML = "Máximo: " + maximoT;
    document.getElementById("impMinimo").innerHTML = "Mínimo: " + minimoT;
}

function calcularEjercicio2() {
    var filaPuesto = parseInt(document.getElementById('puesto').value);
    var columnaNivel = parseInt(document.getElementById('nivel').value);
    var horas = parseFloat(document.getElementById('horas').value) || 0;
    
    var matrizTarifas = [
        [120, 240, 210],  
        [240, 280, 300],  
        [400, 600, 3000]  
    ];
 
    var tarifaBase = matrizTarifas[filaPuesto][columnaNivel];
    var total = tarifaBase * horas;
    document.getElementById("resultado2").innerHTML = total;
}

function mostrarEjercicio3() {
    const filas = 7;
    const columnas = 5;
    let matriz = [];

    for (let i = 0; i < filas; i++) {
        matriz[i] = [];
        for (let j = 0; j < columnas; j++) {
            
            let pintarS = false;

            if (i === 0) {
                pintarS = true; 
            }
            if (i === 3) {
                pintarS = true; 
            }
            if (i === filas - 1) {
                pintarS = true; 
            }
            if (j === 0) {
                pintarS = true; 
            }
            if (j === columnas - 1) {
                pintarS = true; 
            }

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