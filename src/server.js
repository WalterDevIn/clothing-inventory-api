import express from 'express';

const app = express();

const PORT = 3000;

app.get("/", (request, response) => {
    response.json({
        welcome: "Bienvenido al inventario de ropa"
    });
})

app.get("/health", (request, response) => {
    response.json({ status: "ok" });
});

app.listen(PORT, () => {

    console.log(`server is running on port ${PORT}.`);

})