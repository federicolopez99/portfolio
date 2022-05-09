const cardArray = [
    {
        name: 'pikachu',
        img: 'imagenes/pikachu.png'
    },
    {
        name: 'bullbasaur',
        img: 'imagenes/bullbasaur.png'
    },
    {
        name: 'charmander',
        img: 'imagenes/charmander.png'
    },
    {
        name: 'chikorita',
        img: 'imagenes/chikorita.png'
    },
    {
        name: 'eevee',
        img: 'imagenes/eevee.png'
    },
    {
        name: 'jigglypuff',
        img: 'imagenes/jigglypuff.png'
    },
    {
        name: 'snorlax',
        img: 'imagenes/snorlax.png'
    },
    {
        name: 'squirtle',
        img: 'imagenes/squirtle.png'
    },
    {
        name: 'pikachu',
        img: 'imagenes/pikachu.png'
    },
    {
        name: 'bullbasaur',
        img: 'imagenes/bullbasaur.png'
    },
    {
        name: 'charmander',
        img: 'imagenes/charmander.png'
    },
    {
        name: 'chikorita',
        img: 'imagenes/chikorita.png'
    },
    {
        name: 'eevee',
        img: 'imagenes/eevee.png'
    },
    {
        name: 'jigglypuff',
        img: 'imagenes/jigglypuff.png'
    },
    {
        name: 'snorlax',
        img: 'imagenes/snorlax.png'
    },
    {
        name: 'squirtle',
        img: 'imagenes/squirtle.png'
    }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen  = []
let cardsChosenIds = []
const cardsWon = []


function createBoard (){
    for (let i = 0; i < cardArray.length; i++){
        const card = document.createElement('img')
        card.setAttribute('src','imagenes/pokebola.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}

createBoard()

function checkMatch (){

    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]
    console.log(cards)
    console.log('check for match')
    if (optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src','imagenes/pokebola.png')
        cards[optionTwoId].setAttribute('src','imagenes/pokebola.png')
        alert('No toques el mismo que no se que toque y dice que ganaste')
    }


    if (cardsChosen[0] == cardsChosen[1]){
        alert('Lo atrapaste!')
        cards[optionOneId].setAttribute('src','imagenes/pokemon.png')
        cards[optionTwoId].setAttribute('src','imagenes/pokemon.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        cardsWon.push(cardsChosen)
    } else {
        cards[optionOneId].setAttribute('src','imagenes/pokebola.png')
        cards[optionTwoId].setAttribute('src','imagenes/pokebola.png')
        alert('No pudiste atraparlo :(')
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

    if (cardsWon.length == cardArray.length/2){
        resultDisplay.textContent = 'Los atrapaste a todos!'
    }

}

function flipCard(){
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log('cardsChosen')
    console.log('cardsChosenIds')
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2){
        setTimeout(checkMatch, 500)
    }
}