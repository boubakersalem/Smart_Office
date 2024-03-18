var temperaturas, time, dados;
var max = 25;
var min = 15;
var temp = 1;
function GetDados() {
  temperaturas = [];
  time = [];
  var requests = new XMLHttpRequest();
  requests.onreadystatechange = function () {
    if (requests.readyState == 4) {
      dados = JSON.parse(requests.responseText);
      for (i = 0; i < dados.length; i++) {
        temp = parseFloat(dados[i].temperature);
        temperature.push(temp);
        time.push(dados[i].Time);
        if (temp > max) max = temp;
        else if (temp < min) min = temp;
      }
      Grafico();
      Indicador();
      AlterarLed();
    }
  };
  try {
    requests.open("GET", "http://192.168.43.167/cas");
    requests.send();
  } catch (e) {
    console.log(e);
  }
}

function Grafico() {
  var linha = {
    x: time,
    y: temperaturas,
    type: "lines",
  };
  var data = [linha];
  Plotly.newPlot("Grafico", data);
}

setInterval(GetDados, 1000);
