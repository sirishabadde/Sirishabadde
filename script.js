let fnameEl = document.getElementById("fname")
let lnameEl = document.getElementById("lname")
let contactEl = document.getElementById("contact")
let emailEl = document.getElementById("email")
let AddressEl = document.getElementById("Address")

let myFormEl = document.getElementById("myForm")

let formData = {
    firstname:'',
    lastname:'',
    contact:'',
    email:'',
    employement:'',
    address:''
}



fnameEl.addEventListener("change",function(event){
    formData.firstname = event.target.value

})

lnameEl.addEventListener("change",function(event){
    formData.lastname = event.target.value
})

contactEl.addEventListener("change",function(event){
    formData.contact = event.target.value
})

emailEl.addEventListener("change",function(event){
    formData.email = event.target.value
})

AddressEl.addEventListener("change",function(event){
    formData.address = event.target.value
})

function onSubmit(formData){
    console.log(formData)
    let x = JSON.stringify(formData)
    localStorage.setItem("Data",x)
}

myFormEl.addEventListener("submit",function(event){
    event.preventDefault()
    onSubmit(formData)
})