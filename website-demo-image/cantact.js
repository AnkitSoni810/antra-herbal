const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");
  console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  // You can replace the console.log statement with your own code to submit the form data to a server or perform any other actions.
});
