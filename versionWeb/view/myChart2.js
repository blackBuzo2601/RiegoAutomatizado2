const ctx = document.getElementById('myChart2').getContext('2d');


//Cargamos el JSON
fetch('../../dataFiles/data.json')
    .then(response => response.json())
    .then(dataParseada => { //almacenamos la data para poder manipularla.
        
        const etiquetasChart = []; //variable que se usará para guardar las etiquetas pertenecientes a los días (el eje X)
        const datosChart=[];
        /*Guardamos las fechas en un arreglo para utilizar dicho array para generar los labels
        del chart*/
       
        
        for(let i=0;i<dataParseada.length;i++){ //iterar sobre cada objeto en data
            etiquetasChart.push(dataParseada[i].fecha_hora);
            datosChart.push(dataParseada[i].humedad);
        }

        
        //como guardamos al mismo tiempo en cada array tanto el dato como la fecha y hora, siempre coincidirá

        //console.log(dataParseada[1]); //asi vemos el objeto, es decir, la captura completa del dato
        //con todo y fecha.

        const myChart2 = new Chart(ctx, {
            type: 'line',
            data: {
                labels: etiquetasChart,
                datasets: [{
                    label: 'TEMPERATURA EN °C',
                    data: datosChart,
                    backgroundColor: 'rgba(76, 191, 122, 0.2)',
                    borderColor: 'rgba(48, 162, 93, 1)',
                    borderWidth: 3,
                    fill: false,
                }]
            },
            options: {
                animation:false,
                responsive: false,  
                scales: {
                    x: {
                        beginAtZero: false,
                    },
                    y: {
                        beginAtZero: false
                    }
                }
            }
        });

    })
.catch(error => console.error('Error al cargar los datos:', error));

