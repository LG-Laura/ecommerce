# Proyecto de Comercio Electrónico

Este proyecto es una aplicación de comercio electrónico desarrollada utilizando **Node.js**, **MySQL**, **HTML**, **CSS**, **JavaScript**, y **LocalStorage** para simular funcionalidades de backend. La página no solo muestra una lista de productos, sino que también sugiere productos basados en el comportamiento de navegación del usuario. En el futuro, se integrará un backend completo y se añadirán más funcionalidades. 

La documentación de la API, cuando se implemente el backend, se manejará con **Swagger**. A continuación, se presentan las instrucciones para configurar y ejecutar el proyecto.

## 🚀 Funcionalidades Principales

- Registro e inicio de sesión de usuarios utilizando **LocalStorage**.
- Visualización de productos disponibles con la opción de agregar productos al carrito.
- Sugerencias de productos basadas en la navegación del usuario.
- Carrito de compras dinámico con actualización en tiempo real de la cantidad de productos.
- Persistencia de los datos de usuarios y carrito utilizando **LocalStorage**.
- **Futuro**: Integración con un backend utilizando **Node.js**, **MySQL**, y **Sequelize**.

## 🎨 Galería de Imágenes

El diseño de la interfaz está maquetado con **HTML** y **CSS**. A continuación, puedes ver una galería de las imágenes del diseño:

![Diseño 1](./IMG/imgAirbag.jpg)
![Diseño 2](./design/design2.png)
![Diseño 3](./design/design3.png)

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

