// Crear a los nodos con una estructura base (Sus apuntadores).
class Nodo {
  constructor(v) {
    this.v = v;
    this.ind1 = null;
    this.ind2 = null;
    this.ind3 = null;
  }
}

// Definir a todos los nodos y sus valores
const head = new Nodo(20);
const nodo23 = new Nodo(23);
const nodo19 = new Nodo(19);
const nodo57 = new Nodo(57);
const nodo67 = new Nodo(67);
const nodo99 = new Nodo(99);

// Definimos hacia donde van los apuntadores
head.ind1 = nodo23;
head.ind2 = nodo19;

// Nodo 23
nodo23.ind2 = nodo57;

// Nodo 19
nodo19.ind3 = nodo67;

// Nodo 67
nodo67.ind2 = nodo99;

// Usando Template Literals (comillas invertidas)
alert(`El nodo 99 es: ${head.ind2.ind3.ind2.v}. Es decir head.ind2.ind3.ind2.v`);

alert(`El nodo 57 es: ${head.ind1.ind2.v}. Es decir head.ind1.ind2.v`);