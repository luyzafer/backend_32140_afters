import { useCallback, useState } from "react";
import axios from "axios";

// Esto es solo un ejemplo rápido, ya   que todo deberia estructurarse distinto.
// Tendremos más after conectando a react!
function App() {
  const [products, setProducts] = useState([]);

  const getAllProducts = useCallback(async () => {
    const response = await axios.get("http://localhost:8080/api/products");
    if (response.data.length) {
      setProducts(response.data);
    }
  }, []);

  const createProduct = useCallback(async () => {
    const product = {
      title: "TV LED 65",
      description: "Tv led ",
      code: "MCC22",
      thumbnail: "urlsssssss",
      price: 6000,
      stock: 15,
    };

    await axios.post("http://localhost:8080/api/products", product);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {products.map((product) => (
          <div key={product.id}>
            <p>{product.title}</p>
          </div>
        ))}
        <button onClick={getAllProducts}>Obtener productos</button>
        <button onClick={createProduct}>Crear producto</button>
      </header>
    </div>
  );
}

export default App;
