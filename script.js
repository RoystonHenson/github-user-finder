$(document).ready(function() {
  $(document).on('keypress', '#username', function(event) {
    if (event.which === 13) {
      var username = $(this).val();
      console.log('username is : ' + username);
      getGithubInfo();
    }
  });
});

function getGithubInfo(username) {
  var url = 'https://api.github.com/users/' + username;
  var xml = new XMLHttpRequest();
  xml.open('GET', url, false);
  xml.send();
  showUser(xml);
}

function showUser(xml) {
  if(xml.status === 200) {
    var json = xml.responseText;
    var user = JSON.parse(json);
    console.log(user);
    $('#profile h2').append(user.login + ' is GitHub user # ' + user.id);
    $('#profile #information').append('<a href=\'' + user.html_url + '\'>' + user.html_url + '</a>');
  } else {
    console.log('Error');
  }
}
