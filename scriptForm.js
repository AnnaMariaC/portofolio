// select input type submit and store in a variable btnSubmit
const btnSubmit = document.querySelector("input[type=submit]");
const nameMessenger = document.querySelector("#name");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const form = document.querySelector("#myform");
let span = document.querySelector(".span-error");

//function that change text on the input value and add a new class
function changeButtonStyle() {
  btnSubmit.className = "sendMessage";
  btnSubmit.value = "✓";
}

//send email function->sends me email with the value completed in form with help of https://smtpjs.com/
function sendEmail(e) {
  e.preventDefault();
  let body =
    "You recive a new message <br/>" +
    "name: " +
    nameMessenger.value +
    "<br/> email: " +
    email.value +
    "<br/> message: " +
    message.value;
  Email.send({
    SecureToken: "ae84f9c5-7c56-472b-8132-9a54d2eb73cc2",
    To: "anamaria.coneakenesz@gmail.com",
    From: "anamaria.coneakenesz@gmail.com",
    Subject: nameMessenger.value,
    Body: body,
  }).then(() => {
    changeButtonStyle();
    document.querySelector("#myform").reset();
  });
}
//after click send button
btnSubmit.addEventListener("click", sendEmail);
//error for form
// btnSubmit.addEventListener("click", (e) => {
//   if (email.value === "") {
//     console.log("check");
//     span.className = "error";
//     span.innerText = "Please write your email";
//   } else if (nameMessenger.value === "") {
//     console.log("check");
//     span.className = "error";
//     span.innerText = "Please write your email";
//   } else if (message.value === "") {
//     console.log("check");
//     span.className = "error";
//     span.innerText = "Please write your email";
//   } else {
//     sendEmail;
//   }

//   e.preventDefault();
// });
