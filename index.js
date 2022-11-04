const emailId = document.getElementById("email");
const errorMsg = document.getElementById("error");
const validateMsg =
  /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;

// validate the email entered, if fail change color of the border and show error text.
function validAte() {
  if (emailId.value.match(validateMsg)) {
    error.style.display = "none";
    emailId.style.borderColor = "var(--pale-blue)";
  } else if (emailId.value == "") {
    error.style.display = "none";
    emailId.style.borderColor = "var(--pale-blue)";
  } else {
    error.style.display = "block";
    emailId.style.borderColor = "red";
  }
}
