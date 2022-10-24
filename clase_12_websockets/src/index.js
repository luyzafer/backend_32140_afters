import express from "express";
import { productRouter } from "./routers/ProductRouter.js";
import { ViewsRouter } from "./routers/ViewsRouter.js";
import handlebars from "express-handlebars";
import path from "path";
import { Server as HttpServer } from "http";
import { Server as IOServer } from "socket.io";
import { MessagesDao, ProductDao } from "./Dao/index.js";
import { DATE_UTILS } from "./utils/index.js";

const PORT = 8080;

const app = express();

const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    defaultLayout: "main.hbs",
  })
);

app.set("view engine", "hbs");
app.set("views", path.join(process.cwd(), `/views`));

// Como el desafio nuevo se basa en sockets para la representación y envio de datos, podemos directamente dejar de lado las plantillas del lado del servidor
// Aunque bien podriamos en nuestro main.hbs, poner el script de socket io y trabajar de esa forma

// app.use("/", ViewsRouter);
// app.use("/api/productos", productRouter);

io.on("connection", async (socket) => {
  console.log(`Nuevo cliente conectado ${socket.id}`);

  socket.emit("mensajes", await MessagesDao.getAll());

  socket.on("mensajeNuevo", async ({ email, text }) => {
    const message = { email, text, timestamp: DATE_UTILS.getTimestamp() };
    await MessagesDao.save(message);

    io.sockets.emit("mensajes", await MessagesDao.getAll());
  });

  socket.emit("products", await ProductDao.getAll());

  socket.on("add-product", async (data) => {
    const products = await ProductDao.save(data);

    io.sockets.emit("products", await ProductDao.getAll());
  });
});

const server = httpServer.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});
server.on("error", (error) => {
  console.error(`Error en el servidor ${error}`);
});
