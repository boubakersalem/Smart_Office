function add() {
  {
    ch1 = document.f.T1.value;
    ch2 = document.f.T2.value;
    ch3 = document.f.T3.value;
    ch4 = document.f.T4.value;
    ch5 = document.f.T5.value;
    ch6 = document.f.T6.value;

    if (isNaN(ch1) == false || ch1 == "") {
      alert("vérifier votre Nom et Prénom ");
      return false;
    }
    if (
      ch2 == "" ||
      ch2.length != 8 ||
      (ch2.charAt(0) != 0 && ch2.charAt(0) != 1) ||
      isNaN(ch2)
    ) {
      alert("vérifier votre numéro de CIN");
      return false;
    }
    if (ch3 == "" || ch3.length != 8 || isNaN(ch2)) {
      alert("vérifier votre numéro de téléphone");
      return false;
    }
    if (isNaN(ch4) == false || ch4 == "") {
      alert("vérifier votre Adresse ");
      return false;
    }
    p = ch5.indexOf("@", ch5);
    ch = ch5.substring(0, p - 1);
    if (isNaN(ch) == false && ch5.indexOf(".", ch5) == -1) {
      alert("Email invalide!");
      return false;
    }
    if (ch6 == "" || ch6.charAt(0) != "E" || ch6.length != 9) {
      alert(
        "vérifier votre mot de passe il faut que mot de passe contient E au début et 9 caractères>"
      );
      return false;
    }
    if (f.D1.selectedIndex == 0) {
      alert("Vous devez sélectionner une poste de travail");
      return false;
    }
    if (f.D2.selectedIndex == 0) {
      alert("Vous devez sélectionner un mode");
      return false;
    }
  }
  {
    var url = "http://192.168.43.167:3000/empls";
    var data = {};
    data.name = document.getElementById("name").value;
    data.cin = document.getElementById("cin").value;
    data.tel = document.getElementById("tel").value;
    data.addr = document.getElementById("addr").value;
    data.email = document.getElementById("email").value;
    data.password = document.getElementById("password").value;
    data.post = document.getElementById("post").value;
    data.mode = document.getElementById("mode").value;
    data.picture = document.getElementById("i").value;
    var json = JSON.stringify(data);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
    xhr.onload = function () {
      var empls = JSON.parse(xhr.responseText);
      if (xhr.readyState == 4 && xhr.status == "200") {
        console.table(empls);
        alert("Employé ajouté");
        location.replace("AjoutEmploye.html");
      } else {
        alert(empls.message);
        console.table(empls);
      }
    };
    xhr.send(json);
  }
}
