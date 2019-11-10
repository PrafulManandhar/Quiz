const Validator = require("validator");
const isEmpty = require("./isEmpty");
module.exports = function validateAddUser(data) {
  let errors = {};
  data.email = !isEmpty(data.email) ? data.email : "";
  if (Validator.isEmpty(data.email)) errors.email = "Email is required!";
  if (!Validator.isEmail(data.email)) errors.email = "Email must be valid!";
  data.newPassword = !isEmpty(data.newPassword) ? data.newPassword : "";
  data.confirmPassword = !isEmpty(data.confirmPassword)
    ? data.confirmPassword
    : "";

  if (Validator.isEmpty(data.newPassword))
    errors.newPassword = "New password is required!";
  if (!Validator.isLength(data.newPassword, { min: 6, max: undefined }))
    errors.newPassword = "New password must be atleast 6 characters long!";
  if (Validator.isEmpty(data.confirmPassword))
    errors.confirmPassword = "Confirm Password is required!";
  if (data.confirmPassword !== data.newPassword) {
    errors.confirmPassword = "Confirm password must match password field!";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
