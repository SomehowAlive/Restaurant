import foods from "./assets/food.json";
import "./styles/menu.css";

export default function menu(foodType = "starter") {
    const menuContainer = document.createElement("div");
    const menuTitle = document.createElement("p");
    const btnsContainer = document.createElement("div");
    const starterBtn = document.createElement("button");
    const dishBtn = document.createElement("button");
    const dessertBtn = document.createElement("button");
    const foodList = document.createElement("ul");

    menuContainer.classList.add("menu-container");
    menuTitle.classList.add("menu-title");
    btnsContainer.classList.add("btn-container");
    foodList.classList.add("food-list");

    starterBtn.classList.add("btn", "food-btn", "selected");
    dishBtn.classList.add("btn", "food-btn");
    dessertBtn.classList.add("btn", "food-btn");

    menuTitle.textContent = "Our Food";
    starterBtn.textContent = "Starters";
    dishBtn.textContent = "Dishes";
    dessertBtn.textContent = "Desserts";

    starterBtn.onclick = () => {
        dessertBtn.classList.remove("selected");
        dessertBtn.classList.remove("selected");
        starterBtn.classList.add("selected");
        showFood("starter");
    };

    dishBtn.onclick = () => {
        starterBtn.classList.remove("selected");
        dessertBtn.classList.remove("selected");
        dishBtn.classList.add("selected");
        showFood("dish");
    };

    dessertBtn.onclick = () => {
        starterBtn.classList.remove("selected");
        dishBtn.classList.remove("selected");
        dessertBtn.classList.add("selected");
        showFood("dessert");
    };

    btnsContainer.appendChild(starterBtn);
    btnsContainer.appendChild(dishBtn);
    btnsContainer.appendChild(dessertBtn);

    let foodToDisplay = foods.filter((food) => food.type === foodType);
    foodToDisplay.forEach((food) => foodList.appendChild(createCard(food)));

    menuContainer.appendChild(menuTitle);
    menuContainer.appendChild(btnsContainer);
    menuContainer.appendChild(foodList);

    return menuContainer;
}

function createCard(obj) {
    const card = document.createElement("li");
    const name = document.createElement("p");
    const cont = document.createElement("div");
    const ingredients = document.createElement("ul");
    const img = new Image();
    const price = document.createElement("p");

    card.classList.add("food-card");
    name.classList.add("food-name");
    cont.classList.add("row-2");
    ingredients.classList.add("food-ingredients");
    img.classList.add("food-img");
    price.classList.add("food-price");

    name.textContent = obj.name;
    for (let ingredient of obj.ingredients) {
        const ingredientElem = document.createElement("li");
        const ingredientElemText = document.createElement("p");
        ingredientElem.classList.add("food-ingredient");
        ingredientElemText.textContent = ingredient;
        ingredientElem.append(ingredientElemText);
        ingredients.appendChild(ingredientElem);
    }
    img.src = `../src/assets/${obj.pic}`;
    price.textContent = obj.price;

    card.style.backgroundColor = obj.bgColor;
    card.style.boxShadow = `0 0 30px -5px ${obj.bgColor}`;
    card.style.color = obj.txtColor;
    price.style.color = obj.txtColor;

    cont.appendChild(ingredients);
    cont.appendChild(img);

    card.appendChild(name);
    card.appendChild(cont);
    card.appendChild(price);

    return card;
}

function showMenu(foodType = "starter") {
    document.querySelector(".hero-container")?.remove();
    document.querySelector(".about-container")?.remove();
    document.querySelector(".menu-container")?.remove();
    document.querySelector("#content").appendChild(menu(foodType));
}

function showFood(foodType) {
    const foodList = document.querySelector(".food-list");
    Array.from(foodList.children).forEach((c) => c.remove());
    let foodToDisplay = foods.filter((food) => food.type === foodType);
    foodToDisplay.forEach((food) => foodList.appendChild(createCard(food)));
}

export { showMenu };
