/**
 * completionist / milestones
 *
 */

let NationalDex = { I: "001-151", II: "152-251", III: "252-386", IV: "387-493", V: "494-649", VI: "650-721", VII: "722-809", VIII: "810-905" };
let legendariesByGeneration = [
  ["Articuno", "Zapdos", "Moltres", "Mewtwo", "Mew"],
  ["Raikou", "Entei", "Suicune", "Lugia", "Ho-Oh", "Celebi"],
  ["Regirock", "Regice", "Registeel", "Latias", "Latios", "Kyogre", "Groudon", "Rayquaza", "Jirachi", "Deoxys"],
  ["Uxie", "Mesprit", "Azelf", "Dialga", "Palkia", "Heatran", "Regigigas", "Giratina", "Cresselia", "Phione", "Manaphy", "Darkrai", "Shaymin", "Arceus"],
  [],
  [],
  [],
  [],
];
let allEeveloutions; // all evolved forms of eevee
let allStartersByGeneration; // all first forms of all starters
let fullStarters; // 1 of every form of starters
let gymLeadersByGen; // own pokemon that match gym leaders- geodude + onyx for brock
let eliteFourByGen; // same as gym leaders, but with elite 4 trainers
let allEvolutionsByStone; // own all pokemon who evolve via evolution stone
let allEvolutionsByTrade; // own all pokemon who evolve via trade
let shinyPokemonByAmount; // own X shinies: 1, 5, 10
let firstAmountByType; // own X pokemon of a certain type (dual type do count): 10, 20, 30
