const deleteItemCart = document.querySelectorAll("#delete")

for (let i = 0; i < deleteItemCart.length; i++){
    const deletebutton = deleteItemCart[i]
    deletebutton.addEventListener("click", function(event){
        const deletebuttonClicked = event.target
        deletebuttonClicked.parentElement.remove();
        cartTotal();
    })
}

function cartTotal(){
    const cartItems = document.querySelector(".productsContainer")[0]
    const cartItem = document.querySelectorAll(".products")
    for(let i = 0; i < cartItem.length; i++){
        const totalCartItem = cartItem[i]
    }

}