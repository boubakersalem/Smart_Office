var request = new XMLHttpRequest();
request.open("GET", "http://192.168.43.167:3000/admins", true);

request.onload = function () {
  var data = JSON.parse(this.response);

  console.log(data);
  var j = 1;
  data.forEach((i) => {
   let htmlContent =
      '<div class="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column"> <div class="card bg-light d-flex flex-fill"> <div class="card-header text-muted border-bo  </div> <div class="card-body pt-0"> <div class="row"><div class="col-7"><h2 class="lead"><b> ' +
      i.name +
      ' </b></h2><ul class="ml-4 mb-0 fa-ul text-muted"><li class="small"><span class="fa-li"><i class="fas fa-lg fa-building"></i></span> Adresse: ' +
      i.addr +
      '</li> <li class="small"><span class="fa-li"><i class="fas fa-envelope"></i></span> Email: ' +
      i.email +
      '</li><li class="small"><span class="fa-li"><i class="fa fa-id-card"></i></span> CIN: ' +
      i.cin +
      '</li><li class="small"><span class="fa-li"><i class="fas fa-lg fa-phone"></i></span> Phone +216: ' +
      i.tel +
      '</li> </ul></div> <div class="col-5 text-center"> <img src="' +
      i.picture +
      '" alt="image employé" class="img-circle img-fluid"></div> </div> </div><div class="card-footer"><div class="text-right"><a class="btn btn-info btn-sm" href="upadmin.html?id=' +
      i._id +
      '"><i class="fas fa-pencil-alt"></i>Modifier </a><a class="btn btn-danger btn-sm" href="delete4.html?id=' +
      i._id +
      '"><i class="fas fa-trash"></i>Supprimer</a></div></div></div></div>';

  
    const element = document.getElementById("box");
    element.insertAdjacentHTML("beforeend", htmlContent);
    
  });
};

request.send();
