const categories = parseInt(localStorage.getItem('categories'))
const choices = ['Chocolate', 'Vanilla', 'Strawberry', 'Mint', 'Butterscotch', 'Mango']
const container = document.querySelector(".container")
const randomChoices = shuffle(choices)


function shuffle(array) {
    array.sort(() => Math.random()-0.5)
    return array
}

for (i=0; i < categories; i++) {
    const flavourChoices = document.createElement('div')
    flavourChoices.setAttribute('id', 'flavour')
    let choice = randomChoices[i]
    flavourChoices.append(choice)
    container.appendChild(flavourChoices)
}








