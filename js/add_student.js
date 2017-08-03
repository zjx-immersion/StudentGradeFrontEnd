$(function() {
  function submit() {
    let form = $("#studentform");
    let formData = form.serializeArray();
    console.log("Original Data: " );
    console.log(formData);
    localStorage.setItem("form", JSON.stringify(formData));
    console.log("Storage Data: " );
    console.log(JSON.parse(localStorage.getItem("form")));
    $("#successLabel").fadeToggle(3000, function(){
      $(this).hide();
      form.trigger("reset");
    });

    // $("#success-label").fadeOut();
    event.preventDefault();
  };

  $("#studentform").validate({

   rules: {
     // The key name on the left side is the name attribute
     // of an input field. Validation rules are defined
     // on the right side
     name: "required",
     age: "required",
     class: "required",
     phone: "required",
     email: {
       required: true,
       // Specify that email should be validated
       // by the built-in "email" rule
       email: true
     }
   },
   // Specify validation error messages
   messages: {
     name: "Please enter your name",
     age: "Please enter your age",
     class: "Please enter your number",
     phone: "Please enter your phone",
     password: {
       required: "Please provide a password",
       minlength: "Your password must be at least 5 characters long"
     }
   },
   // Make sure the form is submitted to the destination defined
   // in the "action" attribute of the form when valid
   submitHandler: function(form) {
     submit();
   }
 });
})