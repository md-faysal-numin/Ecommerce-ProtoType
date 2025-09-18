const params = new URLSearchParams(window.location.search);
const namee = params.get("name");
const email = params.get("email");
let nav = document.querySelector(".navbar-brand");
nav.textContent+=namee;

let logoutBtn = document.querySelector("#logoutBtn");
let cartBtn = document.querySelector("#cartBtn");

let cartList = document.querySelector(".cartList");

const obj  = JSON.parse(localStorage.getItem(email));
console.log(obj.cart);

Object.entries(obj.cart).forEach( ([k,v]) =>{
    let li = document.createElement('li');
    li.classList.add("list-group-item");

    li.textContent = `${v.title} - $${v.price} x ${v.quantity}`;
    cartList.appendChild(li);

})


dashBtn.addEventListener("click",()=>{
     setTimeout(()=>{
        window.location.href = `dashboard.html?email=${email}&name=${JSON.parse(localStorage.getItem(email)).name}`;
    },1000)
})
logoutBtn.addEventListener("click",()=>{
        setTimeout(()=>{
        window.location.href = `login.html`;
    },1000)
})