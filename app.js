class Pokemon {
    
    constructor(name){
        this.name = name
    }
    
    fetch(){
        return fetch(`https://pokeapi.co/api/v2/pokemon/${this.name}`)
            .then(response => response.json())
            .then(pokemon => {
                console.log(pokemon)
                this.imageUrl = pokemon.sprites.front_default
                this.abilities = pokemon.abilities
    })
    }

    createCard(){
        const $cards = document.querySelector(".cards")
        const $card = document.createElement("div")
        $card.class = "pokemon-card"
        $card.innerHTML = `
            <p>${this.name}</p>
            <img src="${this.imageUrl}" alt="${this.name}" />
            <ul class="abilities"></ul>
        `
        const $abilities = $card.querySelector(".abilities")
        const abilities = this.abilities.map(ability => {
            const $li = document.createElement("li")
            $li.textContent = ability.ability.name
            return $li
        }).forEach($ability => {
            $abilities.append($ability)
        })
        
        $cards.append($card)
    }

}

const bulbasaur = new Pokemon("bulbasaur")
bulbasaur.fetch().then(() => {
    bulbasaur.createCard()
})

const charizard = new Pokemon("charizard")
charizard.fetch().then(() => {
    charizard.createCard()
})

const pikachu = new Pokemon("pikachu")
pikachu.fetch().then(() => {
    pikachu.createCard()
})