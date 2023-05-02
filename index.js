const progress = document.querySelector("#progress");
const progressBlock = new CircularProgress(progress);
const valueInput = document.querySelector("#value-input");
const hideCheckbox = document.querySelector("#hide-checkbox");

valueInput.addEventListener("input", (evt) => {
    progressBlock.setProgress(Number.parseInt(evt.target.value));
})

hideCheckbox.addEventListener("click", (e) => {
    e.target.checked ? progressBlock.hideProgress() : progressBlock.showProgress();
})
