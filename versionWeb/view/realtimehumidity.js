
fetch('../../dataFiles/datarealtime.json')
    .then(response => response.json())
    .then(dataParseada => { //almacenamos la data para poder manipularla.
        
       
        const datosChart=[];
        /*Guardamos las fechas en un arreglo para utilizar dicho array para generar los labels
        del chart*/
        
        for(let i=0;i<dataParseada.length;i++){ //iterar sobre cada objeto en data
            datosChart.push(dataParseada[i].humedad);
        }
        //como guardamos al mismo tiempo en cada array tanto el dato como la fecha y hora, siempre coincidirá
        var humedadActual=0;
        humedadActual=datosChart[datosChart.length-1];
        document.getElementById('humidity-value').innerText = humedadActual+"%";
    
    })
.catch(error => console.error('Error al cargar los datos:', error));

