const nameCt = document.querySelector('#name');
const skillsCt = document.querySelector('#skills');
const addInput = document.querySelector('#add');
const skillsFallback = 'ganz schön viel'

let storedName = localStorage.getItem('stored_name');
console.log(storedName);

if (storedName && storedName !== null) {

    nameCt.innerText = storedName;
}
else { 

    let user_name = prompt ('Wie heißt du?');
    console.log(user_name);

    nameCt.innerText = user_name;
    localStorage.setItem('stored_name', user_name);

    }

let sklills = {

}
for (let i = 0; i < localStorage.length; i++) 
{
    let key = localStorage.key(i);
    if (key.includes('skill_')) {
        let skill = localStorage.getItem(key);
        sklills[key] = skill;
    }
}
