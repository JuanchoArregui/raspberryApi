# raspberryApi

En una raspberry Pi 2 model B se ha instalado raspbian (stretch) y la versión LTS de node
Tb se ha instalado Mongodb-Server.
Para la próxima en vez de utilizar Raspbian (que va a 32b) probar a usar otra distro que vaya a 64b para no tener problemas 

IMPORTANTE:
En la App realizada con Express utilizamos mongoose para conectar con Mongo, pero tenemos que usar como mucho la versión 4 
ya que la última no trabaja a 32b

DEPLOY:
si tuviera acceso a un router podría darle acceso a través de la IP del router y abriendo el puerto de la raspi.
Pero por cuestiones prácticas es más fácil conectarme a internet a través del movil usandolo de punto de acceso. Esto impide abrir el puerto de la raspi. Así que utilizo un TUNEL INVERSO con NGROK que me facilita una tubería bidireccional entre mi raspi y el cliente. 
Para ello instalamos NGROk y para cada sesión hay que obtener una dirección que nos da ngrok y pasársela al cliente de angular (o el que usemos).
Pasos a seguir en cada ocasión:
1º en la raspi abrimos un terminal y levantamos nuestra App en el puerto 3000 con "npm run dv"
2º en un terminal nuevo ejecutamos "ngrok htttp 3000"
3º copiamos la direccion que aparece en "Forwarding" y se la pasamos al servidor del cliente
