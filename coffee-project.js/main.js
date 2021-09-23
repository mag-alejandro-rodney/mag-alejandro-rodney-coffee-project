"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee d-block col-4 mx-auto p-auto">';
    html += '<span class="d-none">' + coffee.id + '</span>';
    html += '<h4>' + coffee.name + '</h4>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    var html = '';
    for (var i = coffees.length - 1; i >= 0; i--) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

// Roast selector
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var filteredCoffees = [];
    console.log(selectedRoast);
    if (selectedRoast === "all") {
        tbody.innerHTML = renderCoffees(coffees);

    } else {
        coffees.forEach(function (coffee) {
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            }
        });
        tbody.innerHTML = renderCoffees(filteredCoffees);
    }
}

// Typing coffee names and getting results from array
function coffeeSearch() {
    var searchArr = [];
    var coffeeSelect = document.getElementById('input-coffee-name');
    console.log(coffeeSelect.value);
    var inputCoffee = coffeeSelect.value;

    coffees.forEach(function (coffee) {
        if (coffee.name.toLowerCase().includes(inputCoffee.toLowerCase())) {
            searchArr.push(coffee);
            console.log(searchArr);
        }
    });
    tbody.innerHTML = renderCoffees(searchArr);
}

// Adding a new coffee with roast and coffee name after typed and submitted

function addNewCoffee(coffee){
    var selection = roastSelection2.value;
    var filteredCoffees = [];

        coffees.forEach(function (coffee) {
            if (coffee.roast === selectedRoast) {
                // filteredCoffees.push(coffee);
                var coffeeSelect = document.getElementById('input-coffee-name');
                console.log(coffeeSelect.value);
            }
        });
        coffees.push(newCoffee);

    tbody.innerHTML = renderCoffees(coffees);

}


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var roastSelection = document.querySelector('#roast-selection');
// var coffeeSelect = document.querySelector('#input-coffee-name');
var userCoffeeInput = document.querySelector('#input-coffee-name');
var roastSelection2 = document.querySelector('#add-selection')

userCoffeeInput.addEventListener('input', coffeeSearch);
// coffeeSelect.addEventListener('input', coffeeSearch);

tbody.innerHTML = renderCoffees(coffees);

submitButton.addEventListener('click', updateCoffees);