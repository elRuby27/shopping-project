// ============================ #Header links after Login . =======================

let userInfo = document.querySelector('#user-info')
let userImage = document.querySelector('.user-image')
let userData = document.querySelector('#user')

let links = document.querySelector('#links')


if(localStorage.getItem('userName')){
  links.remove()
  userImage.style.display = 'block'
  userInfo.style.display = 'flex'
  userData.innerHTML = localStorage.getItem('userName')
}

//==================================== #Log-out . ============================== 

let logOutBtn = document.querySelector('#logout')

logOutBtn.addEventListener('click', function (){
  localStorage.clear()
  setTimeout(() => {
    window.location= "login.html"
  }, 500)
})
