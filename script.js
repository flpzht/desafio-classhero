class hero{
    constructor(name, idade, type){
        this.name = name
        this.idade = idade
        this.type = type
    }
    attack(attackType){
        console.log(`The hero ${this.name}, shows up! \nThe ${this.type} attacked using a ${attackType}!`)
    }
}

// Create a new hero instance and call the attack method
let hero1 = new hero("Aragorn", 87, "warrior")
hero1.attack("sword")