$("#submit").click(function() {
  if ('localStorage' in window && window['localStorage'] !== null) {
    try {
      var user = JSON.stringify({
          email: $("#email").val(),
          username: $("#username").val(),
          password: $("#password").val(),
        }),
        users = localStorage.getItem('user');

      users = users ? JSON.parse(users) : [];

      users.push(user);
     
      localStorage.setItem($("#email").val(), JSON.stringify(users));
      alert("The data was saved.");

      return true;
      
    } catch (e) {
      if (e == QUOTA_EXCEEDED_ERR) {
        alert('Quota exceeded!');
      }
    }
  } else {
    alert('Cannot store user preferences as your browser do not support local storage');
  }
});

$("#show").click(function() {
  $("#out").html(localStorage.user);
})
