// usando type module en package json
import { Container } from "./containers/Container.js";

// sin module
// const Container = require('./containers/Container.js')

const ProductContainer = new Container("productos");
const CartContainer = new Container("carrito");

// ProductContainer.getAll()
//   .then((data) => console.log({ data }))
//   .catch((error) => console.log({ error }));

// ProductContainer.save({
//   title: "Producto 1",
//   price: 300,
//   thumbnail: "httppasjdaskjl",
// })
//   .then((data) => console.log({ data }))
//   .catch((error) => console.log({ error }));

// ProductContainer.getById(100)
//   .then((data) => console.log({ data }))
//   .catch((errorcito) => console.log({ errorcito }));

// ProductContainer.deleteById(13).then((data) => console.log({ data }));
// ProductContainer.deleteAll();

// const products = [
//   {
//     title: "Producto 1",
//     price: 300,
//     thumbnail: "httppasjdaskjl",
//   },
//   {
//     title: "Producto 2",
//     price: 500,
//     thumbnail: "httppasjdaskjl",
//   },
//   {
//     title: "Producto 3",
//     price: 700,
//     thumbnail: "httppasjdaskjl",
//   },
// ];

// const testMethods = async () => {
//   try {
//     const productID1 = await ProductContainer.save(products[0]);
//     const productID2 = await ProductContainer.save(products[1]);
//     const productID3 = await ProductContainer.save(products[2]);

//     const product = await ProductContainer.getById(1);
//     console.log({ product });
//   } catch (error) {
//     console.log({ error });
//   }
// };

// testMethods();

// CartContainer.getAll().then((data) => console.log({ data }));

// CartContainer.save({ name: "Lautaro", products: [] });

// ProductContainer.update({
//   id: 2,
//   newData: { title: "Producto 2 MODD", price: 1000 },
// });

const updateCart = async ({ idCarrito, idProduct }) => {
  try {
    const cart = await CartContainer.getById(idCarrito);
    if (!cart) return "Cart Not Found";

    const product = await ProductContainer.getById(idProduct);

    if (!product) return "Product not found";

    cart.products.push(product);
    // console.log({ cart });
    await CartContainer.update({
      id: idCarrito,
      newData: { products: cart.products },
    });
  } catch (error) {
    console.log(error);
  }
};

// updateCart({idCarrito: 1, idProduct: 3});
