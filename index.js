//Insira abaixo o seu tipo de herói. Escolha entre guerreiro, mago, monge ou troll:
let heroi = "monge"

//Classe de herói e método "atacar":
class personagem{
    constructor(tipoHeroi, tipoArma){
        this.tipoHeroi = tipoHeroi
        this.tipoArma = tipoArma
       }
    atacar(){
        console.log(`O ${this.tipoHeroi } atacou usando ${this.tipoArma}.`)

    }
}

let guerreiro = new personagem ("guerreiro", "uma espada de aço")
let mago = new personagem ("mago", "magia élfica")
let monge = new personagem ("monge", "golpes letais")
let troll = new personagem ("troll", "lançamento de pedras")

if(heroi === "guerreiro"){
guerreiro.atacar()
}
else if(heroi === "mago"){
mago.atacar()
}
else if(heroi === "monge"){
monge.atacar()
}
else{
troll.atacar()
}