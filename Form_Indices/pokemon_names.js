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

// console.log(arrayOfNames);

// tableBoides is the HTML Collection of tbody elements, i.e. our pokemon form table
// tableBodies.length will give us the length of the collection (which should be 273)
let tableBodies = document.getElementsByTagName("tbody");

// console.log(tableBodies);

let bigArray = [];

for (i = 0; i < tableBodies.length; i++) {
  let name = rawNames[i].childNodes[0].innerHTML;
  let pokemonArray = [];
  pokemonArray.push(name);
  //we are inside all pokemon
  // console.log(`pokemon ${i}`, tableBodies[i].children);
  for (j = 0; j < tableBodies[i].children.length; j++) {
    //we are inside all rows
    // console.log(`pokemon ${i}`, tableBodies[i].children[j]);
    // this gets us just the index name column's inner text => the form names
    // console.log(`pokemon ${i}`, tableBodies[i].children[j].lastElementChild.innerText);

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

console.log(bigArray);

let pinkForm = [];
function formSorter(array, form) {
  for (i = 0; i < array.length; i++) {
    //this loop goes through the array of all pokemon
    if (array[i].length > 0) {
      // if the pokemon has a form, its array length will be greater than 0
      for (j = 0; j < array[i].length; j++) {
        //this loop goes through the array containing a particular pokemon's forms
        //need to check if the given form appears in the array, if it does, push the name => array[i][0] into a new array
        if (array[i][j] === form) {
          pinkForm.push(array[i][0]);
        }
      }
    }
  }
}

formSorter(bigArray, "Pink");

// ! console.log(pinkForm);

//!  check this out!
// const formStrings = ["Pink", "Mega", "Spaghetti", ...];
// formStrings.forEach(form => formSorter(bigArray, form));

// console.log(forms);

// for (k = 0; k < tableBodies[i].children[j].children.length; k++) {
//we are inside all cells
// console.log(`pokemon ${i}`, tableBodies[i].children[j].children[k].innerText);
// }
//

// console.log(tableBodies); // all pokemon tables
// console.log(tableBodies[0].children); // collection of table rows
// console.log(tableBodies[0].children[0].children); // collection of table headers or table dividers
// console.log(tableBodies[0].children[0].children[0].innerHTML); // the form name

//for each pokemon, add the pokemon name to the first spot in the array
//add the forms to the end of that array
//when there are no new forms to add, add the pokemon array to the big array
