const ctx = document.getElementById('myChart').getContext('2d');

//Cargamos el JSON
fetch('prueba.json')
    .then(response => response.json())
    .then(dataParseada => { //almacenamos la data para poder manipularla.
        
        const etiquetasChart = []; //variable que se usará para guardar las etiquetas pertenecientes a los días (el eje X)

        /*Guardamos las fechas en un arreglo para utilizar dicho array para generar los labels
        del chart*/
        for(let i=0;i<dataParseada.data.length;i++){ //iterar sobre cada objeto en data
            etiquetasChart.push(dataParseada.data[i].date);
        }

        for(let i=0;i<dataParseada.data.length;i++){ //iterar sobre cada objeto en data
           console.log(dataParseada.data[i].records); //obtenemos los datos del dia correspondiente.
        }

        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: etiquetasChart,
                datasets: [{
                    label: 'TEMPERATURA EN CELSIUS',
                    data: [1,2,3],
                    backgroundColor: 'rgba(76, 191, 122, 0.2)',
                    borderColor: 'rgba(48, 162, 93, 1)',
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
    })
.catch(error => console.error('Error al cargar los datos:', error));

//Estructura del JSON para que no se me olvide como acceder a los datos xd
//console.log(dataParseada.data[0]);   //accediendo al objeto del dia 1
//console.log(dataParseada.data[0].date); //obteniendo fecha para etiquetas (chart)
//console.log(dataParseada.data[2].records); //obteniendo todos los datos del dia 1.