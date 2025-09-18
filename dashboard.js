let email = sessionStorage.getItem("isLoggedIn") ;
let namee ;
if (email !== null) {
    namee = JSON.parse(localStorage.getItem(email)).name;




let logoutBtn = document.querySelector("#logoutBtn");
let cartBtn = document.querySelector("#cartBtn");

let nav = document.querySelector(".navbar-brand");
nav.textContent += namee;

let container = document.querySelector(".container");

function addToCart(id, name, price) {
  let obj = JSON.parse(localStorage.getItem(email));

  obj.cart = obj.cart || {};
  if (obj.cart[id]) {
    obj.cart[id].quantity += 1;
  } else {
    obj.cart[id] = {
      title: name,
      price: price,
      quantity: 1,
    };
  }
  localStorage.setItem(email, JSON.stringify(obj));
  alert(`${name} is added to cart (quantity:${obj.cart[id].quantity})`);
}

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < 10; i++) {
      let p = data.products[i];
      container.innerHTML += `

<div class="card" style="width: 18rem">
      <img src="${p.images[0]}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${p.title}</h5>
   
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Price: ${p.price}</li>
            <li class="list-group-item">Catagory: ${p.category}</li>
            <li class="list-group-item">Rating: ${p.rating}</li>
        </ul>
         <a href="#" 
     onclick="addToCart(${p.id}, '${p.title}', ${p.price})" 
     class="btn btn-primary">
    Add to cart
  </a>
      </div>
    </div>



        `;
    }
  });

cartBtn.addEventListener("click", () => {
  setTimeout(() => {
    window.location.href = `cart.html`;
  }, 1000);
});
logoutBtn.addEventListener("click", () => {
  setTimeout(() => {
    (function logout() {
      sessionStorage.clear();
      console.log("Session cleared. User logged out.");
    })();
    window.location.href = `login.html`;
  }, 1000);
});

}
else
{


  console.log("object");
let container = document.querySelector(".container");
  fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    for (let i = 0; i < 10; i++) {
      let p = data.products[i];
      container.innerHTML += `

<div class="card" style="width: 18rem">
      <img src="${p.images[0]}" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${p.title}</h5>
   
        <ul class="list-group list-group-flush">
            <li class="list-group-item">Price: ${p.price}</li>
            <li class="list-group-item">Catagory: ${p.category}</li>
            <li class="list-group-item">Rating: ${p.rating}</li>
        </ul>
         <a href="#" 
     onclick="addToCart(${p.id}, '${p.title}', ${p.price})" 
     class="btn btn-primary">
    Add to cart
  </a>
      </div>
    </div>



        `;
    }
  });



  let logoutBtn = document.querySelector("#logoutBtn");
let cartBtn = document.querySelector("#cartBtn");
logoutBtn.style.visibility ="hidden";
cartBtn.style.visibility ="hidden";

}