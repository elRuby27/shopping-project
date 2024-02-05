let userName= document.querySelector('#user-name')
let email= document.querySelector('#email')
let password= document.querySelector('#password')
let signUpBtn= document.querySelector('#sign-up') 


signUpBtn.addEventListener('click', function(s) {
  s.preventDefault();

  if(userName.value === "" || email.value === "" || password.value === ""){
    alert("Please fill data")
  }else{
    localStorage.setItem("userName" , userName.value)
    localStorage.setItem("email" , email.value)
    localStorage.setItem("password" , password.value)

    setTimeout(() =>{
      window.location = "login.html";
    },500)
  }
})

