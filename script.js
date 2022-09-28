"user strict";

/////////////////////////////////////////////////////////////////////////////////////
// Email Validation

const form = document.getElementById("form");
const email = document.getElementById("email");
const small = document.querySelector(".small");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  function checkInputs() {
    const emailValue = email.value.trim();

    if (emailValue === "") {
      console.log("sdg cdgvcuhbjcen");
      small.style.visibility = "visible";
    } else form.submit();
  }

  checkInputs();
});
