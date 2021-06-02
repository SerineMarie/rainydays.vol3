const counter = document.querySelector("#counter")
const addToCart = document.querySelector("#addToCart")

counter.innerHTML = "";

let count = 0;

function counting(){
    count++;
    if(count >= 1){
        counter.innerHTML = "1"
        addToCart.innerHTML = "added to cart"
        addToCart.style.color = "#ad422c"
        addToCart.style.background = "#0a3641"
    } else{
        addToCart.innerHTML = "add to cart"
    }

    counter.innerHTML
}

addToCart.onclick = counting;


const addTofave = document.querySelector("#addToFav")

function addedToFav() {
    addTofave.innerHTML = "added to favorite"
    addTofave.style.color = "#ad422c"
    addTofave.style.background = "#0a3641"
    
}

addTofave.onclick = addedToFav;