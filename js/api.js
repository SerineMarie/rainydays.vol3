const url = "https://serinetj.com/wp-json/wc/store/products";
const productsContainer = document.querySelector (".productsContainer");

async function getProducts (){
    try{
        const response = await fetch (url);
        const json = await response.json();
        console.log(json)
        createHTML(json);

    } catch (error){
        console.log(error);
    }
}

getProducts();


function createHTML(product){
    product.forEach(function(product){
        productsContainer.innerHTML += `
                                
                                <div class="products">                       
                                    <a href="productdetail.html?id=${product.id}">
                                        <div class="ball">   
                                            <p class="category">${product.categories[0].name}</p> 
                                        </div>
            
                                        <img class="img" src="${product.images[0].src}" alt="${product.alt}">
                                        <p class="name-price"> ${product.name}</p>
                                        <p class="name-price">£${product.prices.price}</p>
                                    </a>
                                    <div class="line"></div>
                                </div>`;
    })
}

