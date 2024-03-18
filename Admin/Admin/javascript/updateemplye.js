var url_string = window.location.href;
var url = new URL(url_string);
var c = url.searchParams.get("id");
console.log(c);

var url3 = "http://192.168.43.167:3000/empls/" + c;
var xhr3 = new XMLHttpRequest();
xhr3.open("GET", url3, true);

xhr3.onload = function () {
  var empl = JSON.parse(xhr3.responseText);
  if (xhr3.readyState == 4 && xhr3.status == "200") {
    document.getElementById("name").value = empl.name;
    document.getElementById("cin").value = empl.cin;
    document.getElementById("tel").value = empl.tel;
    document.getElementById("addr").value = empl.addr;
    document.getElementById("email").value = empl.email;
    document.getElementById("password").value = empl.password;
    document.getElementById("post").value = empl.post;
    document.getElementById("mode").value = empl.mode;
    document.getElementById("i").value = empl.picture;
  } else {
    console.log("error");
  }
};

xhr3.send(null);

function update() {
  var url_string = window.location.href;
  var url = new URL(url_string);
  var c = url.searchParams.get("id");

  var url = "http://192.168.43.167:3000/empls/" + c;

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
  xhr.open("PUT", url, true);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhr.onload = function () {
    var admins = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
      alert("Employé modifié");
      location.replace("consulte1.html");
    } else {
      console.error(empls);
      location.replace("consulte1.html");
    }
  };
  xhr.send(json);
}
