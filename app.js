//  let arr=["toan","tieeng anh","ngu van"]
// // let obj={
// //     "name":"nguyen van dau",
// //     "sex":"khong xac dinh",
// //     "crime":"vi pham hanh chinh"
// // }

// for(let value of arr)
//   console.log(value)  
products = {
  data: [
    {
      productName: "LEVENTS® COLORFUL PAINT TEE/ GREY",
      price: "35",
      image: "https://product.hstatic.net/1000365849/product/slash_backpack_nau_1_cb0280190ff04f31b9fe581c5802b1fc_master.jpg"
    },

    {
      productName: "LEVENTS® COLORFUL PAINT TEE/ BLACK",
      price: "34",
      image: "https://product.hstatic.net/1000365849/product/slash_backpack_nau_1_cb0280190ff04f31b9fe581c5802b1fc_master.jpg"
    },

    {
      productName: "LEVENTS® TRAVEL TEE/ LIGHT BROWN",
      price: "35",
      image: "https://product.hstatic.net/1000365849/product/new_mini_backpack_hong_1_51a580ce4a7a483b883e95e592d921c5_master.jpg"
    },

    {
      productName: "LEVENTS® TRAVEL TEE/ BLACK",
      price: "22",
      image: "https://product.hstatic.net/1000365849/product/slash_backpack_nau_1_cb0280190ff04f31b9fe581c5802b1fc_master.jpg"
    },

    {
      productName: "LEVENTS® TRAVEL TEE/ CREAM WHITE",
      price: "38",
      image: "https://product.hstatic.net/1000365849/product/slash_backpack_nau_1_cb0280190ff04f31b9fe581c5802b1fc_master.jpg"
    },

    {
      productName: "LEVENTS® DIAMOND 2E LOGO TEE/ BLACK",
      price: "42",
      image: "https://product.hstatic.net/1000365849/product/slash_backpack_nau_1_cb0280190ff04f31b9fe581c5802b1fc_master.jpg"
    },

    {
      productName: "LEVENTS® FUNNY CROCODILE TEE/ BLUE",
      price: "37",
      image: "https://product.hstatic.net/1000365849/product/slash_backpack_nau_1_cb0280190ff04f31b9fe581c5802b1fc_master.jpg"
    },

    {
      productName: "LEVENTS® EARTH TEE/ PURPLE",
      price: "36",
      image: "https://product.hstatic.net/1000365849/product/slash_backpack_nau_1_cb0280190ff04f31b9fe581c5802b1fc_master.jpg"
    },

    {
      productName: "LEVENTS® PLAY LOGO TEE/ PINK",
      price: "29",
      image: "https://product.hstatic.net/1000365849/product/slash_backpack_nau_1_cb0280190ff04f31b9fe581c5802b1fc_master.jpg"
    },
  ]
}
for (let i of products.data) {
  let card = document.createElement("div")
  card.classList.add("card")

  let imgcontainer = document.createElement("div")
  imgcontainer.classList.add("image-container")

  let image = document.createElement("img")
  image.setAttribute("src", i.image)
  imgcontainer.appendChild(image)
  card.appendChild(imgcontainer)

  let container = document.createElement("div")
  container.classList.add("container")
  let name = document.createElement("h5")
  name.classList.add("productName")
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name)
  let price = document.createElement("h6")
  price.innerText = "$" + i.price
  container.appendChild(price)
  container.appendChild(price)
  card.appendChild(container)
  document.getElementById("huy").appendChild(card);




}
document.getElementById("search-bth").addEventListener("click",() => {
  let searchInput = document.getElementById("search-text").value.toUpperCase()
  let card = document.querySelectorAll(".card")
  let productName = document.querySelectorAll(".productName")
  let prices = document.querySelectorAll('h6')

  productName.forEach((items,index)=>{
    if(items.innerText.includes(searchInput)){
      card[index].classList.remove("hide")
    }else {
      card[index].classList.add("hide")
    }
  })

})


