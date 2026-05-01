# Inventory API - Diseño inicial

## Objetivo
API REST para gestionar el inventario de una tienda de ropa.

## Entidades

### Product
- id
- name
- description
- price
- stock
- size
- color
- categoryId
- createdAt
- updatedAt

### Category
- id
- name

### User
- id
- email
- passwordHash
- role

## Endpoints V1

### Health
GET /health

### Products
GET /products
GET /products/:id
POST /products
PUT /products/:id
DELETE /products/:id

### Categories
GET /categories
POST /categories

### Auth
POST /auth/register
POST /auth/login

## Reglas
- El nombre del producto es obligatorio.
- El precio debe ser mayor a 0.
- El stock no puede ser negativo.
- La categoría debe tener nombre.
- Admin puede crear, editar y borrar productos.
- User puede ver productos.

## Orden de desarrollo
1. Health endpoint
2. Products en memoria
3. Categories en memoria
4. Products con base de datos
5. Categories con base de datos
6. Auth
7. Roles
8. Documentación final