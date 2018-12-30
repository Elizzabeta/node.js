exports.validatePassword = function(password) {
  if(password.length >= 6) {
    return true;
  } else {
    return false;
  }
}

exports.getEmailMessage = function(email){
  if(validateEmail(email)){
    return "Valid email";
  }else{
    return "Invalid email";
  }
}

exports.validateEmail = function(email) {
  if(email.includes('@') && email.endsWith('.com')){
    return true;
  } else {
    return false;
  }
}

exports.usernameToLowerCase = function(username){
  var formatedUser = username.usernameToLowerCase();
  return formatedUser;
}