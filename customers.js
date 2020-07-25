var customerForm = document.getElementById("customerForm");
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var phoneNumber = document.getElementById("phoneNumber");
var city = document.getElementById("city");
var zip = document.getElementById("zip");
var favefunction = document.getElementById("favefunction");
var submitButton = document.getElementById("submitButton");
var buttonSpinner = document.getElementById("buttonSpinner");
var buttonText = document.getElementById("buttonText");
var unknownError = document.getElementById("unknownError");


function afterSubmit(e){

    e.preventDefault();

    if (customerForm.checkValidity() === false) {
        e.stopPropagation();
        for(let field of customerForm.elements) {
            if(!field.checkValidity()){
                field.classList.add("is-invalid");
            }
        }
        return;
    }

    for(let field of customerForm.elements) {
            field.classList.remove("is-invalid");
    }

    var info = {
        first: firstName.value,
        last: lastName.value,
        phone: phoneNumber.value,
        city: city.value,
        zip: zip.value,
        favefunction: favefunction.value,
    };

    var url = "https://script.google.com/macros/s/AKfycbx3P3daXkxLDJBw6i-S5p3gCuJWyHghIoZmVy0ocCqWfXNdu5FA/exec";


    buttonText.textContent = "Saving..";
    buttonSpinner.classList.remove("d-none");
    submitButton.disabled = true;

    fetch(url,{
        method: 'POST',
        cache: 'no-cache',
        redirect: 'follow',
        body: JSON.stringify(info)
      })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        customerForm.reset();
        buttonText.textContent = "Send";
        buttonSpinner.classList.add("d-none");
        submitButton.disabled = false;
      })
      .catch(err => {
        console.log(err);
        console.log("Something Went Wrong");
        unknownError.classList.remove("d-none");
        setTimeout(function(){
            unknownError.classList.add("d-none");
            customerForm.reset();
            buttonText.textContent = "Send";
            buttonSpinner.classList.add("d-none");
            submitButton.disabled = false;
        },3000);
      });

}

customerForm.addEventListener("submit",afterSubmit);
