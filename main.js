// Variables
const startBtn = document.getElementById("start-btn");
const pickUpBtn = document.getElementById("pick-up-btn");
const inputForm = document.getElementById("input-form");
const successModal = document.getElementById("success-modal");
const nextBtn = document.getElementById("next-btn");
const resetBtn = document.getElementById("reset-btn");

// Event listeners
startBtn.addEventListener("click", start);
inputForm.addEventListener("submit", handleForm);
nextBtn.addEventListener("click", start);
resetBtn.addEventListener("click", reset);

// Functions
function start(e) {
    startBtn.style.display = "none";
    inputForm.style.display = "block";
    pickUpBtn.style.display = "block";
    successModal.style.display = "none";
} 

function handleForm(e) {
    e.preventDefault();
    pickUpBtn.style.display = "none";
    successModal.style.display = "block";
    inputForm.reset();
}

function reset(e) {
    localStorage.clear();
    location.reload();
}

