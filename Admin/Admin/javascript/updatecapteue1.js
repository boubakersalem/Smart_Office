var request = new XMLHttpRequest();
request.open("GET", "http://192.168.43.167:3000/bureaus", true);

request.onload = function () {
  var data = JSON.parse(this.response);

  console.log(data);
  var j = 1;
  data.forEach((i) => {
   
    let htmlContent = "<option>" + i.name + "</option>";


    const element = document.getElementById("numBureau");
    element.insertAdjacentHTML("beforeend", htmlContent);
  });
};

request.send();

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
    document.getElementById("etat").value = equip.etat;
    document.getElementById("mode").value = equip.mode;
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
  data.etat = document.getElementById("etat").value;
  data.equipname = document.getElementById("mode").value;

  var json = JSON.stringify(data);
  var xhr = new XMLHttpRequest();
  xhr.open("PUT", url, true);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhr.onload = function () {
    var equip = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
      alert("Équipement modifié");
      location.replace("consulte3.html");
    } else {
      console.error(equip);
      location.replace("consulte3.html");
    }
  };
  xhr.send(json);
}
