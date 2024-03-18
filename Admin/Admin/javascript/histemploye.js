var request = new XMLHttpRequest();
request.open("GET", "http://192.168.43.167:3000/pires", true);
request.onload = function () {
  var data = JSON.parse(this.response);
  var table = document.getElementById("list");
  console.log(data);
  var j = 1;
  data.forEach((i) => {
    var row = table.insertRow(-1); 
    var cell1 = row.insertCell(0); 
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);

    cell1.innerHTML = i.jour;
    cell2.innerHTML = i.val;
    cell3.innerHTML = `  `;
    cell4.innerHTML = `  `;
    cell5.innerHTML = `  `;
    cell5.innerHTML = i.nombre;
  });
};
request.send();

function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("list");
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
