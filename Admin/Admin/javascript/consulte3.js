var request = new XMLHttpRequest();
request.open("GET", "http://192.168.43.167:3000/equips", true);
request.onload = function () {
  var data = JSON.parse(this.response);
  var table1 = document.getElementById("listequip1");
  var table2 = document.getElementById("listequip2");
  data.forEach((i) => {
    if (i.equipname != "") {
      var row = table1.insertRow(-1);
      var cell1 = row.insertCell(0); 
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      var cell7 = row.insertCell(6);
      var cell8 = row.insertCell(7);

      cell2.innerHTML = i.equipname;
      cell3.innerHTML = i.nbr;
      cell4.innerHTML = i.numBureau;
      cell5.innerHTML = `      `;
      cell6.innerHTML =
        `<a href="upequip1.html?id=` +
        i._id +
        `"><i class="fas fa-pen"></i></a> <a href="delete3.html?id=` +
        i._id +
        `"><i class="fas fa-trash"></i></a> `;
    }
    if (i.etat != "") {
      var row = table2.insertRow(-1); 
      var cell1 = row.insertCell(0); 
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
      var cell7 = row.insertCell(6);

      cell2.innerHTML = i.etat;
      cell3.innerHTML = `  `;
      cell4.innerHTML = i.numBureau;
      cell5.innerHTML = `  `;

      cell6.innerHTML =
        ` <a href="upequip2.html?id=` +
        i._id +
        `"><i class="fas fa-pen"></i></a> <a href="delete3.html?id=` +
        i._id +
        `"><i class="fas fa-trash"></i></a> `;
    }
  });
};

request.send();
function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("listequip1");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
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
function myFunction1() {
  var input1, filter1, table1, tr1, td1, i1, txtValue1;
  input1 = document.getElementById("myInput1");
  filter1 = input1.value.toUpperCase();
  table1 = document.getElementById("listequip2");
  tr1 = table1.getElementsByTagName("tr1");
  for (i = 0; i < tr1.length; i++) {
    td1 = tr1[i].getElementsByTagName("td1")[1];
    if (td) {
      txtValue1 = td1.textContent || td1.innerText;
      if (txtValue1.toUpperCase().indexOf(filter1) > -1) {
        tr1[i].style.display = "";
      } else {
        tr1[i].style.display = "none";
      }
    }
  }
}
