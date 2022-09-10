// El scope se refiere al alcance que tienen las variables

// let y const tienen alcance de "bloque", solo estaran disponibles a partir de donde se definen, pero no en un nivel más alto

const myName = "Alan";

const showName = () => {
  console.log({ myName });

  const newName = "Juan";
  console.log({ newName });
};

showName();

// no podemos acceder a newName
// console.log({ newName });
