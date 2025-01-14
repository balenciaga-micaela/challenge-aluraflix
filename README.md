# **React Video App**

Esta aplicación permite visualizar videos y gestionar su edición y eliminación. Los usuarios pueden eliminar un video desde un botón, editar videos a través de un formulario que se encuentra dentro de un modal y agregar un nuevo video a través de un formulario que se encuentra en una ruta. La app consulta `db.json` en el puerto 5000.

## **Características**
- Visualización de videos almacenados en `db.json`.
- Edición de videos mediante un formulario.
- Eliminación de videos utilizando un botón específico.
- Agregar videos a través de un formulario, éste se encuentra en la ruta /Nuevo
- Interfaz intuitiva y fácil de usar.

## **Requisitos previos**
- [Node.js](https://nodejs.org/)
- [JSON Server](https://github.com/typicode/json-server)

## **Instalación**

1. Clona este repositorio:  

   git clone <https://github.com/balenciaga-micaela/challenge-aluraflix>
   cd < challenge-aluraflix >

Instala las dependencias:

- npm install

Inicia el servidor JSON en el puerto 5000:

- json-server --watch db.json --port 5000

Inicia la aplicación React:

- npm start

Rutas
/ : Vista inicial donde se muestran los videos.
/Nuevo : Ruta para crear un nuevo video (si está implementada).
