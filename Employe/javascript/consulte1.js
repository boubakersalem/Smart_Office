var request = new XMLHttpRequest();
request.open("GET", "http://192.168.43.167:3000/empls", true);

request.onload = function () {
  var data = JSON.parse(this.response);

  console.log(data);
  var j = 1;
  data.forEach((i) => {
    //const para = document.createElement('div');
    let htmlContent =
      '<div class="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column"> <div class="card bg-light d-flex flex-fill"> <div class="card-header text-muted border-bo  </div> <div class="card-body pt-0"> <div class="row"><div class="col-7"><h2 class="lead"><b> ' +
      i.name +
      ' </b></h2><p class="text-muted text-sm"><b>Post: </b> ' +
      i.post +
      ' </p><ul class="ml-4 mb-0 fa-ul text-muted"><li class="small"><span class="fa-li"><i class="fas fa-lg fa-building"></i></span> Adresse: ' +
      i.addr +
      '</li> <li class="small"><span class="fa-li"><i class="fas fa-envelope"></i></span> Email: ' +
      i.email +
      '</li><li class="small"><span class="fa-li"><i class="fa fa-id-card"></i></span> CIN: ' +
      i.cin +
      '</li><li class="small"><span class="fa-li"><i class="fas fa-lg fa-phone"></i></span> Phone +216: ' +
      i.tel +
      '</li> <li class="small"><span class="fa-li"><i class="fa fa-adjust"></i></span> Mode: ' +
      i.mode +
      '</li> </ul> </div> <div class="col-5 text-center"> <img src="' +
      i.picture +
      '" alt="image employé" class="img-circle img-fluid"></div> </div> </div><div class="card-footer"><div class="text-right"><a class="btn btn-secondary btn-sm" href="historiqueemploye.html?id=' +
      i._id +
      '"> <i class="fa fa-history"></i>Historique</a><a class="btn btn-info btn-sm" href="upemploye.html?id=' +
      i._id +
      '"><i class="fas fa-pencil-alt"></i>Modifier </a><a class="btn btn-danger btn-sm" href="delete1.html?id=' +
      i._id +
      '"><i class="fas fa-trash"></i> Supprimer</a></div></div></div></div>';

    //const node = document.createTextNode("This is new.");
    //para.appendChild(node);

    const element = document.getElementById("box");
    element.insertAdjacentHTML("beforeend", htmlContent);
    //element.appendChild(para);
  });
};

request.send();
// Send request
