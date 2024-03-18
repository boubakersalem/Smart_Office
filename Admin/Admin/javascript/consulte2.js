var request = new XMLHttpRequest();
request.open("GET", "http://192.168.43.167:3000/bureaus", true);

request.onload = function () {
  var data = JSON.parse(this.response);

  console.log(data);
  var j = 1;
  data.forEach((i) => {
    
    let htmlContent =
      '<div class="col-md-4 col-sm-6"><div class="box"><img src="css/css/bureau.jpg" class="img1"><div class="box_content"><div class="content"> <input type="text" class="form-control" placeholder= "Nom employé: ' +
      i.cin +
      '" disabled> <input type="text" class="form-control" placeholder= "Nom bureau: ' +
      i.name +
      '" disabled> <input type="text" class="form-control" placeholder= "Numéro bureau: ' +
      i.numBureau +
      ' " disabled> <br> <a class="button" href="upbureau.html?id=' +
      i._id +
      '">Modifier</a> <a class="button" href="delete2.html?id=' +
      i._id +
      '">Supprimer</a>  <a class="button" href="historiquebureau.html?id=' +
      i._id +
      '">Historique</a>  </div> </div> </div> </div>';

    const element = document.getElementById("box");
    element.insertAdjacentHTML("beforeend", htmlContent);
    
  });
};

request.send();
