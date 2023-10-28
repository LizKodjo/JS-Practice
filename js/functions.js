/////////////////////////////////////////////////////
//Stage 1: Variables, and button reference/listener//
/////////////////////////////////////////////////////

// Reference the inputs and the button.
const addButton = document.getElementById("addRecipeButton");
const recipeName = document.getElementById("cocktailName");
const ingredient1 = document.getElementById("mainAlcohol");
const ingredient2 = document.getElementById("secondaryAlcohol");
const ingredient3 = document.getElementById("mixers");
const form = document.getElementById("form");

// prevent default
form.addEventListener('click', (e) => {
    e.preventDefault();
});

//Add a click event listener to the button
addButton.addEventListener("click", addRecipe);

let recipes = [];

/////////////////////////////////////////////////////
//Stage 2: The function for adding a new recipe.//////
/////////////////////////////////////////////////////

function addRecipe() {
   
    ////////////////////////////////////////////////////////
    //Make a "recipe" object here.
    //The "recipe" object, has a name, and an  ingredients array only.
    //The name, should come from the cocktailName input.
    //The ingredients array, will be whatever is in the ingredient 1, 2, and 3 inputs.
    //Then push this recipe to the recipes array.
    ////////////////////////////////////////////////////////    

    //Write your code below

    // Recipe object

    const recipe = {
        // name
        name: recipeName.value,
        // array
        ingredients: [ingredient1.value, ingredient2.value, ingredient3.value]
    };
    console.log(recipe);


    recipes.push(recipe);
    console.log(recipes);

    console.log("Recipe name: " + recipeName.value);
    console.log("Main Alcohol: " + ingredient1.value);
    console.log("Secondary Alcohol: " + ingredient2.value);
    console.log("Mixers: " + ingredient3.value);

    form.reset();
}