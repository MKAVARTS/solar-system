const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
const planetEl = document.getElementById("planets")
/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

planetEl.innerHTML += '<h2> LIST OF PLANETS </h2>';

planets.forEach(function(item){
    planetEl.innerHTML += `<li> ${item} </li>`;
});

/*
    Use the map method to create a new array where the 
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

planetEl.innerHTML += '<h2> LIST OF PLANETS WITH FIRST LETTER CAPITALIZED </h2>';
var mapPlanets = planets.map(x => `<li>${x.charAt(0).toUpperCase() + x.substring(1)}</li>`);
planetEl.innerHTML += mapPlanets.join(' ');

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

planetEl.innerHTML += '<h2> LIST OF PLANETS THAT CONTAIN LETTER "E" </h2>';
mapPlanets = planets.filter(x => x.includes("e"));
mapPlanets.forEach(function(item){
    planetEl.innerHTML += `<li>${item}</li>`;
});



// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

planetEl.innerHTML += '<h2> A SENTENCE MADE FROM WORDS IN AN ARRAY </h2>';

mapPlanets = words.reduce(function(prev,curr){
    return prev + ' ' + curr;
});

planetEl.innerHTML += mapPlanets + '.';