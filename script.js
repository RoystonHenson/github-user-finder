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
  xhr.send(null);
  getUserData(xhr);
}

function getUserData(xhr) {
  if(xhr.status === 200) {
    var json = xhr.responseText;
    var user = JSON.parse(json);
    showUserData(user.login, user.id, user.html_url, user.avatar_url);
    // $('#profile h2').append(user.login + ' is GitHub user # ' + user.id);
    // $('#profile #information').append('<a href=\'' + user.html_url + '\'>' + user.html_url + '</a>');
    // $('#profile #avatar').append('<img src=\'' + user.avatar_url + '\' alt=\'' + user.login + '\'>');
  } else {
    $('#profile h2').append('No such user!');
    console.log(xhr.status);
  }
}

function showUserData(username, id, weblink, profile_pic) {
  $('#profile h2').append(username + ' is GitHub user # ' + id);
  $('#profile #information').append('<a href=\'' + weblink + '\'>' + weblink + '</a>');
  $('#profile #avatar').append('<img src=\'' + profile_pic + '\' alt=\'' + username + '\'>');
}
