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

## Tecnologías Utilizadas

<div align="center">
  <a href="https://developer.mozilla.org/es/docs/Web/HTML" target="_blank" style="display: inline-block; margin: 5px; padding: 10px 20px; background-color: #f0db4f; color: #000; border-radius: 5px; font-weight: bold; text-align: center; text-decoration: none; border: 1px solid #dcdcdc; font-size: 14px;">HTML</a>
  <a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank" style="display: inline-block; margin: 5px; padding: 10px 20px; background-color: #264de4; color: #fff; border-radius: 5px; font-weight: bold; text-align: center; text-decoration: none; border: 1px solid #dcdcdc; font-size: 14px;">CSS</a>
  <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank" style="display: inline-block; margin: 5px; padding: 10px 20px; background-color: #f7df1e; color: #000; border-radius: 5px; font-weight: bold; text-align: center; text-decoration: none; border: 1px solid #dcdcdc; font-size: 14px;">JavaScript</a>
  <a href="https://nodejs.org" target="_blank" style="display: inline-block; margin: 5px; padding: 10px 20px; background-color: #8CC84B; color: #fff; border-radius: 5px; font-weight: bold; text-align: center; text-decoration: none; border: 1px solid #dcdcdc; font-size: 14px;">Node.js</a>
  <a href="https://www.mysql.com" target="_blank" style="display: inline-block; margin: 5px; padding: 10px 20px; background-color: #00758F; color: #fff; border-radius: 5px; font-weight: bold; text-align: center; text-decoration: none; border: 1px solid #dcdcdc; font-size: 14px;">MySQL</a>
  <a href="https://expressjs.com/" target="_blank" style="display: inline-block; margin: 5px; padding: 10px 20px; background-color: #000; color: #fff; border-radius: 5px; font-weight: bold; text-align: center; text-decoration: none; border: 1px solid #dcdcdc; font-size: 14px;">Express</a>
  <a href="https://sequelize.org/" target="_blank" style="display: inline-block; margin: 5px; padding: 10px 20px; background-color: #52b0e7; color: #fff; border-radius: 5px; font-weight: bold; text-align: center; text-decoration: none; border: 1px solid #dcdcdc; font-size: 14px;">Sequelize</a>
  <a href="https://swagger.io/docs/" target="_blank" style="display: inline-block; margin: 5px; padding: 10px 20px; background-color: #85EA2D; color: #fff; border-radius: 5px; font-weight: bold; text-align: center; text-decoration: none; border: 1px solid #dcdcdc; font-size: 14px;">Swagger</a>
  <a href="https://www.mercadopago.com.ar/developers/panel" target="_blank" style="display: inline-block; margin: 5px; padding: 10px 20px; background-color: #0093D0; color: #fff; border-radius: 5px; font-weight: bold; text-align: center; text-decoration: none; border: 1px solid #dcdcdc; font-size: 14px;">Mercado Pago</a>
</div>

</div>



---

¡Ahora estás listo para ejecutar el proyecto y explorar la API de comercio electrónico! Si tienes alguna pregunta o problema, no dudes en abrir un [issue](https://github.com/tu-repositorio/issues) en el repositorio.

