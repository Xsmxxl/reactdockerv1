# reactdockerv1
Dockerización de una aplicación de react js

* Instalar Docker Desktop
* Instalar Visualstudio Code

Hacer pull a la imagen de NodeJs en Docker

```
docker pull node:18.5.0-alpine3.15
```

Instalar la app dentro del contenedor

```
docker compose run --rm app create-react-app prueba --use-npm
```

