var url = "http://192.168.43.167:3000/empls"; //definir la collection a manupiler
var xhr = new XMLHttpRequest(); // definir une request de connection standard js
xhr.open("GET", url, true); // choisir la méthode get comme une méthode d'accès au serveur et récupérer les données .
xhr.setRequestHeader("Content-type", "application/json; charset=utf-8"); // choisir l'encodage utf-8 pour que la resultat retourne peux avoir différents format de text comme les côté , les accent …..
xhr.onload = function () {
  // load les données à partir de la serveur -> début connection
  var users = JSON.parse(xhr.responseText); // conversion des données en format json
  if (xhr.readyState == 4 && xhr.status == "200") {
    document.getElementById("nbr").innerHTML =
      `<h1>     ` + users.length + `</h1>`;
  } else {
    console.log("error");
  }
};
xhr.send(null);

var url1 = "http://192.168.43.167:3000/bureaus"; //definir la collection a manupiler
var xhr1 = new XMLHttpRequest(); // definir une request de connection standard js
xhr1.open("GET", url1, true); // choisir la méthode get comme une méthode d'accès au serveur et récupérer les données .
xhr1.setRequestHeader("Content-type", "application/json; charset=utf-8"); // choisir l'encodage utf-8 pour que la resultat retourne peux avoir différents format de text comme les côté , les accent …..
xhr1.onload = function () {
  // load les données à partir de la serveur -> début connection
  var users1 = JSON.parse(xhr1.responseText); // conversion des données en format json
  var dep = Math.abs(users1.length - 4);
  if (xhr1.readyState == 4 && xhr1.status == "200") {
    document.getElementById("bureau").innerHTML = `     ` + users1.length + ``;
    document.getElementById("dep").innerHTML = `     ` + dep + ``;
  } else {
    console.log("error");
  }
};
xhr1.send(null);

var url2 = "http://192.168.43.167:3000/equips"; //definir la collection a manupiler
var xhr2 = new XMLHttpRequest(); // definir une request de connection standard js
xhr2.open("GET", url2, true); // choisir la méthode get comme une méthode d'accès au serveur et récupérer les données .
xhr2.setRequestHeader("Content-type", "application/json; charset=utf-8"); // choisir l'encodage utf-8 pour que la resultat retourne peux avoir différents format de text comme les côté , les accent …..
xhr2.onload = function () {
  // load les données à partir de la serveur -> début connection
  var users2 = JSON.parse(xhr2.responseText); // conversion des données en format json
  var equip = users2.length * 3;
  if (xhr2.readyState == 4 && xhr2.status == "200") {
    document.getElementById("equipement").innerHTML = `     ` + equip + ``;
  } else {
    console.log("error");
  }
};
xhr2.send(null);
