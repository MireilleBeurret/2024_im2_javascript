// -> constants
const lebenserwartung_m = 81.0; // in jahren
const lebenserwartung_w = 85.1; // in jahren
const schokolade_pro_jahr = 11; // in kg


const container = document.querySelector("#container");
container.querySelector("p").remove();

let name = prompt("Wie heißt du?");
let age = prompt("Wie alt bist du?");
let sex = prompt("Was ist dein Geschlecht? (m/w/d)?");
let life_expectancy;

if (sex == "m") {
    life_expectancy = lebenserwartung_m - age;
}

else if (sex == "w") {
    life_expectancy = lebenserwartung_w - age;
} 
else {
    life_expectancy = (lebenserwartung_m + lebenserwartung_w) / 2 - age;
}


let unordered_list = document.createElement("ul");
container.appendChild(unordered_list);

//show name
let name_list_element = document.createElement("li");
name_list_element.innerText = `Name: ${name}`;
unordered_list.appendChild(name_list_element);

//show age
let age_list_element = document.createElement("li");
age_list_element.innerText = `Alter: ${age}`;
unordered_list.appendChild(age_list_element);

//show life_expectancy
let expectancy_list_element = document.createElement("li");
expectancy_list_element.innerText = `Du hast noch ${Math.round(life_expectancy)} Jahre zu leben.`;
unordered_list.appendChild(expectancy_list_element);



