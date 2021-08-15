$(".login").click(function () {
  // validate input
  let user = $('.user').val();
  let email = $('.emailid').val();
  validate(user, email);
});

validate = (user, email) => {

  if (user == '') {
    failure(" Username is blank", ".username");
  }

  if (user.length >= 2) {
    failure(" Username is valid", ".username");

    if (isEmail(email)) {

      failure(" Email is valid", ".emailtext");
      console.log(`Logging in as ${user}`);
    }
    else {

      failure(" Email is invalid", ".emailtext");
    }
  }
  else {
    failure("Minimum length: 2", ".username");

  }
  if (email == '') {
    failure(" Email is blank", ".emailtext");
  }
}
/*
success = () => {
  $('.load-3').css("display", "block");

  setTimeout(
    function () {
      $('.loginform').trigger('submit');
    }, 2000);
}*/

failure = (message, cls) => {
  $(cls).text(message);
}

$('.user').click(() => {
  $('.username').text('')
})

$('.email').click(() => {
  $('.emailtext').text('')
})

$(document).on('keypress', function (e) {
  if (e.which == 13) {
    let user = $('.user').val();
    let email = $('.emailid').val();
    validate(user, email);
  }
});

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}
