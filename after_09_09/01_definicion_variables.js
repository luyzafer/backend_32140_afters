// Utilizamos const para definir una variable al a cual no puede cambiarle en tiempo de ejecución, su valor

const myName = "Alan";

// esto no puede hacerse ya que la declaramos con const
myName = "Maria";

// Ahora, si el tipo de dato con la que definimos a la variable con const, es objeto, podemos cambiar propiedades dentro de esa estructura, pero no reasignarla

const nameList = ["Alan", "Maria", "Juan"];

// esto si se puede hacer, incorporamos un nuevo elemento al array
nameList.push("Jeremias");

// Lo mismo con los objetos

const game = {
  title: "Age of Empire",
  platform: "PC",
};

// podemos asignarle una nueva propiedad
game.price = 300;

// Cuando queremos tener una variable que pueda ser reasignada, usamos let
let user = "Alan";

// esto si se puede hacer
user = "Miguel";

// Y como estamos en JS y no es fuertemente tipado, podriamos cambiarle el tipo de dato
user = { name: "Miguel", age: 25 };

// Si bien podemos hacer esto, no es lo más correcto puesto a que debemos verificar que dato es antes de hacer alguna operacióm, pero entender que en JS si podemos.
// Más adelante veremos algo de Typescript, que incorpora definición de tipos para que al desarrollar código, se nos limité a definir variables de un tipo y no poder cambiarlo.
