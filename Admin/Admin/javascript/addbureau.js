function add() {
  {
    ch1 = document.f.T1.value;
    ch2 = document.f.T2.value;

    ch = ch1.substring(1, ch1.length);
    if (ch1 == "") {
      alert("vérifier votre nom du bureau ");
      return false;
    }
    if (ch2 == "") {
      alert("vérifier votre Numéro du bureau");
      return false;
    }

    if (f.D1.selectedIndex == 0) {
      alert("Vous devez sélectionner un nom d'employé");
      return false;
    }
  }

  {
    var url = "http://192.168.43.167:3000/bureaus";
    var data = {};
    data.numBureau = document.getElementById("numBureau").value;
    data.name = document.getElementById("name").value;
    data.cin = document.getElementById("etat").value;
    var json = JSON.stringify(data);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhr.onload = function () {
      var bureaus = JSON.parse(xhr.responseText);
      if (xhr.readyState == 4 && xhr.status == "200") {
        console.table(bureaus);
        alert("Bureau ajouté");
        location.replace("ajoutebureau.html");
      } else {
        alert(bureaus.message);
        console.table(bureaus);
      }
    };
    xhr.send(json);
  }
}

var request = new XMLHttpRequest();
request.open("GET", "http://192.168.43.167:3000/empls", true);

request.onload = function () {
  var data = JSON.parse(this.response);

  console.log(data);
  var j = 1;
  data.forEach((i) => {
  
    let htmlContent = "<option>" + i.name + "</option>";

    const element = document.getElementById("etat");
    element.insertAdjacentHTML("beforeend", htmlContent);
    
  });
};

request.send();
// Send request
