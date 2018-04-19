# raspberryApi

En una raspberry Pi 2 model B se ha instalado raspbian (stretch) y la versión LTS de node
Tb se ha instalado Mongodb-Server.
Para la próxima en vez de utilizar Raspbian (que va a 32b) probar a usar otra distro que vaya a 64b para no tener problemas 

IMPORTANTE:
En la App realizada con Express utilizamos mongoose para conectar con Mongo, pero tenemos que usar como mucho la versión 4 
ya que la última no trabaja a 32b
