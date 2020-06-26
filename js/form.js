function validate() {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var text = document.getElementById("text").value;
  var error_message = document.getElementsByClassName("form__error");

  if (name.length < 2) {
    alert("Please enter valid name");
    return false;
  }

  if (phone.length < 10) {
    alert("Please enter correct subject");
    return false;
  }
  if (isNaN(phone) || phone.length != 10) {
    alert("Please enter valid phone number");
    return false;
  }
  if (email.indexOf("@") == -1 || email.length < 6) {
    alert("Please enter valid email");
    return false;
  }
  if (text.length <= 140) {
    alert("Please enter more than 140 characters");
    return false;
  }

  alert("Form Submitted Successfully!");
  return true;
}
