const counterDisplay = document.querySelector("h3");
let counter = 0;


const bubbleMaker = () => {
//Création d'une bulle en créant un span

const bubble = document.createElement("span");

//je crée la class avec css et jS.
bubble.classList.add("bubble");

document.body.appendChild(bubble);

//On crée un random pour la taille des bulles
const size = Math.random()* 200 + 100 + "px";

// on donne le style à la bulle en lui donnant une taille.
bubble.style.height = size;
bubble.style.width = size;

// on donne le positionement à la bulle

bubble.style.top = Math.random() * 100 + 50 + "%";
bubble.style.left = Math.random() * 100 + "%";

//on fait un ternaire 
const plusMinus = Math.random() > 0.5 ? 1 : -1;

bubble.style.setProperty("--left", Math.random() * 100 * plusMinus + "%");

bubble.addEventListener('click', ()=>{
    counter ++;
    counterDisplay.textContent = counter;
    bubble.remove();
})

setTimeout(()=>{
    bubble.remove();
}, 8000);
};


// on crée la répétition des bulles 
setInterval(bubbleMaker, 1000);
