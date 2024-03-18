var request = new XMLHttpRequest();
request.open("GET", "http://192.168.43.167:3000/climas", true);
request.onload = function () {
  
  var data = JSON.parse(this.response);
  var table = document.getElementById("tab1");
  console.log(data);
  var j = 1;
  data.forEach((i) => {
    var row = table.insertRow(-1); 
    var cell1 = row.insertCell(0); 
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = i.jour;
    cell2.innerHTML = i.nbr;
    cell3.innerHTML = i.heur;
  });
};
// Send request
request.send();

function myFunction1() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("Input1");
  filter = input.value.toUpperCase();
  table = document.getElementById("tab1");
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
