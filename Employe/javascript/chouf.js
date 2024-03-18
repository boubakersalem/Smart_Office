var request = new XMLHttpRequest();
request.open("GET", "http://192.168.43.167:3000/choufs", true);
request.onload = function () {
  // Begin accessing JSON data here
  var data1 = JSON.parse(this.response);
  var table1 = document.getElementById("tab2");
  console.log(data1);
  var j = 1;
  data1.forEach((i) => {
    var row = table1.insertRow(-1); //<tr>
    var cell1 = row.insertCell(0); //<th> ou <td>
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = i.jour;
    cell2.innerHTML = i.val;
    cell3.innerHTML = i.heur;
  });
};
// Send request
request.send();

function myFunction2() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("Input2");
  filter = input.value.toUpperCase();
  table = document.getElementById("tab2");
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
