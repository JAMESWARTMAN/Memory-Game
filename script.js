document.addEventListener('DOMContentLoaded', () => {


    // card options

    const cardArray = [{
            name: 'mountains',
            img: 'img/img2.jpg'
        },
        {
            name: 'oceans',
            img: 'img/img3.jpg'
        },
        {
            name: 'wave',
            img: 'img/img4.jpg'
        },
        {
            name: 'sunset',
            img: 'img/img5.jpg'
        },
        {
            name: 'beach',
            img: 'img/img6.jpg'
        },
        {
            name: 'underwater',
            img: 'img/img7.jpg'
        },
        {
            name: 'mountains',
            img: 'img/img2.jpg'
        },
        {
            name: 'oceans',
            img: 'img/img3.jpg'
        },
        {
            name: 'wave',
            img: 'img/img4.jpg'
        },
        {
            name: 'sunset',
            img: 'img/img5.jpg'
        },
        {
            name: 'beach',
            img: 'img/img6.jpg'
        },
        {
            name: 'underwater',
            img: 'img/img7.jpg'
        }


    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    //create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'img/img1.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'img/img1.jpg')
            cards[optionTwoId].setAttribute('src', 'img/img1.jpg')
            alert('You have clicked the same image!')
        } else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'img/img1.jpg')
            cards[optionTwoId].setAttribute('src', 'img/img1.jpg')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'img/img1.jpg')
            cards[optionTwoId].setAttribute('src', 'img/img1.jpg')
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }

    //flip your card
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()















})