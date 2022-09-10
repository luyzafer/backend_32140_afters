// Tenemos varias formas de definir funciones

// con function
// definicion
function showName(name) {
  console.log({ name });
}
// invocación
showName("Alan");

// arrow function
// tienen un return implicito
// let
const showNameArrow = (name = "Pedro") => console.log({ name });

// invocación
showName("Juan");

// funcion anonima (tanto con function como arrow)
const showNameAnon = function () {
  console.log("Soy anonima");
};

showNameAnon();

// paso de parametros (tanto arrow como function)

const calc = (operation, n1, n2) => {
  if (operation === "add") {
    console.log({ operation, result: n1 + n2 });
  }
  if (operation === "subtract") {
    console.log({ operation, result: n1 - n2 });
  }
  if (operation === "multiply") {
    console.log({ operation, result: n1 * n2 });
  }
};

calc("multiply", 5, 10);

// usando objetos para evitar seguir un orden de parametros

function advancedCalc({ operation, n1, n2 }) {
  switch (operation) {
    case "add": {
      console.log({ operation, result: n1 + n2 });
      return n1 + n2;
    }
    case "substract": {
      return n1 - n2;
    }
    case "multiply": {
      return n1 * n2;
    }
    default: {
      null;
    }
  }
}

// invocar  con objeto
const data = { operation: "add", n1: 2, n2: 5 };
advancedCalc(data);

// invocar definiendo el objeto dentro del argumento
advancedCalc({ operation: "add", n1: 3, n2: 9 });

const cuenta = { n1: 5, operation: "add", n2: 10 };
advancedCalc(cuenta);

// desestructuracion de objeto
const { operation, n1, n2 } = cuenta;

console.log({ operation, n1, n2 });
