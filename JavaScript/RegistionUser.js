
const form=document.getElementById("form")

const  uname =document.getElementById("uname")

const email=document.getElementById("email")

const password=document.getElementById("password")

const cpassword=document.getElementById("cpassword")

const tandc=document.getElementById("tc")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    validate()
    
})

function validate(){
    let nameValue= uname.value.trim()
    let emailValue= email.value.trim()
    let passwordValue= password.value.trim()
    let cpasswordValue= cpassword.value.trim()

    
    if(nameValue===""){

        setError(uname,' user name must be 3 cheracters')
    }
    else if(nameValue.length<3){
        setError(uname,' user name should be minimum 3 cheracters')

    }
    else{
        setSuccess(uname)
    }

    //email check
    if(emailValue===""){
        setError(email,' Email cannot be empty')
    }
    else if(!emailCheck(emailValue)){
        setError(email,'Enter valid email ID')

    }else{
        setSuccess(email)

    }

    if(passwordValue===""){
        setError(password,'password cannot be empty')
    }
    else if(passwordValue.length<8){

        setError(password, 'password must be 8 cheracters')
    }
    else{
        setSuccess(password)
    }

    if(cpasswordValue===""){
        setError(cpassword,'passowrd must 8 cheracters')
    }
    else if(cpasswordValue!==passwordValue){
        setError(cpassword,'password and cpassword  not matches')
    }
    else{
        setSuccess(cpassword)
    }


    if(!tandc.checked){
        setError(tc,'click on agree terms checkbox')
    }
    else{
        setSuccess(tc)
    }
    function setError(input,message){
        let  parent= input.parentElement;
        let small= parent.querySelector('small')
        small.innerText=message
        parent.classList.add('error')
        parent.classList.remove('success')
    }
    function setSuccess(input){
        let parent =input.parentElement;
        parent.classList.add('success')
        parent.classList.remove('error')
    }
    function emailCheck(input){
        let emailReg=/^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
        let valid=emailReg.test(input)
        return valid
    }
}