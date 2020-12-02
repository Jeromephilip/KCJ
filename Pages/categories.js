// Array of initial choices
const choices = ['chocolate', 'vanilla', 'strawberry', 'mint', 'butterscotch', 'mango'];

const additionalFlavours = {
    'chocolate': ['chocolate mint', 'chocolate crunch', 'chocolate fudge'],
    'mango': ['mango cream', 'mango punch', 'mango vanilla'],
    'strawberry': ['strawberry shortcake', 'strawberry cherry', 'strawberry vanilla'],
    'mint': ['mint chocolate', 'fresh mint', 'vanilla mint'],
    'butterscotch': ['butterscotch vanilla', 'butterscotch blast', 'butterscotch banana'],
    'vanilla': ['vanilla lemon', 'vanilla honey', 'vanilla peach']
}


// Select the 6 classes
// if button is clicked, add value into container.
// function: input the value of the class, output a random flavour from the value in additionalFlavours

// Pick the container
const container = document.querySelector('.container');
container.addEventListener('click', pickFlavour)

// Shuffles the choices arrays for random picks. 
const randomChoices = shuffle(choices);

// Gets value from query using Regex. 
let categories = document.location.search.replace(/^.*?\=/, '')

// Back button initialization
const backButton = document.querySelector('.back-btn')

backButton.addEventListener('click', backPage)


function pickFlavour(event) {
    if (event.target !== event.currentTarget) {
        var clickedItem = event.target.value;
        var randomFlavourArray = additionalFlavours[clickedItem]
        var randomFlavourIndex = Math.floor(Math.random() * randomFlavourArray.length)
        var outRandomFlavour = randomFlavourArray[randomFlavourIndex]
        const randomFlavourButton = document.createElement('button')
        let randomFlavourChoice = outRandomFlavour
        randomFlavourButton.setAttribute('id', 'added-flavours')
        randomFlavourButton.value = randomFlavourChoice
        randomFlavourButton.append(randomFlavourChoice)
        container.appendChild(randomFlavourButton)
    }
    event.stopProagation();
}

// Redirect back to index.html
function backPage() {
    location.href = '../index.html'
}

// shuffle the array
function shuffle(array) {
    array.sort(() => Math.random()-0.5)
    return array
}



// Creates six buttons representing flavours. 
for (i=0; i < categories; i++) {
    const flavourChoices = document.createElement('button')
    let choice = randomChoices[i];
    flavourChoices.setAttribute('id', choice)
    flavourChoices.value = choice
    flavourChoices.append(choice.charAt(0).toUpperCase() + choice.slice(1))
    container.appendChild(flavourChoices)
}





