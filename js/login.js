let userName= document.querySelector('#user-name')
let password= document.querySelector('#password')
let logInBtn= document.querySelector('#sign-in') 


let getUserName = localStorage.getItem('userName')
let getPassword = localStorage.getItem('password')

logInBtn.addEventListener('click', function (s){
  s.preventDefault();
  
  if(userName.value === '' || password.value==='' ){
    alert("Please fill data")
  }else{
    if(getUserName && getUserName.trim()=== userName.value.trim() && getPassword && getPassword.trim()=== password.value.trim()){
      setTimeout(() =>{
        window.location = "index.html";
      },1500)
    }else{
      alert("user name or password incorrect")
    }
  }

})
