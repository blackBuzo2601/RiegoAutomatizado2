import serial
import json
import os
from datetime import datetime


ser = serial.Serial('COM5', 9600) 

#Verificamos si data.json existe
if not os.path.exists('data.json'):
    with open('data.json', 'w') as json_file:
        json.dump([], json_file)  #Inicializando lista vacia

while True:
    line = ser.readline().decode('utf-8').strip()  #linea actual del puerto serial
    print(line)  #imprimir en consola la linea actual.
    
    try:
        #Convertir la línea en un diccionario
        new_data = json.loads(line)
        
        #Agregando una variable para la fecha y otra que incluye la hora.
        new_data['fecha'] = datetime.now().strftime("%Y-%m-%d") 
        new_data['fecha_hora'] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        
        #Leer los datos existentes en el JSON
        with open('data.json', 'r+') as json_file:
            #Si el archivo esta vacio, inicializar como una lista vacia.
            if os.stat('data.json').st_size == 0:
                data = []  
            else:
               #sino esta vacio, cargamos el contenido existente
                data = json.load(json_file)
                
            #Con esto nos aseguramos de que data sea una lista.
            if not isinstance(data, list):
                data = [] 
            
            data.append(new_data)  #Agregamos el nuevo objeto a la lista, es decir, otra captura de datos
            
            json_file.seek(0)  #Regresar al inicio del archivo
            json.dump(data, json_file, indent=4)  #Sobrescribir el archivo con la nueva lista
            json_file.truncate()  #Eliminar el contenido antiguo que pueda quedar
            
    except json.JSONDecodeError:
        print("Error al decodificar JSON")
    except Exception as e:
        print(f"Error: {e}")
