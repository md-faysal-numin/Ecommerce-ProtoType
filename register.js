let btn = document.querySelector("#form");

function isEmailExists(email) {
  let user = localStorage.getItem(email.toString());

  return user !== null;
}

function validateName(name) {
  const regex = /^(?![0-9]+$)[a-zA-Z0-9 ]{2,}$/;

  return regex.test(name.split(" ").join(""));
}

function validateEmail(email) {
  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regex.test(email);
}

function validatePassword(password) {
  const regex =
    /^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^0-9A-Za-z]).{6,32}$/;
  return regex.test(password);
}

// console.log(validateEmail("hasdhjashldlka#"));

btn.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let password = document.querySelector("#password").value;
  let cpassword = document.querySelector("#cpassword").value;

  document.getElementById("name-error").textContent = "";
  document.getElementById("email-error").textContent = "";
  document.getElementById("password-error").textContent = "";

  let isValid = true;

  if (!validateName(name)) {
    document.getElementById("name-error").textContent =
      "Name can only contain letters and numbers(e.g., Md Faysal 45)";
    isValid = false;
  }

  if (isEmailExists(email)) {
    document.getElementById("email-error").textContent =
      "Email address already exists";
    isValid = false;
  }
  // Validate Email
  if (!validateEmail(email)) {
    document.getElementById("email-error").textContent =
      "Enter a valid email address.";
    isValid = false;
  }

  // Validate Password
  if (!validatePassword(password)) {
    document.getElementById("password-error").textContent =
      "Password must be 6+ chars, include uppercase, lowercase, number, special char.";
    isValid = false;
  }
  // if(password!==cpassword){
  //   document.getElementById("cpassword-error").textContent ="Password doesn't match"
  //   isValid=false;
  // }

  if (isValid) {
    alert("Registration successfull!");

    const obj = {
      name: name,
      email: email,
      password: password,
      // "cart":{

      // }
    };

    localStorage.setItem(email.toString(), JSON.stringify(obj));

    setTimeout(() => {
      window.location.href = `login.html?email=${email}`;
    }, 1000);
  }
});
