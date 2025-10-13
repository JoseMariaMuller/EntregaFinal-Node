# Entrega Node.js - API Fakestore

Este proyecto es una pre-entrega para una práctica de Node.js. Permite interactuar con la [FakeStore API](https://fakestoreapi.com) desde la línea de comandos utilizando los métodos HTTP `GET`, `POST` y `DELETE`.

## 🚀 Funcionalidades

- Obtener todos los productos: `GET products`
- Obtener un producto por ID: `GET products/<id>`
- Crear un producto: `POST products <titulo> <precio> <categoria>`
- Eliminar un producto: `DELETE products/<id>`

## 🧾 Requisitos

- Node.js 18+ (el proyecto usa módulos ES, por eso en el `package.json` figura `"type": "module"`)

## ▶️ Cómo usar

1. Inicializa e instala dependencias (si tuvieras alguna en el futuro):
   ```bash
   npm init -y
   npm install
## Ejecutá el programa con los comandos correspondientes:

Obtener todos los productos:
```bash
node index.js GET products
```
Obtener un producto por ID:
node index.js GET products/5

Crear un producto:
node index.js POST products "Camisa nueva" 29.99 "clothing"

Eliminar un producto:
node index.js DELETE products/5
