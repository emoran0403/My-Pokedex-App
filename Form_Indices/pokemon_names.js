/**
 * ? there should be 273 pokemon with special forms
 *
 * Sample html where we can find the pokemon name:
 * !there were some spans that did not match the example above.  i went to the html and deleted them
 *
 * <span class="mw-headline" id="Abomasnow"><a href="/wiki/Abomasnow" title="Abomasnow">Abomasnow</a></span>
 * use document.getElementsByTagName("span") to select all spans
 *
 * each span holds an anchor tag as a child node
 * document.getElementsByTagName("span")[0] to select the anchor element nodes
 *
 * each anchor tag has a test node as a child
 * use document.getElementsByTagName("span")[0].childNodes[0] to select the text node contained within the anchor tag
 *
 * each text node's value can be read with .innerHTML
 * use document.getElementsByTagName("span")[0].childNodes[0].innerHTML to get the text from the text nodes
 *
 * use document.getElementsByTagName("span").length to get the length of the HTML Collection
 *
 * with the length, we can loop through the collection, and add each name to an array via array.push(name)
 *
 * with .lastElementChild, we can get the last child element, which is where our Index Name column exists
 */
let rawNames = document.getElementsByTagName("span");

let arrayOfNames = [];
for (i = 0; i < rawNames.length; i++) {
  let name = rawNames[i].childNodes[0].innerHTML;
  arrayOfNames.push(name);
}

// tableBoides is the HTML Collection of tbody elements, i.e. our pokemon form table
// tableBodies.length will give us the length of the collection (which should be 273)
let tableBodies = document.getElementsByTagName("tbody");

// this will collect arrays where [0] is the pokemon name, and [1-x] will be their forms if any
let bigArray = [];

// This pulls the pokemon's form from the html and puts them into an array
for (i = 0; i < tableBodies.length; i++) {
  let name = rawNames[i].childNodes[0].innerHTML;
  let pokemonArray = [];
  pokemonArray.push(name);
  //we are inside all pokemon
  for (j = 0; j < tableBodies[i].children.length; j++) {
    //we are inside all rows
    // this gets us just the index name column's inner text => the form names

    let formName = tableBodies[i].children[j].lastElementChild.innerText;

    if (
      formName !== "Index Name" &&
      formName !== "-" &&
      formName !== "Mega" &&
      formName !== "Index Number" &&
      formName !== "0" &&
      formName !== "1" &&
      formName !== "2" &&
      formName !== "3"
    ) {
      // only add form names for forms we can actually catch
      pokemonArray.push(formName);
      // show the array with the newly added name
    }
  }
  bigArray.push(pokemonArray);
}

// create arrays for each special form to hold the pokemon who appear in the given form
let AlterForm = [];
let AshenForm = [];
let CreatorForm = [];
let DrownedForm = [];
let PinkForm = [];
let RainbowForm = [];
let SpiritForm = [];
let SummerForm = [];
let StrikeForm = [];
let ValencianForm = [];
let ValentineForm = [];
let ZombieForm = [];

// collect the forms arrays into a larger array
let formsArray = [
  AlterForm,
  AshenForm,
  CreatorForm,
  DrownedForm,
  PinkForm,
  RainbowForm,
  SpiritForm,
  SummerForm,
  StrikeForm,
  ValencianForm,
  ValentineForm,
  ZombieForm,
];

// lists the forms
const formStrings = [
  "Alter",
  "Ashen",
  "Creator",
  "Drowned",
  "Pink",
  "Rainbow",
  "Spirit",
  "Summer",
  "Strike",
  "Valencian",
  "Valentine",
  "Zombie",
];

// pushes a pokemon name into the given form array if they take that form
function formSorter(array, form) {
  for (i = 0; i < array.length; i++) {
    //this loop goes through the array of all pokemon
    if (array[i].length > 0) {
      // if the pokemon has a form, its array length will be greater than 0
      for (j = 0; j < array[i].length; j++) {
        //this loop goes through the array containing a particular pokemon's forms
        //need to check if the given form appears in the array, if it does, push the name => array[i][0] into a new array
        if (array[i][j] === form) {
          formsArray[k].push(array[i][0]);
        }
      }
    }
  }
}

// looks at the array of pokemon, and puts the name into the form array if that pokemon can be of that form
for (k = 0; k < formStrings.length; k++) {
  formSorter(bigArray, formStrings[k]);
}

// console.log(formsArray);
let allPokemonList = [];
async function getAllPokemon() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=898&offset=0");
  const data = await res.json();
  for (l = 0; l < data.results.length; l++) {
    allPokemonList.push(data.results[l].name);
  }
  console.log(allPokemonList);
}
getAllPokemon();
