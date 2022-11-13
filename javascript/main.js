

let condition=true
const showPassword=document.querySelector('#showPassword')
const passwordInput=document.querySelector('#password')
const showPasswordFunc=()=>{
    if(condition){
        showPassword.classList.remove('fa-eye') 
        showPassword.classList.add('fa-eye-slash')
        showPassword.classList.add('shake')
        passwordInput.type = 'text';

    }
    else{
        showPassword.classList.remove('shake')
        showPassword.classList.remove('fa-eye-slash')
        showPassword.classList.add('fa-eye') 
        passwordInput.type = 'password';
    }
    condition=!condition
    

}
showPassword.addEventListener("click",showPasswordFunc)



