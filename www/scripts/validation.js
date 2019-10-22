$(document).ready(function() {

  $("#feedbackForm").on("submit", function(){
    var formValid = true;

    var nameIsValid = $("#user-name").prop("validity").valid;

    if (nameIsValid) {
      $("#name-error").addClass("hidden");
    } else {
      $("#submission-error").removeClass("hidden");
      $("#name-error").removeClass("hidden");
      formValid = false;
    }

    var emailIsEmpty = $("#user-email").prop("validity").valueMissing;
    if(emailIsEmpty) {
      $("#submission-error").removeClass("hidden");
      $("#email-error").removeClass("hidden");
      formValid = false;
    } else {
      $("#email-error").addClass("hidden");
    }

    var emailIsInValid = $("#user-email").prop("validity").typeMismatch;
    if(emailIsInValid) {
      $("#submission-error").removeClass("hidden");
      $("#email-error2").removeClass("hidden");
      formValid = false;
    } else {
      $("#email-error2").addClass("hidden");
    }


    var webValid = $("#websiteFeedback").prop("validity").valid;

    if(webValid) {
      $("#website-feedback-error").addClass("hidden");
    } else {
      $("#submission-error").removeClass("hidden")
      $("#website-feedback-error").removeClass("hidden");
      formValid = false;
    }
    return formValid;
  });
});
