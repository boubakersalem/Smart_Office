function login() {
  var url = "http://192.168.43.167:3000/admins"; 
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value; 
  var xhr = new XMLHttpRequest(); 
  xhr.open("GET", url, true); 
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhr.onload = function () {
     var users = JSON.parse(xhr.responseText); 
    if (xhr.readyState == 4 && xhr.status == "200") {
      access = false;
      for (i = 0; i < users.length; i++) {
        if (users[i].email == email && users[i].password == password) {
           localStorage.setItem("idAdmin", users[i]._id);
           var im = users[i].password;
           access = true;
        }
      }
       if (access && im.length >10) {
        location.replace("index.html");
        alert("bienvenue chez  Chaaben Technology Group ");
      } else if (access && im.length > 8) {
        location.replace("index1.html");
        alert(
          "bienvenue  chez  Chaaben Technology Group "
        );
      } else {
        alert("Adresse d'administrateur ou mot de passe incorrect");
      }
    } else {
      alert("compte n'existe  pas");
    }
  };
  xhr.send();
}
