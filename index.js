const progress = document.querySelector("#progress");
const progressBlock = new CircularProgress(progress);
const valueInput = document.querySelector("#value-input");

valueInput.addEventListener("input", (evt) => {
    progressBlock.value = Number.parseInt(evt.target.value);
})


