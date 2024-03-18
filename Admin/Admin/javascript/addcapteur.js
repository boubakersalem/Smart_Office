var request = new XMLHttpRequest();
request.open("GET", "http://192.168.43.167:3000/bureaus", true);

request.onload = function () {
  var data = JSON.parse(this.response);

  console.log(data);
  var j = 1;
  data.forEach((i) => {
   
    let htmlContent = "<option>" + i.name + "</option>";

    const element = document.getElementById("cpr");
    element.insertAdjacentHTML("beforeend", htmlContent);
    
  });
};

request.send();

function add() {
  var url = "http://192.168.43.167:3000/equips";
  {
    if (f.D1.selectedIndex == 0) {
      alert("Vous devez sélectionner le nom du bureau");
      return false;
    }
    if (f.D2.selectedIndex == 0) {
      alert("Vous devez sélectionner un  capteur");
      return false;
    }
    if (f.D3.selectedIndex == 0) {
      alert("Vous devez sélectionner le nombre  du  capteur");
      return false;
    }
    if (f.D4.selectedIndex == 0) {
      alert("Vous devez sélectionner un actionneur");
      return false;
    }
  }

  {
    var data = {};
    data.numBureau = document.getElementById("cpr").value;
    data.equipname = document.getElementById("equipname").value;
    data.nbr = document.getElementById("nbr").value;
    data.etat = document.getElementById("etat").value;
    var json = JSON.stringify(data);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhr.onload = function () {
      var equips = JSON.parse(xhr.responseText);
      if (xhr.readyState == 4 && xhr.status == "200") {
        console.table(equips);
        alert("Équipement ajouté");
        location.replace("ajoutecapteur.html");
      } else {
        alert(equips.message);
        console.table(equips);
      }
    };
    xhr.send(json);
  }
}
