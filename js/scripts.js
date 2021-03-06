/*!
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

/*CHART DATA*/
let day_lab = ['17/April', '18/April', '19/April', '20/April', '21/April', '22/April', '23/April', '24/April', '25/April', '26/April', '27/April', '28/April', '29/April', '30/April', '01/May', '02/May', '03/May', '04/May', '05/May', '06/May', '07/May', '08/May', '09/May', '10/May', '11/May', '12/May', '13/May', '14/May', '16/May', '17/May', '18/May', '19/May', '20/May', '21/May', '22/May', '23/May', '24/May', '25/May', '26/May', '27/May', '28/May', '29/May', '30/May', '31/May', '01/June', '02/June', '03/June', '04/June', '05/June', '06/June', '07/June', '08/June', '09/June', '10/June', '11/June', '12/June', '13/June', '14/June', '15/June', '16/June', '17/June', '18/June', '19/June', '20/June', '21/June', '22/June', '23/June']
let day_bolsonaro = [49.65, 39.01, 40.27, 40.31, 39.64, 45.09, 42.72, 42.53, 42.01, 36.79, 46.42, 49.81, 44.81, 44.21, 45.18, 42.95, 44.27, 40.44, 44.67, 40.47, 42.01, 44.71, 40.68, 42.8, 38.51, 39.27, 44.57, 46.57, 41.44, 40.45, 48.09, 44.48, 41.48, 42.18, 44.52, 42.81, 39.03, 39.32, 34.97, 35.92, 40.18, 37.21, 38.48, 37.96, 38.45, 42.95, 42.69, 33.47, 37.04, 39.53, 47.42, 43.65, 39.43, 40.17, 42.47, 41.81, 37.45, 40.86, 34.69, 33.9, 40.83, 38.09, 35.86, 39.91, 35.49, 35.95, 35.58]
let day_lula = [41.48, 38.6, 39.17, 35.64, 28.98, 44.2, 36.54, 43.67, 41.52, 43.99, 33.94, 46.61, 40.57, 34.4, 39.54, 43.6, 42.16, 47.14, 43.11, 43.5, 59.79, 49.35, 43.59, 38.86, 37.66, 43.76, 48.51, 39.22, 41.61, 43.74, 45.79, 43.48, 42.05, 43.11, 42.23, 41.39, 32.12, 38.47, 40.15, 45.62, 44.73, 34.9, 41.33, 41.44, 43.05, 44.55, 47.17, 45.27, 50.18, 40.45, 39.57, 43.43, 39.33, 36.01, 38.58, 40.31, 44.1, 41.49, 44.38, 38.22, 48.88, 37.92, 49.22, 42.8, 42.12, 41.6, 34.81]
let day_ciro = [49.88, 44.25, 46.39, 45.01, 45.58, 46.08, 42.03, 41.83, 46.56, 47.41, 46.94, 33.59, 35.56, 40.07, 44.23, 48.51, 30.53, 48.83, 44.58, 45.17, 45.29, 61.62, 62.09, 35.87, 45.15, 44.16, 45.94, 41.77, 41.99, 46.82, 38.22, 46.19, 36.64, 41.09, 39.3, 44.45, 48.88, 37.42, 29.22, 42.11, 44.31, 38.6, 40.22, 46.49, 47.98, 42.61, 37.79, 42.03, 46.75, 56.63, 42.0, 45.31, 44.7, 46.33, 47.81, 47.03, 53.4, 53.73, 50.09, 46.48, 44.52, 53.65, 53.8, 44.24, 56.1, 45.72, 40.41]
let week_lab = ['17/April - 23/April', '24/April - 30/April', '01/May - 07/May', '08/May - 14/May', '16/May - 22/May', '23/May - 29/May', '30/May - 05/June', '06/June - 12/June', '13/June - 19/June']
let week_bolsonaro = [42.33, 43.73, 43.0, 41.76, 43.02, 38.71, 39.0, 42.11, 37.64]
let week_lula = [38.01, 41.72, 43.18, 43.62, 43.3, 40.41, 43.8, 39.56, 42.5]
let week_ciro = [46.2, 41.98, 43.64, 49.14, 41.83, 41.06, 42.85, 47.13, 50.31]
let bw = 1;
let pr = 0;

let ctx = document.getElementsByClassName("chart");

let config = {
  type: 'line',
  data: {
    labels: day_lab,
    datasets: [
        {
          label: "Lula",
          borderColor: "#db415a",
          borderWidth: bw,
          backgroundColor: "rgba(219, 65, 90, 0.1)",
          data: day_lula,
          pointRadius: pr,
        }, 
        { 
          label: "Bolsonaro",
          borderColor: "#085ce6",
          borderWidth: bw,
          backgroundColor: "rgba(8, 92, 230, 0.1)",
          pointRadius: pr,
          data: day_bolsonaro,
        },
        { 
          label: "Ciro Gomes",
          borderColor: "#2aab1a",
          borderWidth: bw,
          backgroundColor: "rgba(42, 171, 26, 0.1)",
          pointRadius: pr,
          hidden: "true",
          data: day_ciro,
        },
    ]
  },
  options: {
    layout:{
        padding:{
            left: 20,
            right: 20,
            top: 20,
            bottom: 20,
        }
    },
    tooltips:{
        enabled : true,
        intersect: false,
    },
    title :{
        display: true,
        text : 'Brazilian Presidential Candidates - Daily Twitter Score (%)',
        fontSize : 20,
        align: 'center',
        position: 'top'
    },

    animation: {
        duration: 2000
    },
    legend: {
        fullSize: false,
        position: 'right',
        align: 'start',
        display: true,
    },

    scales: {
      xAxes: [{
        scaleLabel:{
            display: true,
        },
        gridLines: {
            display: false,
            drawBorder: false,
        },
        stacked: false,
        ticks: {
        }
      }],
      yAxes: [{
        scaleLabel:{
            display: true,
            labelString: 'Positive Tweets (%)',
        },
        ticks: {
          suggestedMin: 25,
          suggestedMax: 75,
        },
        stacked: false,
        gridLines: {
            display: true,
            drawBorder: false,
        },
      }]
    },
  }

}

window.onload = function () {
  window.chart = new Chart(ctx, config);
};



const day = () => {
    config.data.labels = day_lab
    config.data.datasets[0].data = day_lula
    config.data.datasets[1].data = day_bolsonaro
    config.data.datasets[2].data = day_ciro

    config.data.datasets[0].hidden = false;
    config.data.datasets[1].hidden = false;
    config.data.datasets[2].hidden = true;

    config.options.tooltips.intersect = false;

    config.type = 'line'
    config.options.scales.xAxes[0].gridLines.display = false;
    config.options.title.text = 'Brazilian Presidential Candidates - Daily Twitter Score (%)';

    window.chart.update();
};

const week = () => {
    config.data.labels = week_lab;
    config.data.datasets[0].data = week_lula;
    config.data.datasets[1].data = week_bolsonaro;
    config.data.datasets[2].data = week_ciro;

    config.data.labels = week_lab;
    config.data.datasets[0].hidden = false;
    config.data.datasets[1].hidden = false;
    config.data.datasets[2].hidden = false;

    /*
    config.type = 'bar';
    */
    config.options.scales.xAxes = {};
    config.options.title.text = 'Brazilian Presidential Candidates - Weekly Twitter Score (%)';
    config.options.tooltips.intersect = true;


    window.chart.update();

}



