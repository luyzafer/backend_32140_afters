// Clousure es un concepto que usamos en js para llamar a las funciones que pueden devolver otras heredando el contexto de la función padre
// No es tan común su uso, o al menos en mi exp no

// podemos crear un ejemplo de una caja registradora (raro que lo hagamos asi pero sirve para ver el funcionamiento)

const soldRegister = (employee) => {
  const employeeName = employee;
  let totalSold = 0;

  return ({ client, price }) => {
    totalSold += price;
    return { client, price, employee: employeeName, totalSold };
  };
};

const registerA = soldRegister("Victor"); // employeeName = "victor"

const registerB = soldRegister("Patricio"); // employeeName = "PAtricio"

console.log(registerA({ client: "Juan", price: 200 })); // totalSold = 200
console.log(registerA({ client: "Fede", price: 400 })); // totalSold = 600

console.log(registerB({ client: "pepe", price: 500 })); // totalSold = 500

// de esta forma cada caja registradora tiene su propio total en la caja, más el nombre del empleado sin necesidad de pasarlo en cada operacion, reitero que este caso seria raro manejarlo con clousure, es solo para demostrar como funcionan

// otro, un comparador de claves, que almacena en un objeto los ingresados

const hashGen = () => {
  const hashKeys = {};

  return {
    hash: (key) => {
      // "Alan"  => ["A", "l", "a", "n"]

      const reversedKey = key.split("").reverse().join("");
      // agrego algo, vamos a primero verificar si ya existe, porque si ya existe en nuestras hashKeys, deberiamos devolver alguna respuesta
      if (hashKeys[reversedKey]) {
        console.log("La clave ya existe");
        return;
      }
      hashKeys[reversedKey] = key;
    },
    compare: (key) => {
      console.log(hashKeys);
      const reversedKey = key.split("").reverse().join("");
      // hashkey["nomil"] === "limon"
      if (hashKeys[reversedKey] === key) {
        console.log("Clave correcta! 🙃");
        return;
      }
      console.log("Clave incorrecta 🤨");
    },
  };
};

const keyGenerator = hashGen();
const keyGeneratorA = hashGen();

keyGenerator.hash("limon");
keyGenerator.hash("limon");

keyGenerator.compare("limon");
