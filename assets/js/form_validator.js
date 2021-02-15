$(document).ready(function(){
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("#validate").validate({
      // Specify validation rules
      rules: {
        // The key name on the left side is the name attribute
        // of an input field. Validation rules are defined
        // on the right side
        //EMAIL: "required",
        PHOTO: "required",
        EMAIL: {
          required: true,
          // Specify that email should be validated
          // by the built-in "email" rule
          email: true
        },
        // password: {
        //   required: true,
        //   minlength: 5
        // }
        SELECT: "required",
        TEXTAREA: "required",
        TEXT: "required"
      },
      // Specify validation error messages
      messages: {
        PHOTO: "Please enter your file",
        EMAIL: "Please input a valid email",
        // password: {
        //   required: "Please provide a password",
        //   minlength: "Your password must be at least 5 characters long"
        // },
        SELECT: "Please select an option",
        TEXTAREA: "Please select an option",
        TEXT: "Please select an option"
      },
      // Make sure the form is submitted to the destination defined
      // in the "action" attribute of the form when valid
      submitHandler: function(form) {
        form.submit();
      }
    });
  });