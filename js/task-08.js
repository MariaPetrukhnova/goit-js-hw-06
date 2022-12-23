const formEl = document.querySelector('.login-form')

formEl.addEventListener("submit", onFormSubmit)

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;

    const userMail = formElements.email.value;
    const userPassword = formElements.password.value;
    const formData = {
        userMail,
        userPassword,
    };

    userMail === '' || userPassword === ''
    ? alert("All fields are required")
    : console.log(formData);
    
    event.currentTarget.reset();
}


