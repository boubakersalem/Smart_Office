Tab = new Array () ;
for (var i= 0 ; i<3 ;i++)
{
  Tab[i] = Math.random(0.5);
 }
 
 const graph = document.getElementById("graph").getContext("2d");

Chart.defaults.global.defaultFontSize = 18;

let massPopChart = new Chart(graph, {
 type: "doughnut", 
 data: {
   labels: [
     "Éclairage",
     "Chauffage",
     "Climatiseur",
    
   ],
   datasets: [
     {
       label: " ",
       data: Tab,
       backgroundColor: [   
         "red",
         "green",
        
         "blue",
        
       ],
       hoverBorderWidth: 3,
     },
   ],
 },
 options: {
     elements: {
   
},
   title: {
   
   },
   legend: {
     
   },
  
   scales: {
     
   },
   layout: {
     padding: {
       left: 50,
       right: 50,
       top: 50,
     },
   },
 },
});






