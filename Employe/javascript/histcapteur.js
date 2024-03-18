var request = new XMLHttpRequest();
request.open("GET", "http://192.168.43.167:3000/press", true);
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  var table = document.getElementById("list");
  console.log(data);
  var j = 1;
  data.forEach((i) => {
    var row = table.insertRow(-1); //<tr>
    var cell1 = row.insertCell(0); //<th> ou <td>
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    var cell7 = row.insertCell(6);
    var cell8 = row.insertCell(7);

    cell1.innerHTML = i.jour;
    cell2.innerHTML = i.status;
    cell3.innerHTML = i.entrée;
    cell4.innerHTML = i.sortie;
    cell5.innerHTML = i.nbr;
  });
};
// Send request
request.send();
