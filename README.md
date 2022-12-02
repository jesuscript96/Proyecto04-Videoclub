# Proyecto04-Videoclub
Creación de la parte backend para una aplicación de alquiler de películas tomando como referencia la popular plataforma de alquiler online o streaming Netflix. Se creará una Base de Datos y una API REST.


## Base de datos 🧰

La base de datos cuenta de 6 tablas: Film y Series, que se relacionan con Artículos mediante una relación ISA, Loans, Users y Rols. Los usuarios podrán hacer un pedido de un artículo. Cada pedido es de un único artículo, pero cada usuario puede hacer cuantos pedidos quiera. Los usuarios podrán tener varios pedidos o ninguno, pero en un pedido solo podrá aparecer un usuario (1:N). Los artículos podrán aparecer en varios pedidos o en ninguno, pero en un pedido solo podrá aparecer una película (1:N). La relación entre tablas sería la siguiente:

![image](https://user-images.githubusercontent.com/108574820/200371541-dd214903-6349-4659-897e-4f5a39812c88.png)

***


## Pre-requisitos del proyecto para hacerlo funcionar en tu equipo local: 📌

* Instalar **Nodejs** en nuestro equipo, descargándolo de su página oficial
https://nodejs.org/

* Clonar el proyecto en nuestro equipo con git bash:
```
$git clone 'url-del-repositorio'
```

* Instalar todas las dependecias con el siguiente comando:
```
npm i
```

* Arrancamos el servidor con el siguiente comando:
```
npm run dev
```

## Creación de la base de datos ➕

Tras modificar el archivo /config/config.json con los datos de nuestro servidor mysql (username, password, database y host), deberemos crear un archivo .env añadiendo los datos de nuestro servidor. Usaremos de muestra el archivo .env.example. Después haremos lo siguiente:

* **Creación de las tablas**:

Para crear las tablas se ha utilizado el método 
````
sequelize.sync({force:true})
````
Para generar las tablas se deberá ir al archivo app.js
[![app-js.png](https://i.postimg.cc/BQMBqkPG/app-js.png)](https://postimg.cc/QHKTm6q6)

Ir al código app.listen:


[![authenticate.png](https://i.postimg.cc/QtdXrF2D/authenticate.png)](https://postimg.cc/NyZh6jGC)


Y cambiar el código

````
sequelize.authenticate()
````

por el código mencionado anteriormente:

````
sequelize.sync({force:true})
````

[![syncforcetrue.png](https://i.postimg.cc/HxFXc14r/syncforcetrue.png)](https://postimg.cc/1ncf2TdS)

Ahora deberemos guardar y dejar que se generen las tablas en la base de datos. Una vez finalizada la creacion, deberemos volver a cambiar el código 

````
sequelize.authenticate()
````


* **Creación de los registros**:
```
sequelize db:seed:all
```
<br>
<br>

## Uso de la API ▶

Botón para usar la colección de postman, en donde están todos los endpoints para poder manipular la base de datos:
<br>

 [![Ejecutar en Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/11138723-eeb5cf01-1f60-493f-9755-3a67dcc8988f?action=collection%2Ffork&collection-url=entityId%3D11138723-eeb5cf01-1f60-493f-9755-3a67dcc8988f%26entityType%3Dcollection%26workspaceId%3D8cbf41ec-fd52-44cd-82e7-1a6bcbebc7d5)

## Tecnologías utilizadas en el proyecto: 🔧

* **express**: Instalamos express en nuestro proyecto:
```
npm install express
```
* **nodemon**: Instalamos nodemon en nuestro proyecto. También añadimos en nuestro **package.json** un script para poder ejecutarlo:
```
npm install nodemon
```
```
//AÑADIDO EN PACKAGE.JSON
"dev": "nodemon app.js"
```
```
//EJECUTAMOS EN TERMINAL
npm run dev
```
* **colors**: Instalamos colors en nuestro proyecto, para poder dar formato a los mensajes que aparezcan en consola.
```
npm install sequelize-cli -g
npm install --save sequelize mysql2 sequelize-cli
sequelize init
```
* **jsonwebtoken**: Instalamos jsonwebtoken en nuestro proyecto para gestionar uso de tokens:
```
npm install jsonwebtoken
```


## Explicación de la estructura del proyecto 📎

Usamos el modelo vista-controlador para estructurar el proyecto. **Creamos un CRUD básico**. En el proyecto existirá la siguiente estructura:

* **app.js**: Este es el archivo principal. En este archivo se llama al archivo de las rutas, a express y al resto del middleware que van a tener todas las rutas y se arranca el servidor.

* **config**
    * **config.json**: En este archivo se gestiona la configuración para conectar con la base de datos. Se crea de manera automática con **sequelize**.


* **middlewares**
    * **authMiddleware.js**: En este archivo se gestiona la existencia y uso de los token para acceder a las zonas restringidas de la API.

* **db.js**: En este archivo se gestiona el acceso a la base de datos.

* **router.js**: En este archivo se gestiona las diferentes rutas que puede tener la aplicación. Se creará una ruta por cada tabla de la base de datos a la que queramos acceder, además de enrutar a los autenticadores



* **routes**
    * **FilmRoutes.js**: En este archivo gestionamos la ruta /films y los endpoints que apuntan a dicha ruta.
    
    * **seriesRoutes.js**: En este archivo gestionamos la ruta /series y los endpoints que apuntan a dicha ruta.

    * **OrdersRoutes.js**: En este archivo gestionamos la ruta /orders y los endpoints que apuntan a dicha ruta.
    
    * **usersRoutes.js**: En este archivo gestionamos la ruta /users y los endpoints que apuntan a dicha ruta.

    * **AuthRoutes.js**: En este archivo gestionamos la ruta /auth y los endpoints que apuntan a dicha ruta.

* **controllers**

    Existen controllers por cada una de las rutas establecidas. Los servicios que responden por ellos están introducidos en los propios controllers en el caso de las rutas ajenas a /auth. En este último caso se ha independizado el servicio del controller por buena práctica.


* **.env.example**: Muestra la configuración que debe tener el archivo .env que debe ser creado para que la aplicacion funcione
```
DB_USERNAME=USERNAME
DB_PASSWORD=PASSWORD
DB_DATABASE=DATABASE
DB_HOST=HOST
DB_PORT=PORT
DB_DIALECT=DIALECT
JWT_SECRET= SECRET
MAX_TIME_JWT_CADUCITY=MAX TIME TOKEN	
```

## Explicación de la securización de la API: 🔒

* Registro de un nuevo usuario: /auth/register

- Introducir el siguiente json (es un ejempo) en el body de la request en POSTMAN, en una llamada POST: 
{
      "mail": "example@gmail.com",
      "birth_Date": "2022-01-01",
      "password": "eyyyyy",
      "name": "example",
      "roleIdRole": (1 para admin. En caso de creacion de usuario normal, no introducir este campo)
    }

* Log in de usuario: auth/login

- Introducir el siguiente json (es un ejempo) en el body de la request en POSTMAN, en una llamada POST: 
{
      "mail": "example@gmail.com",
      "password": "eyyyyy",
    }

La response incluirá el jwt necesario para autenticarte y gozar de diferentes permisos



* Los usuarios que no estén logados, a través de una llamada GET con su correspondiente conexión, desde POSTMAN, pueden:
    * Ver todas las películas y series que tenemos en la base de datos.
    - películas: /films/
    - series: /series/
    * Ver las películas y series top rated que tenemos en la base de datos.
    - películas: /films/topfilms
    - series: /series/topseries
    * Buscar películas y series por ID.
    - películas: /films/id/:id
    - series: /series/id/:id
    * Buscar películas y series por título.
    - películas: /films/title/:title
    - series: /series/title/:title
    * Buscar películas por genero.
    - películas: /films/genre/:genre
    * Buscar las series que tienen un capítulo que va a ser emitido en los próximos 7 días.
    - series: /series/upcoming
    * Buscar las series que se van a emitir en cine
    - series: /series/ontheater

* Los usuarios logueados con rol 'usuario', además de poder hacer todo lo anteriormente mencionado, pueden:
    * Buscar los datos de su usuario a través de una llamada GET con su correspondiente conexión, desde POSTMAN:
    - /users/id/:mail
    * Modificar solo su usuario a través de una llamada PUT con su correspondiente conexión, desde POSTMAN:
    - /users/id/:update
    Solo es modificable la info recogida en el siguiente body que introducir: 
  {
      "mail": "example@gmail.com",
      "password": "eyyyyy",
      "name": "example"
    }

     * Listar todos sus pedidos a través de una llamada GET con su correspondiente conexión, desde POSTMAN: 
    - /orders/mail   

* Los usuarios logueados con administrador, además de poder hacer todo lo anteriormente mencionado, pueden:
    * Ver toda la lista de usuarios a través de una llamada GET con su correspondiente conexión, desde POSTMAN:
    - /users/

    * Borrar un usuario  a través de una llamada DELETE con su correspondiente conexión, desde POSTMAN:
    - /users/delete/:mail

    * Listar todos los pedidos de todos los usuarios a través de una llamada GET con su correspondiente conexión, desde POSTMAN:
    -/orders/
    * Generar un nuevo pedido de un usuario (simulando un dependiente) a través de una llamada POST con su correspondiente conexión, desde POSTMAN:
    -/orders/neworder
    * Modificar el pedido de un usuario (simulando un dependiente) a través de una llamada PUT con su correspondiente conexión, desde POSTMAN:
    - /orders/update/:id_order
   


## Construido con 🛠️


* [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript) 
* [Sequelize](https://sequelize.org/) 
* [MySQL](https://www.mysql.com/) 
* [NodeJS](https://nodejs.org/es/)
* [ExpressJS](https://expressjs.com/)


## Autor ✒️


* **Jesús Valenzuela** - https://github.com/jesuscript96/Proyecto04-Videoclub

## Licencia 📄

Este proyecto está bajo la Licencia [MIT License]

## Gracias :D 🎁


