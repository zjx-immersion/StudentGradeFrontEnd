$(function() {
  function submit() {
    let formData = $(this).serializeArray();
    console.log("Original Data: " );
    console.log(formData);
    localStorage.setItem("form", JSON.stringify(formData));
    console.log("Storage Data: " );
    console.log(JSON.parse(localStorage.getItem("form")));
    location.href="result.html";
    event.preventDefault();
  };

  $("#examform").validate({
    showErrors: function(errorMap, errorList) {
        // Do nothing here
        console.log(errorList);
        let errorStr = errorList.map(err => "<p>"+err.message+"</p>").join("");
        $(".error").html(errorStr);
        window.location.hash = '.error';
    },
    focusCleanup: true,
    focusInvalid: false,
   // Specify validation rules
   rules: {
     // The key name on the left side is the name attribute
     // of an input field. Validation rules are defined
     // on the right side
     classes: "required",
     number: "required",
     name: {
       required: true,
       // Specify that email should be validated
       // by the built-in "email" rule
       email: true
     },
     password: {
       required: true,
       minlength: 5
     }
   },
   // Specify validation error messages
   messages: {
     classes: "Please enter your class",
     number: "Please enter your number",
     password: {
       required: "Please provide a password",
       minlength: "Your password must be at least 5 characters long"
     },
     name: "Please enter a valid email address"
   },
   // Make sure the form is submitted to the destination defined
   // in the "action" attribute of the form when valid
   submitHandler: function(form) {
     console.log("1----------------");
     submit();
     console.log("2----------------");
   }
 });
})
