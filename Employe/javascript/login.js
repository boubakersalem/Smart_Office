function login() {
  var url = "http://192.168.43.167:3000/empls"; //definir la collection a manupiler
  var email = document.getElementById("email").value;
  var pwd = document.getElementById("pwd").value; // récupération de la password saisir dans notre code html
  var xhr = new XMLHttpRequest(); // definir une request de connection standard js
  xhr.open("GET", url, true); // choisir la méthode get comme une méthode d'accès au serveur et récupérer les données .
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8"); // choisir l'encodage utf-8 pour que la resultat retourne peux avoir différents format de text comme les côté , les accent …..
  xhr.onload = function () {
    // load les données à partir de la serveur -> début connection
    var users = JSON.parse(xhr.responseText); // conversion des données en format json
    if (xhr.readyState == 4 && xhr.status == "200") {
      // if la status retourné par la serveur est 200 donc ont dans le cas succes
      access = false; // définir une variable access par défaut avec la valeur false
      /* bouclé la liste des utilisateurs */
      for (i = 0; i < users.length; i++) {
        if (users[i].email == email && users[i].password == pwd) {
          // if les données recuperer et la valeur auctual dans la base sont égaux alors en changer access a true .
          access = true;
          localStorage.setItem("idAdmin", users[i]._id);
          var modre = users[i].mode;
        }
      }
      // si la variable accès contient true on est autorisé à accéder.
      if (access && modre == "Manuele") {
        location.replace("index.html");
        alert(" Bienvenue chez chaben Group");
      } else if (access && modre == "Automatique") {
        location.replace("index1.html");
      } else {
        alert("  Votre adresse ou bien mot de passe  est incorrect");
      }
    } else {
      alert("Compte n'existe  pas");
    }
  };
  xhr.send();
}
