const button = document.querySelector('input')
// Array of different options

button.addEventListener('click', nextPage)


function nextPage () {
    localStorage.setItem('categories', getSelectedValue())
    location.href = 'pages/categories.html'
}

function getSelectedValue() {
    var selectedValue = document.getElementById('dropdown').value
    return selectedValue
}







// Loop through the array and append each element to a different array using input value. Return Array
// CHALLENGE: Range loop to and get random values from the array.
// Create a grid of these values using separate divs. 