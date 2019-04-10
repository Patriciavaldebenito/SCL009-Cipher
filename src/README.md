#PROYECTO CÓDIGO CESAR "Athy!"

##Descripcion del proyecto:

Athy! Primera aplicación web desarrollada en el proyecto bootcamp. Athy! consiste en un aplicacion tipo servicio dirigido a usuarias mujeres, esta iniciativa esta dirigida a grupos en ayuda y guiamientos de usuarias con insertidundre respecto a situación de control o violencia que esten viviendo junto a sus parejas. 

La aplicacion utiliza un cifrado y descifrado, controlado por lideres de grupos de ayuda y usuarias a través de un parametro único númerico. 

Por lo tanto la tematica utilizada en el proyecto es mensajeria secreta.

#### Definición del producto:

Proceso para definir el producto a nivel de experiencia y de interfaz.

* ¿Quiénes son los principales usuarios de producto?

    Las principales ususarias son mujeres, se desea que la aplicacion sea utilizada por departamentos de carabineros, municipalidades, grupos activas de mujeres que tienen en sus proposito la ayuda, acompañamiento u orientacion a mujeres, ya sean: jovenes, adultas o de edad, que se encuentren en alguna situacion de duda o certeza de ser controladas, violentadas u otro estado evaluado por sus parejas.


* ¿Cuáles son los objetivos de estos usuarios en relación con tu producto?

    Los usuarios serán lideres de estas organizaciones, personas a cargo que dispondran de esta herramienta web, donde las usuarias  acceden para enviar mensajes de manera secreta, con un cifrado cesar que no es de comun conocimiento, y en el cual a traves del parametro unico numerico "offset" pueden manipular solo ellas, en beneficio de ser victimas reales. 

    El objetivo principal de esta aplicacion creada en el bootcamp, es el comienzo de una aplicacion que permita a estos grupos activos(carabineros, centro social, municipalidad, etc), poder acercarse a las usuarias a traves de una aplicacion donde la interaccion de la usuaria sera inmediata y no tendra que dirigirse a la ubicacion de estas instituciones, donde el mensaje queda registrado en el instante. 

    * El registro de los mensajes se estima como desarrollo en otra fase del proyecto. 

- ¿Cómo crees que el producto que estás creando está resolviendo sus problemas?

    Como se menciono en la interrogante anterior, este producto permite reemplazar el traslado de las mujeres a las instituciones, en el cual muchas de ellas deciden no informar, no pedir ayuda o en el mayor de los casos no recibir orientacion.

    Al ser una aplicacion web, permite masificar el proyecto y que un gran numero de usuarios reciban informacion u orientacion sobre dudas de conductas que puedan tener. 

    Al ser una aplicacion inmediata, los grupos activos tendran acceso a la informacion y registro de esta en caso de ser necesarias en el futuro, con la redaccion y detalle inmediato. 

### Interfaz de usuario (UI)

La interfaz  permite al usuario:
- Utilizar un  desplazamiento (_offset_) indicando cuántas posiciones en el cifrado se desplaza cada   caracter.
- Insertar un mensaje (texto) para cifrar o insertar un mensaje (texto) a descifrar.
- Ver el resultado del mensaje cifrado.
- Ver el resultado del mensaje descifrado.

A continuacion una imagen de la aplicacion: 




#### ¿Como descargar, instalar y ejecutar la aplicación?

* `README.md`: debe explicar cómo descargar, instalar y ejecutar la aplicación
  así como una introducción a la aplicación, su funcionalidad y decisiones de
  diseño que tomaron.


Diseño de experiencia de usuario (User Experience Design):

- Ideación
- Prototipado (sketching)
- Testeo e Iteración


### Parte Obligatoria
* [ ] `README.md` incluye info sobre proceso y decisiones de diseño.
* [ ] `README.md` explica claramente quiénes son los usuarios y su relación con
  el producto.
* [ ] `README.md` explica claramente cómo el producto soluciona los
  problemas/necesidades de los usuarios.
* [ ] Usa VanillaJS.
* [ ] No utiliza `this`.
* [ ] Implementa `cipher.encode`.
* [ ] Implementa `cipher.decode`.
* [ ] Pasa linter con configuración provista.
* [ ] Pasa pruebas unitarias.
* [ ] Pruebas unitarias cubren 70% de _statements_, _functions_ y _lines_, y un
  mínimo del 50% de _branches_.
* [ ] Interfaz permite elegir el `offset` o _desplazamiento_ a usar en el
  cifrado/descifrado.
* [ ] Interfaz permite escribir un texto para ser cifrado.
* [ ] Interfaz muestra el resultado del cifrado correctamente.
* [ ] Interfaz permite escribir un texto para ser descifrado.
* [ ] Interfaz muestra el resultado del descifrado correctamente.

### Parte Opcional: "Hacker edition"
* [ ] Cifra/descifra minúsculas
* [ ] Cifra/descifra _otros_ caracteres (espacios, puntuación, `ñ`, `á`, ...)
* [ ] Permite usar un `offset` negativo.


