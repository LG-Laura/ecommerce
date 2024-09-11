# Proyecto de Comercio Electrónico

Este proyecto es una aplicación de comercio electrónico desarrollada utilizando **Node.js**, **MySQL**, **HTML**, **CSS**, **Bootstrap/Material**, y **JavaScript**. La documentación de la API se maneja con **Swagger**. A continuación, se presentan las instrucciones para configurar y ejecutar el proyecto.

## 🚀 Preparación del Entorno

### 1.1 Instalar Node.js y npm

Asegúrate de tener **Node.js** y **npm** instalados en tu máquina. Puedes descargarlos desde [nodejs.org](https://nodejs.org).

### 1.2 Instalar MySQL

Descarga e instala **MySQL** desde [mysql.com](https://www.mysql.com) y configura tu base de datos local.

### 1.3 Instalar Git

Para gestionar versiones y trabajo colaborativo, instala **Git** desde [git-scm.com](https://git-scm.com).

## 🛠 Inicializar el Proyecto Node.js

1. **Crea un directorio para tu proyecto e inicialízalo como un proyecto Node.js**.

2. **Instala las dependencias necesarias**:

    - **Express**: Framework web para Node.js.
    - **mysql2**: Conector para MySQL.
    - **Sequelize**: ORM para interactuar con MySQL.
    - **body-parser**: Para analizar el cuerpo de las peticiones HTTP.
    - **jsonwebtoken**: Para manejar tokens JWT.
    - **bcryptjs**: Para el hash de contraseñas.
    - **dotenv**: Para manejar variables de entorno.
    - **swagger-jsdoc** y **swagger-ui-express**: Para documentar la API con Swagger.

## 📁 Configuración del Proyecto

### Estructura del Proyecto

Organiza tu proyecto con las siguientes carpetas y archivos:

- **/controllers**: Controladores para manejar la lógica de negocio.
- **/models**: Modelos Sequelize para la base de datos.
- **/routes**: Rutas para definir las endpoints de la API.
- **/swagger**: Configuración para la documentación Swagger.
- **config.js**: Configuración de la base de datos.
- **app.js**: Archivo principal de la aplicación.

### Crear el archivo `.env`

Configura las variables de entorno necesarias para la conexión a la base de datos y la gestión de tokens JWT.

### Configurar MySQL con Sequelize

Configura Sequelize para conectarte a tu base de datos MySQL y autenticar la conexión.

## 🔨 Crear Modelos

Crea modelos para los datos de la aplicación, como usuarios, productos y órdenes, utilizando Sequelize.

## 🛠 Controladores

Desarrolla controladores para manejar las peticiones HTTP y la lógica de negocio, como el registro y autenticación de usuarios, así como la gestión de productos y órdenes.

## 🔗 Rutas

Define las rutas de la API para exponer los endpoints necesarios para interactuar con el sistema.

## 📜 Documentación con Swagger

Configura Swagger para documentar la API. Incluye información sobre las rutas, los parámetros esperados y las respuestas posibles.

## 💳 Instalación de Mercado Pago

Integra la pasarela de pago **Mercado Pago** para gestionar pagos en la aplicación. Configura las credenciales y define los flujos de pago.

## 📚 Recursos Adicionales

### Tecnologías Utilizadas

Aquí tienes una barra horizontal con enlaces a la documentación oficial de las tecnologías utilizadas en el proyecto:

## Tecnologías Utilizadas

<div align="center">
<a href="https://nodejs.org/en/" target="_blank">
<img src=https://img.shields.io/badge/linkedin-%2300acee.svg?color=405DE6&style=for-the-badge&logo=linkedin&logoColor=white alt=linkedin style="margin-bottom: 5px;" />
</a>
<a href="https://twitter.com/abdo_achhoubi" target="_blank">
<img src=https://img.shields.io/badge/twitter-%2300acee.svg?color=1DA1F2&style=for-the-badge&logo=twitter&logoColor=white alt=twitter style="margin-bottom: 5px;" />
</a>
<a href="https://instagram.com/abdo.achhoubi" target="_blank">
<img src=https://img.shields.io/badge/instagram-%ff5851db.svg?color=C13584&style=for-the-badge&logo=instagram&logoColor=white alt=instagram style="margin-bottom: 5px;" />
</a>
<a href="https://achhoubiplus.hashnode.dev" target="_blank">
<img src=https://img.shields.io/badge/hashnode-%2300acee.svg?color=2962FF&style=for-the-badge&logo=hashnode&logoColor=white alt=hshnode style="margin-bottom: 5px;" />
</a>
</div>


---

¡Ahora estás listo para ejecutar el proyecto y explorar la API de comercio electrónico! Si tienes alguna pregunta o problema, no dudes en abrir un [issue](https://github.com/tu-repositorio/issues) en el repositorio.

