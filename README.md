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

![NodeJS](https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/css-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Sequelize](https://img.shields.io/badge/sequelize-%23084B8A.svg?style=for-the-badge&logo=sequelize&logoColor=white)
![Mercado Pago](https://img.shields.io/badge/mercado%20pago-%230077FF.svg?style=for-the-badge&logo=mercado-pago&logoColor=white)
![Swagger](https://img.shields.io/badge/swagger-%23333D40.svg?style=for-the-badge&logo=swagger&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=white)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/VisualStudioCode-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
---

¡Ahora estás listo para ejecutar el proyecto y explorar la API de comercio electrónico! Si tienes alguna pregunta o problema, no dudes en abrir un [issue](https://github.com/tu-repositorio/issues) en el repositorio.

