<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Client Gateway

## Dev

1. Clonar el repositorio
2. Instalar las dependencias
3. Crear archivo `.env` basado en el `.env.template`
4. Levantar servidor de NATS `docker run -d --name nats-server -p 4222:4222 -p 8222:8222 nats`
5. Tener levantados los microservicios antes de consumir la data
6. Ejecutar `yarn start:dev` o `npm run start:dev`

## Stack usado

1. NestJS
2. Microservicios

## Builder

1. swc

## Nats

```
docker run -d --name nats-server -p 4222:4222 -p 8222:8222 nats
```

## Prod

```
docker build -f dockerfile.prod -t client-gateway .
```