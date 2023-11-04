import { getRecipeCard } from "./getRecipeCard.js";

const cardId = localStorage.getItem("id");

const SINGLERECIPEURL = `https://recipeapi.prakashsakari.repl.co/api/recipes/${cardId}`;

const getData = async(URL) => {
    try {
        const { data } = await axios.get(URL);
        return data;
    } catch (err) {
        console.log(err);
    }
};

const singleRecipe = await getData(SINGLERECIPEURL);
console.log(singleRecipe);

const card = document.getElementById("single-card-container");
const createElement = (element) => document.createElement(element);
getRecipeCard(singleRecipe, card, createElement);

const ingredients = document.getElementById("ingredients");
const instructions = document.getElementById("instructions");

// Ingredient List
let ingredientsArray = singleRecipe[0].TranslatedIngredients.split(",");
let listIngredient = "";
console.log(ingredientsArray);
for (let i = 0; i < ingredientsArray.length; i++) {
    let item = ingredientsArray[i];
    listIngredient += `<li> ${item} </li>`;
}
ingredients.innerHTML = `<h2>Ingredients</h2><ul class="list">${listIngredient}</ul>`;
//Instruction List
let instructionsArray = singleRecipe[0].TranslatedInstructions;
console.log(instructionsArray);
instructions.innerHTML = `<h2>Instructions</h2><p>${instructionsArray}</p>`;
// let listInstruction = "";
// for (let j = 0; j < singleRecipe.steps.length; j++) {
//     let step = singleRecipe.steps[j];
//     listInstruction += `<li> ${step} </li>`;
// }
// instructions.innerHTML = `<ul class="list">${listInstruction}</ul>`;