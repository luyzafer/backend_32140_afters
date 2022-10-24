import { Router } from "express";
import { ProductDao } from "../Dao/index.js";

const ViewsRouter = Router();

ViewsRouter.get("/", (req, res) => {
  res.render("form-products");
});

ViewsRouter.post("/productos", async (req, res) => {
  const { title, price, thumbnail } = req.body;

  await ProductDao.save({ title, price, thumbnail });

  res.redirect("/");
});

ViewsRouter.get("/productos", async (req, res) => {
  const products = await ProductDao.getAll();
  res.render("table-products", { productos: products });
});

export { ViewsRouter };
