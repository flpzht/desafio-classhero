# 🧙‍♂️Desafio Classes de um Jogo (DIO)

<img src="https://github.com/flpzht/desafio-classhero/blob/main/mage-attack.png" alt="Mage Attack" width="500" height="200"/>

[![Status do Projeto](https://img.shields.io/badge/Status-Concluído-brightgreen)](https://www.dio.me/)
[![Linguagem Principal](https://img.shields.io/badge/Linguagem-JavaScript-yellow)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Framework/Tecnologia](https://img.shields.io/badge/Paradigma-POO-blue)](https://pt.wikipedia.org/wiki/Programa%C3%A7%C3%A3o_orientada_a_objetos)
[![Contribuidores](https://img.shields.io/badge/Autor-Felipe-red)](https://github.com/flpzht)

## 🎯 Objetivo do Desafio
O objetivo deste desafio de programação da Digital Innovation One [DIO](https://web.dio.me/home) é praticar os conceitos de Classes e Objetos em JavaScript.

A tarefa principal era criar uma classe genérica para representar um herói, definindo suas propriedades (nome, idade e tipo) e um método de ataque que exiba uma mensagem de acordo com o tipo do herói.

## 🚀 Solução
O desafio foi resolvido através da criação de uma classe chamada hero com um construtor para inicializar as propriedades e um método attack para exibir a ação do herói.

## 💻 Código-Fonte Principal
O código-fonte da classe e do exemplo de uso está abaixo:

JavaScript

    class hero
    {
        constructor(name, idade, type)
        {
            this.name = name
            this.idade = idade
            this.type = type
        }
        // Método para exibir a mensagem de ataque
        attack(attackType){
        // Note: attackType é um parâmetro que simula o tipo de ataque da arma/magia
        console.log(`The hero ${this.name}, shows up! \nThe ${this.type} attacked using a ${attackType}!`)
        }
    }
    // Exemplo de Uso:
    // 1. Cria uma nova instância da classe hero
    let hero1 = new hero("Aragorn", 87, "warrior")

    // 2. Chama o método attack
    hero1.attack("sword") 
    

## 💡Funcionamento
A classe hero utiliza:

constructor(name, idade, type): Define as propriedades que todo herói terá.

attack(attackType): Um método de instância que recebe o tipo de ataque específico (sword, magic, etc.) e exibe no console uma mensagem formatada que inclui o nome e o tipo do herói.

Saída Esperada no Console
Ao executar o código com o herói de exemplo:

The hero Aragorn, shows up! 
The warrior attacked using a sword!
🛠️ Tecnologias Utilizadas
JavaScript (ES6+) - Para implementação da lógica orientada a objetos (Classes).

## 🧑‍💻 Autor
[flpzht](https://github.com/flpzht)

🔗 Próximos Passos (Sugestões para Melhoria)

[ ] Refatorar o método attack para mapear automaticamente o attackType (ex: se type for "mago", o attackType padrão é "magia").

[ ] Adicionar uma propriedade de "nível" e um método que calcule esse nível baseado na idade ou experiência.

[ ] Implementar herança, criando classes específicas (Wizard, Warrior, etc.) que herdam da classe hero.