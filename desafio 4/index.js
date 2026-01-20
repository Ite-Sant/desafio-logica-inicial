class Person {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    if (this.tipo === "mago") {
      ataque = "magia";
    }
    if (this.tipo === "guerreiro") {
      ataque = "espada";
    }
    if (this.tipo === "monge") {
      ataque = "artes marciais";
    }
    if (this.tipo === "ninja") {
      ataque = "shuriken";
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

let Hero = new Person("Ite", 25, "mago");

Hero.atacar();
