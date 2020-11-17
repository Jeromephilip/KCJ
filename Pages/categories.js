const categories = parseInt(localStorage.getItem('categories'))
const choices = ['Chocolate', 'Vanilla', 'Strawberry', 'Mint', 'Butterscotch', 'Mango']
const container = document.querySelector(".container")

for (i=0; i < categories; i++) {
    const flavourChoices = document.createElement('div')
    flavourChoices.setAttribute('id', 'flavour')
    flavourChoices.className = ''
    let choice = choices[i]
    flavourChoices.append(choice)
    container.appendChild(flavourChoices)
}

// for (i=categories-1; i >= 0; i--) {
//     const flavourChoices = document.createElement('div')
//     let index = Math.floor(Math.random() * choices.length)
//     let choice = choices[index]

//     flavourChoices.append(choice)
//     document.body.appendChild(flavourChoices)
// }






