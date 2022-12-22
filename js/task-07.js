const inputControlEl = document.querySelector("#font-size-control");
const textMessage = document.querySelector("#text");

inputControlEl.addEventListener("input", (event) => {
    textMessage.style.fontSize = `${event.currentTarget.value}px`
});