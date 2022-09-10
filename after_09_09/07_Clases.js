// mediante la palabra reservada class podemos crear clases

class Counter {
  constructor(name) {
    this.name = name;
    this.counter = 0;
  }
  static globalCounter = 0;

  contar() {
    this.counter += 1;
    Counter.globalCounter += 1;
  }

  static getGlobalCounter() {
    return Counter.globalCounter;
  }

  getLocalCounter() {
    return this.counter;
  }
  getName() {
    return this.name;
  }
}

const alan = new Counter("Alan");

const maria = new Counter("Maria");

alan.contar();
alan.contar();
maria.contar();

console.log({ global: Counter.getGlobalCounter() });

console.log({ name: alan.getName(), counter: alan.getLocalCounter() });

console.log({ name: maria.getName(), counter: maria.getLocalCounter() });
