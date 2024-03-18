var url_string = window.location.href;
var url = new URL(url_string);
var c = url.searchParams.get("id");
console.log(c);

var url3 = "http://192.168.43.167:3000/equips/" + c;
var xhr3 = new XMLHttpRequest();
xhr3.open("GET", url3, true);

xhr3.onload = function () {
  var equip = JSON.parse(xhr3.responseText);
  if (xhr3.readyState == 4 && xhr3.status == "200") {
    document.getElementById("numBureau").value = equip.numBureau;
    document.getElementById("equipname").value = equip.equipname;
    document.getElementById("nbr").value = equip.nbr;
  } else {
    console.log("error");
  }
};

xhr3.send(null);
function update() {
  var url_string = window.location.href;
  var url = new URL(url_string);
  var c = url.searchParams.get("id");

  var url = "http://192.168.43.167:3000/equips/" + c;

  var data = {};
  data.numBureau = document.getElementById("numBureau").value;
  data.name = document.getElementById("equipname").value;
  data.cin = document.getElementById("nbr").value;
  var json = JSON.stringify(data);
  var xhr1 = new XMLHttpRequest();
  xhr1.open("PUT", url, true);
  xhr1.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhr1.onload = function () {
    var equip = JSON.parse(xhr1.responseText);
    if (xhr1.readyState == 4 && xhr1.status == "200") {
      alert(" capteur modifié!");
      location.replace("consulte3.html");
    } else {
      console.error(equip);
      location.replace("consulte3.html");
    }
  };
  xhr1.send(json);
}
