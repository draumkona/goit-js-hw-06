const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password }
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Proszę uzupełnić wszystkie pola.");
    }
    else {
        const userData = {
            email: email.value,
            password: password.value
        }
          console.log(userData);
    };
  
    event.currentTarget.reset();
}