Tab1 = new Array () ;
for (var i= 0 ; i<5 ;i++)
{
  Tab1[i] = Math.random()*10;
 }
 Tab2 = new Array () ;
for (var i= 0 ; i<5 ;i++)
{
  Tab2[i] = Math.random()*10;
 }
 Tab3 = new Array () ;
for (var i= 0 ; i<5 ;i++)
{
  Tab3[i] = Math.random()*10;
 }
 
 const labels = [
              
             'Janvier',
           'Février',
             'Mars',
              'Avril',
              'Mai',
              'Juin',
            'Juillet',
              'Août',
          'Septembre',
            'Octobre',
           'Novembre',
           'Décembre',
                    ];
                  
                    const data = {
                      labels: labels,
                      datasets: [{
                        label: ' Éclairage  ',
                        backgroundColor: 'rgb(255, 0, 0)',
                        borderColor: 'rgb(255, 0, 0',
                        data: Tab1,
                      },
                      {
                        label: ' Chauffage  ',
                        backgroundColor: 'rgb(0, 153, 0)',
                        borderColor: 'rgb(0, 153, 0)',
                        data: Tab2,
                      },
                      {
                        label: ' Climatiseur  ',
                        backgroundColor: 'rgb(0, 128, 255)',
                        borderColor: 'rgb(0, 128, 255)',
                        data: Tab3 ,
                      },
                      
                    ]
                    };
                  
                    const config = {
                      type: 'line',
                      data: data,
                      options: {
                    title: {
                      display: false,
                      text: "tet",
                      fontSize: 24,
                    },
                    legend: {
                      display: true,
                    },
                    // start at 0
                    scales: {
                      yAxes: [
                      
                        {
                        
                          ticks: {
                            beginAtZero: true,
                          },
                        },
                      ],
                    },
                   
                  },
                
                    };
                  
                    const myChart = new Chart(
                      document.getElementById('myChart'),
                      config
                
                    );
                 
                  