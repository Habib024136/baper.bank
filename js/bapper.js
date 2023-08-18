// step1: 1: add click even
document.getElementById('btn-submit').addEventListener('click',function(){
    // step get the email address
    // alaways remeber to use .value to get  text fron an input field
    const emailField=document.getElementById('email-field')
    const email=emailField.value 
    console.log(email)
    // 2nd input
    const passwordField=document.getElementById('password-field')
    const password=passwordField.value 
    console.log(email,password)
    // step 4
    if(email==='mdh024136@gmail.com' && password ==='secret'){
        window.location.href='bank.html';
    }else{
        alert('to k ami tajjo sonatan korlm')
    }
})