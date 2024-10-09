//const ctx = document.getElementById('myChart').getContext('2d');
const fs = require('fs');                                 
const jsonData = fs.readFileSync('prueba.json', 'utf-8');
const dataParseada = JSON.parse(jsonData); //Dividimos la Data del JSON en cuanto a sus "CLAVES".
        
/*Usamos el modulo require de NODE.JS para cargar el modulo fs (fileSystem). Que nos permite
leer y escribir archivos*/


console.log("Imprimiendo data parseada");
//console.log(dataParseada.data[0]);   accediendo al objeto del dia 1
console.log(dataParseada.data[2].date); //obteniendo fecha para etiquetas (chart)


/*
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['09/Oct/24', '09/Oct/24', '10/Oct/24', '10/Oct/24', '11/Oct/24', '11/Oct/24', '11/Oct/24', '11/Oct/24'], // Extiende los labels para cada punto de dato
        datasets: [{
            label: 'TEMPERATURA EN CELSIUS',
            data: [12, 19, 3, 4, 6, 7, 2, 14], 
            backgroundColor: [
                'rgba(76, 191, 122, 0.2)',
            ],
            borderColor: [
                'rgba(48, 162, 93, 1)',
            ],
            borderWidth: 8,
            fill: false, 
        }]
    },
    options: {
        responsive: false,  
        scales: {
            x: {
                beginAtZero: true,
            },
            y: {
                beginAtZero: true
            }
        }
    }
});



*/