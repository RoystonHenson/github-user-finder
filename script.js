$(document).ready(function() {
  $(document).on('keypress', '#username', function() {
    if (event.which === 13) {
      var username = $(this).val();
      console.log('username was : ' + username);
    }
  });
});
