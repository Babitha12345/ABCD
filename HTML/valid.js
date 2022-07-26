var email=document.forms['form']['email'];
var password=document.forms['form']['password'];
email.addEventListener('text_input',email_verify);
password.addEventListener('text_input',password_verify);


function validated(){

  if(email.value.lenght<9){
    email.style.border="1px solid red";
    email.focus();
    return false;

  }
  if(password.value.lenght<9){
    password.style.border="1px solid red";
    password.focus();
    return false;
    
  }
}
function email_verify(){
  if(email.value.lenght>=8){
    email.style.border="1px solid silver";
    
    return true;

  }
}
function password_verify(){
  if(password.value.lenght>=5){
    password.style.border="1px solid silver";
    
    return true;

  }
}
