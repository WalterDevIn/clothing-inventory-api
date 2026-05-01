# clothing-inventory-api
REST API for managing inventory (products, categories, stock) built with Node.js

## Tecnologías
- Node.js
- Express
- PostgreSQL
- Prisma
- JWT
- bcrypt

## Funcionalidades
- Registro y login de usuarios
- CRUD de productos
- CRUD de categorías
- Control de stock
- Roles: admin / user

## Endpoints principales
### Auth
POST /auth/register
POST /auth/login

### Products
GET /products
POST /products
GET /products/:id
PUT /products/:id
DELETE /products/:id

### Categories
GET /categories
POST /categories
PUT /categories/:id
DELETE /categories/:id

## Cómo correr el proyecto
npm install
npm run dev