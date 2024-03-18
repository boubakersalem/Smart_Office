var url = "http://192.168.43.167:3000/empls"; 
var xhr = new XMLHttpRequest(); 
xhr.open("GET", url, true); 
xhr.setRequestHeader("Content-type", "application/json; charset=utf-8"); 
xhr.onload = function () {
  var users = JSON.parse(xhr.responseText); 
  if (xhr.readyState == 4 && xhr.status == "200") {
    document.getElementById("nbr").innerHTML =
      `<h1>     ` + users.length + `</h1>`;
  } else {
    console.log("error");
  }
};
xhr.send(null);

var url1 = "http://192.168.43.167:3000/bureaus"; 
var xhr1 = new XMLHttpRequest();
xhr1.open("GET", url1, true);
xhr1.setRequestHeader("Content-type", "application/json; charset=utf-8"); 
xhr1.onload = function () {
  var users1 = JSON.parse(xhr1.responseText); 
  var dep = Math.abs(users1.length - 4);
  if (xhr1.readyState == 4 && xhr1.status == "200") {
    document.getElementById("bureau").innerHTML = `     ` + users1.length + ``;
    document.getElementById("dep").innerHTML = `     ` + dep + ``;
  } else {
    console.log("error");
  }
};
xhr1.send(null);

var url2 = "http://192.168.43.167:3000/equips"; 
var xhr2 = new XMLHttpRequest(); 
xhr2.open("GET", url2, true); 
xhr2.setRequestHeader("Content-type", "application/json; charset=utf-8"); 
xhr2.onload = function () {
  var users2 = JSON.parse(xhr2.responseText); 
  var equip = users2.length * 3;
  if (xhr2.readyState == 4 && xhr2.status == "200") {
    document.getElementById("equipement").innerHTML = `     ` + equip + ``;
  } else {
    console.log("error");
  }
};
xhr2.send(null);
