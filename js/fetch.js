const itemContainer = document.querySelector(".itemContainer")
// const id = '85'

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const  id = params.get("id");

const url = 'https://serinetj.com/wp-json/wc/store/products/' + id


const fetchProduct = async () => {
  const res = await fetch(url)
  const json = await res.json()
  console.log(json)


  itemContainer.innerHTML = `      <div class="womensale"> 
                                    <p class="category">${json.categories[0].name}</p>                    
                                    <img class="img" src="${json.images[0].src}" alt="${json.alt}">
                                    <div class="small-item">
                                        <p class="info">${json.name}</p>
                                        <p class="info">PRICE: £${json.prices.price}</p>
                                        <p class="regprice">Original PRICE: £${json.prices.regular_price}</p>
                                        <p class="info">COLOR:</p>
                                        <div class="yellowball"></div>
                                        <input
                                            type="radio"
                                            name="color"
                                            class="color"
                                            value="yellow"
                                            id="yellow"
                                        />
                                        <label for="yellow">yellow</label>
                                        <div class="blueball"></div>
                                        <input
                                            type="radio"
                                            name="color"
                                            class="color"
                                            value="blue"
                                            id="blue"
                                        />
                                        <label for="blue">blue</label>
                                        <p class="info">SIZE:</p>
                                        <input type="radio" name="size" class="size" value="xs" id="xs" />
                                        <label for="xs">XS</label>
                                        <input type="radio" name="size" class="size" value="s" id="s" />
                                        <label for="s">S</label>
                                        <input type="radio" name="size" class="size" value="m" id="m" />
                                        <label for="m">M</label>
                                        <input type="radio" name="size" class="size" value="l" id="l" />
                                        <label for="l">L</label>
                                        <input type="radio" name="size" class="size" value="xl" id="xl" />
                                        <label for="xl">XL</label>
                                        <p class="description">${json.short_description}</p>
                                    </div>
                                    <div class="right-item">
                                        <button id="addToFav" class="addbutton">
                                            favorite <i class="fas fa-heart heart"></i>
                                        </button>

                                        <button id="addToCart" class="addbutton">
                                            <i class="fas fa-shopping-cart cart"></i>add to cart
                                        </button>
                                    </div>
                                </div>`;
}




fetchProduct()