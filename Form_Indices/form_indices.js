// this script needed the defer tag so that the body could load all the elements before manipulating them

// [[name, form 1, form 2], [name, form 1, form 2, form 3], ...]

// wikiTable is the table element with the class wikiTable
// this lists each form for a particular pokemon

// wikiTable is the list of ALL pokemon
let wikiTable = document.getElementsByClassName("wikitable");
// console.log(wikiTable);

// wikiTable[POKEMON] is a specific pokemon's table
//? let pokemon = wikiTable[POKEMON]

// gets the table body element (must use 1)
//? let tbody = wikiTable[POKEMON].childNodes[1];
//! wikiTable[iterator].childNodes[0] is a text node

// gets the table row elements, need to iterate to get them all
//? let trows = wikiTable[POKEMON].childNodes[1].childNodes[ROWS];

// gets the index names
//? let indexNames = wikiTable[POKEMON].childNodes[1].childNodes[ROWS].childNodes[5];
//! use .childNodes[5] to get just the entries in the Index Name column

// gives the number of rows in the table
//? wikiTable[POKEMON].childNodes[1].rows.length
//! the text nodes add the extra length

// gets the entries in the Index Name column - these are the form names!
//? let formNames = wikiTable[POKEMON].childNodes[1].childNodes[ROWS].childNodes[5].innerHTML;

//! this was for testing drilling down into the DOM
// this is how we get to each pokemon's Table Row dynamically

let pokemonNumber = 0;
console.log(wikiTable[pokemonNumber]); // table tag
console.log(wikiTable[pokemonNumber].childNodes[1]); // table body tag
console.log(wikiTable[pokemonNumber].childNodes[1].childNodes[1]); // first row tag (rows are odd numbers)  iterate over this
console.log(wikiTable[pokemonNumber].childNodes[1].childNodes[1].childNodes[5]); // column of interest
console.log(wikiTable[pokemonNumber].childNodes[1].childNodes[1].childNodes[5]?.innerHTML); // text in the column of interest

console.log("break here");

let formsForThisPokemon = [];
for (i = 0; i <= 2 * wikiTable[pokemonNumber].childNodes[1].rows.length - 2; i++) {
  if (i === 1) {
    console.log(wikiTable[pokemonNumber].childNodes[1]);
  }

  // console.log(wikiTable[pokemonNumber].childNodes[1].childNodes[i].childNodes[5].innerHTML);
  let formName = wikiTable[pokemonNumber].childNodes[1].childNodes[1].childNodes[5].innerHTML;

  if (formName !== "Index Name" && formName !== "-" && formName !== "Mega") {
    // only add form names for forms we can actually catch
    formsForThisPokemon.push(formName);
    // show the array with the newly added name
  }

  // if (i % 2 === 0) {
  //   // console.log(wikiTable[pokemonNumber].childNodes[1].childNodes[i].childNodes[5].innerHTML);
  //   let formName = wikiTable[pokemonNumber].childNodes[1].childNodes[1].childNodes[5].innerHTML;

  //   if (formName !== "Index Name" && formName !== "-" && formName !== "Mega") {
  //     // only add form names for forms we can actually catch
  //     formsForThisPokemon.push(formName);
  //     // show the array with the newly added name
  //   }
  // }
}
console.log(formsForThisPokemon);

/**
 * from table, go into tbody
 * from body, loop through the tr starting at the second [1] since the first one is the column names
 * get the text from the last td
 *
 *
 */
// for (i = 0; i < wikiTable.length; i++) {
//   console.log(wikiTable[i].childNodes[1].rows.length); // logs the number of rows for each pokemon table
// }

/****************************************************************************************************** */
//! go thru all pokemon
// for (i = 0; i < wikiTable.length; i++) {
//   // this i loop will go through all pokemon tables

//   //! change iterator in wikiTable[iterator] to i for all pokemon, or a number for a specific pokemon
//   let pokemon = wikiTable[0].childNodes[1];

//   // this is where we will store the forms for a specific pokemon

//   for (j = 0; j < pokemon.rows.length; j++) {
//     // this j loop will go thru each row in a pokemon's table
//     // formName grabs the text value from the last column
//     console.log(pokemon.childNodes[j]);
//     formName = pokemon.childNodes[j].childNodes[5].innerHTML;

//     if (i % 2 === 1) {
//       // in this IF block, we are going through each tablerow element and adding the form name to the array

//       // add the form names to the forms array
//       // with the DOM traversal method chosen, we are grabbing all the "Index Name" entries
//       // but we want to exclude "Index Name" and "-" and "Mega"
//       if (formName !== "Index Name" && formName !== "-" && formName !== "Mega") {
//         // only add form names for forms we can actually catch
//         formsForThisPokemon.push(formName);
//         // show the array with the newly added name
//         console.log(formsForThisPokemon);
//       }
//     }
//   }
// }
/************************************************************************************* */

// let pokemon = wikiTable[0].childNodes[1];
// for (i = 0; i <= pokemon.childNodes.length + 3; i++) {
//   // the odd nodes are the table rows
//   // the even nodes are the text nodes, which we want to ignore
//   if (i % 2 === 1) {
//     // in this IF block, we are going through each tablerow element and adding the form name to the array
//     let formName = pokemon.childNodes[1].childNodes[i].childNodes[5].innerHTML;
//     // show the form names
//     // console.log(formName);

//     // add the form names to the forms array
//     // with the DOM traversal method chosen, we are grabbing all the "Index Name" entries
//     // but we want to exclude "Index Name" and "-" and "Mega"
//     if (formName !== "Index Name" && formName !== "-" && formName !== "Mega") {
//       // only add form names for forms we can actually catch
//       formsForThisPokemon.push(formName);
//       // show the array with the newly added name
//       console.log(formsForThisPokemon);
//     }
//   }
// }

/**
 *
 * .innerHTML will get the text in an element (but not really)
 * .firstChild.nodeValue
 * .childNodes[i].nodeValue
 *
 * .parentNode will get the parent node (go up a level)
 *
 * .firstChild will get the first child node (get the first node from 1 level down)
 * .childNodes[i] will get the specified child node (get any of the nodes from 1 level down)
 * .lastChild will get the last child node (get the last node from 1 level down)
 *
 * .nextSibling will get the next sibling node (get the next node on the same level)
 * .previousSibling will get the previous sibling node (get the previous node on the same level)
 */
