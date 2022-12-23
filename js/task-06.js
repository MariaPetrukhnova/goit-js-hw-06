const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener("blur", (event) => {
    const inputValidation = event.currentTarget.value;
    console.log(inputValidation.length);
    inputValidation.length === Number(inputEl.dataset.length)
        ? inputEl.classList.add('valid')
        : inputEl.classList.add('invalid')
});

inputEl.addEventListener("focus", (event) => {
    // event.currentTarget.value = '';
    inputEl.classList.remove(...inputEl.classList);
});