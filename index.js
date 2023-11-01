const baseURL= "https://fakestoreapi.com/products"
const list=document.getElementById("list")
const form=document.querySelector(".form-control")
const cards=document.querySelector(".cards")
fetch(`${baseURL}`)
.then(res=>res.json())
.then(data=> {
  

let innerText = ""
for (let i = 0; i < data.length; i++) {
    innerText += `
   <div class="card" style="width: 18rem; overflow :hidden;" >
        <img src="${data[i].image}" class="card-img-top" alt="..." > 
        <div class="card-body">
         <h5 class="card-text">${data[i].title}</h5>
         <p>${data[i].price}</p>
         <p>${data[i].category}</p>
         <p>${data[i].rating.rate}</p>
        </div>
      </div>`
}
cards.innerHTML = innerText
})



form.addEventListener("keyup",()=>{
fetch(`${baseURL}`)
.then(res=>res.json())
.then(data=> {
    let searchProduct = data.filter(item=>item.title.toLowerCase().trim().includes(form.value.toLowerCase().trim()))
    let innerText = ""
for (let i = 0; i < searchProduct.length; i++) {
    innerText += `
   <div class="card" style="width: 18rem; overflow :hidden;" >
        <img src="${searchProduct[i].image}" class="card-img-top" alt="..." > 
        <div class="card-body">
         <h5 class="card-text">${searchProduct[i].title}</h5>
         <p>${searchProduct[i].price}</p>
         <p>${searchProduct[i].category}</p>
         <p>${searchProduct[i].rating.rate}</p>
        </div>
      </div>`
}
cards.innerHTML = innerText

} ) 
})




