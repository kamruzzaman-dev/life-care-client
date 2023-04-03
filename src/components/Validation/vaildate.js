const symbols = /[!@#$%^&*()_+{:;"'|/}]/;
const numbers = /[0-9]/;
const re = /\S+@\S+\.\S+/;
const chars = /^[a-zA-Z\s]+$/;
const lowercase = /[a-z]/;
const uppercase = /[A-Z]/;
export const Validate = (values) => {
  let errors = {};
  // Fist name validation
  if (!values.name) {
    errors.name = "Name is required";
  } else if (!chars.test(values.name)) {
    errors.name = "Please write only character";
  }
  // email validation
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!re.test(values.email)) {
    errors.email = "Please Write Valid Email";
  }
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Please Write More than 6 characters";
  }
  // else if (
  //   !lowercase.test(values.password) ||
  //   !uppercase.test(values.password)
  // ) {
  //   errors.password = "Please write atleast one letter";
  // }
  else if (!symbols.test(values.password)) {
    errors.password = "Please write atleast one special character";
  } else if (!numbers.test(values.password)) {
    errors.password = "Please write atleast one number";
  } else if (!isNaN(values.password)) {
    errors.password = "Please write atlaest one character";
  }
  // confirm password validation
  if (!values.confirm_password) {
    errors.confirm_password = "Confirm Password is required";
  } else if (values.password !== values.confirm_password) {
    errors.confirm_password = "Password not match";
  }
  return errors;
};

// login validator
export const loginValidate = (values) => {
  let errors = {};
  // email validation
  if (!values.email) {
    errors.email = "Email is required";
  }
  // Password validation
  if (!values.password) {
    errors.password = "Password is required";
  }
  return errors;
};
/* ------------------------------------------------------- */
// support ticket
export const storeValidate = (values) => {
  console.log(values);
  let errors = {};
  if (!values.name) {
    errors.name = "name is required";
  } else if (!values.sectors) {
    errors.sectors = "sectors is required";
  }
  return errors;
};
