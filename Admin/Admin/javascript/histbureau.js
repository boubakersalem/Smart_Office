var request = new XMLHttpRequest();
request.open("GET", "http://192.168.43.167:3000/leds", true);
request.onload = function () {
  var data3 = JSON.parse(this.response);
  var table3 = document.getElementById("tab3");
  console.log(data3);
  var j = 1;
  data3.forEach((i) => {
    var row = table3.insertRow(-1); 
    var cell1 = row.insertCell(0); 
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = i.jour;
    cell2.innerHTML = i.val;
    cell3.innerHTML = i.heur;
  });
};

request.send();

function myFunction3() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("Input3");
  filter = input.value.toUpperCase();
  table = document.getElementById("tab3");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
