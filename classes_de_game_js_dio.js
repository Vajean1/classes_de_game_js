class Heroi {
  constructor(nome, idade, tipo){
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo.toLowerCase();
  }

  atacar (){
    if (this.tipo == "mago"){
      console.log(`${this.tipo} atacou usando magia`)
    }
    else if (this.tipo == "guerreiro"){
      console.log(`${this.tipo} atacou usando espada`)
    }
    else if (this.tipo == "monge"){
      console.log(`${this.tipo} atacou usando artes marciais`)
    }
    else if (this.tipo == "ninja"){
      console.log(`${this.tipo} atacou usando shuriken`)
    }
    else {
      console.log('Escolha uma opção válida!')
    }
  }
}

let heroi = new Heroi('Thiago', 23, 'mago');

heroi.atacar()
