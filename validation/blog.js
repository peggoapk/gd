const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateBlogInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.content = !isEmpty(data.content) ? data.content : "";

  if (!Validator.isLength(data.title, { min: 5, max: 50 })) {
    errors.title = "Title must be between 5 and 50 characters";
  }
  if (!Validator.isLength(data.content, { min: 5, max: 10000 })) {
    errors.content = "Content must be between 5 and 10000 characters";
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title field is required";
  }
  if (Validator.isEmpty(data.content)) {
    errors.content = "Content field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
