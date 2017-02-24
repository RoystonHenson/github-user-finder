$(document).ready(function() {
  $(document).on('keypress', '#username', function(event) {
    if (event.which === 13) {
      var username = $(this).val();
      console.log('username was : ' + username);
    }
  });
});
function getGithubInfo(username) {
  var url = 'https://api.github.com/users/' + username;
  var xml = new XMLHttpRequest();
  xml.open('GET', url, false);
  xml.send();

  var data = xml.responseText;
  console.log(data);
}
