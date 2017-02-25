$(document).ready(function() {
  $(document).on('keypress', '#username', function(event) {
    if (event.which === 13) {
      var username = $(this).val();
      console.log('username is : ' + username);
      getGithubInfo(username);
    }
  });
});

function getGithubInfo(username) {
  var url = 'https://api.github.com/users/' + username;
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, false);
  xhr.send();
  console.log(username);
  showUser(xhr);
}

function showUser(xhr) {
  if(xhr.status === 200) {
    var json = xhr.responseText;
    var user = JSON.parse(json);
    $('#profile h2').append(user.login + ' is GitHub user # ' + user.id);
    $('#profile #information').append('<a href=\'' + user.html_url + '\'>' + user.html_url + '</a>');
    $('#profile #avatar').append('<img src=\'' + user.avatar_url + '\' alt=\'' + user.login + '\'>');
  } else {
    $('#profile h2').append('No such user!');
    console.log(xhr.status);
  }
}
