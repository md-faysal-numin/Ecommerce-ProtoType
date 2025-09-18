let form = document.querySelector('#form')



function validEmail(email){
    let gEmail = localStorage.getItem(email);

    return gEmail !==null;
}

function validPassword(email,password){

    let val = JSON.parse(localStorage.getItem(email));
    let gPassword = val.password 
    // console.log(gPassword);
    return gPassword == password;
}



form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let email  = document.querySelector("#email").value ;
    let password  = document.querySelector("#password").value ;

    // console.log(email,password);
    if(!validEmail(email)){
        alert("The email is incorrect")
        return;
    }
    if(!validPassword(email,password)){
        alert("The password is incorrect")
        return;
    }
    
    sessionStorage.setItem("isLoggedIn",email);


    setTimeout(()=>{
        window.location.href = `dashboard.html`;
    },1000)


})
