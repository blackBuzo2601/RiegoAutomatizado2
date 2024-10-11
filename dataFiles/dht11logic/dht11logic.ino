#include <DHT.h>

#define DHTPIN 2          
#define DHTTYPE DHT11     

DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);  
  dht.begin();         
}

void loop() {
  delay(500);  
  
 
  float humidity = dht.readHumidity();
  float temperature = dht.readTemperature();

  
  if (isnan(humidity) || isnan(temperature)) {
    Serial.println("Error al leer del sensor.");
    return;
  }

//Estructuramos las variables de forma que se guarden en el JSON y podamos trabajar con los datos guardados en objetos.
  Serial.print("{\"temperatura\": ");
  Serial.print(temperature);
  Serial.print(", \"humedad\": ");
  Serial.print(humidity);
  Serial.println("}");


  delay(500);
}
