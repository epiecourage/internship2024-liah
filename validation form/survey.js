const form = document.getElementById('survey-form')

form.addEventListener("submit", validationForm)




function validationForm(event) {
  event.preventDefault()
  var name = document.getElementById("name").value;

  var gender = document.getElementById("gender").value;

  var email = document.getElementById("email").value;

  var password = document.getElementById("password").value;

  var confirmPassword = document.getElementById("confirmPassword").value;

  // var emailRegex = /^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+.][A-Za-z]{2,4}$/;
  const emailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

  // console.log(regex.test('test@gmail.com'))
  //;1. This regex matches a string that
  // if (name === "" || gender === "" || email === "" || password === "" || confirmPassword === "") {
  //   alert("All fields are required");
  //   return false;
  // }

  if (password !== confirmPassword) {
    alert("Password do not match");
    return false;
  }

  if (password.length < 6) {
    alert("Invalid Password");
    return false;
  }

  if (!emailRegex.test(email)) {
    alert("Invalid email address");
    return false;
  }

  alert("Sign-up successful");
  return true;
}