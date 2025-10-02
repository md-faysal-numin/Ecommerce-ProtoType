let email = sessionStorage.getItem("isLoggedIn") ;

if(email !==null){
    
    let  namee = JSON.parse(localStorage.getItem(email)).name;

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
    
    
    
    logoutBtn.addEventListener("click",()=>{
            setTimeout(()=>{
                (function logout() {
          sessionStorage.clear();
          console.log("Session cleared. User logged out.");
        })();
            window.location.href = `login.html`;
        },1000)
    })
}
else{
      let logoutBtn = document.querySelector("#logoutBtn");
      logoutBtn.style.visibility ="hidden";
    //   let logoutBtn = document.querySelector("#logoutBtn");
    //   logoutBtn.style.visibility ="hidden";


}

dashBtn.addEventListener("click",()=>{
         setTimeout(()=>{
            window.location.href = `dashboard.html`;
        },1000)
    })