class ContainerMemory {
  constructor() {
    this.elements = [];
  }

  getAll() {
    return this.elements;
  }

  save(element) {
    element.id =
      this.elements.length === 0
        ? 1
        : this.elements[this.elements.length - 1].id + 1;

    this.elements.push(element);

    return element;
  }

  getById(id) {
    return this.elements.find((element) => element.id === id);
  }
  // {price: 299, nombre: "producto modifci"}
  updateById(id, newData) {
    const elementIndex = this.elements.findIndex((element) => element.id == id);

    if (elementIndex === -1) return null;

    const foundElement = this.elements[elementIndex];

    // esta forma de "actualizar" un objeto, es util cuando previamente sepamos que la data contra la que comparamos (newData) tiene exactamente las mismas (o algunas) propiedades (y el tipo) que el original.
    // this.elements[elementIndex] = {
    //   ...this.elements[elementIndex],
    //   ...newData,
    // };

    // otra forma para actualizar dinamicamnete un objeto, recorremos todas las propiedades que llegan en newData usando un for in, y por cada key de newData, con el metodo hasOwnProperty de object, analizamos si foundElement tiene esa key que viene de newData, si la tiene, le asignamos el valor de newData
    // Ejemplo, si foundElement es un objeto { title: "producto", price: 1000 } y new data {title: "Producto Modificado", pepe: "no deberia guardar"},
    // recorremos newData, y si title existe en el foundelement, reemplazamos su valor, pero pepe no va a existir, por lo tanto pasa de largo el if.
    for (const key in newData) {
      if (foundElement.hasOwnProperty(key)) {
        foundElement[key] = newData[key];
      }
    }

    return this.elements[elementIndex];
  }

  deleteById(id) {
    this.elements.filter((element) => element.id != id);
    return { success: true };
  }
}

export { ContainerMemory };
