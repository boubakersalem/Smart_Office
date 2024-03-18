var url_string = window.location.href;
var url = new URL(url_string);
var c = url.searchParams.get("id");
console.log(c);

var url3 = "http://192.168.43.167:3000/admins/" + c;
var xhr3 = new XMLHttpRequest();
xhr3.open("GET", url3, true);

xhr3.onload = function () {
  var admin = JSON.parse(xhr3.responseText);
  if (xhr3.readyState == 4 && xhr3.status == "200") {
    document.getElementById("name").value = admin.name;
    document.getElementById("cin").value = admin.cin;
    document.getElementById("tel").value = admin.tel;
    document.getElementById("addr").value = admin.addr;
    document.getElementById("email").value = admin.email;
    document.getElementById("password").value = admin.password;
    document.getElementById("ii").value = empl.picture;
  } else {
    console.log("error");
  }
};

xhr3.send(null);

function update() {
  var url_string = window.location.href;
  var url = new URL(url_string);
  var c = url.searchParams.get("id");

  var url = "http://192.168.43.167:3000/admins/" + c;

  var data = {};
  data.name = document.getElementById("name").value;
  data.cin = document.getElementById("cin").value;
  data.tel = document.getElementById("tel").value;
  data.addr = document.getElementById("addr").value;
  data.email = document.getElementById("email").value;
  data.password = document.getElementById("password").value;
  data.picture = document.getElementById("ii").value;

  var json = JSON.stringify(data);
  var xhr = new XMLHttpRequest();
  xhr.open("PUT", url, true);
  xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
  xhr.onload = function () {
    var admins = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
      alert("Administrateur modifié");
      location.replace("consulte4.html");
    } else {
      console.error(admins);
      location.replace("consulte4.html");
    }
  };
  xhr.send(json);
}

function send() {
  var i = document.getElementById("ii");
  const apikey = "ANlm5NoOQIytnuRwZng44z";
  const client = filestack.init(apikey);
  const options = {
    maxFiles: 20,
    uploadInBackground: false,
    onOpen: () => console.log("opened!"),
    onUploadDone: (res) => (i.value = res.filesUploaded[0].url),
  };
  client.picker(options).open();
}
