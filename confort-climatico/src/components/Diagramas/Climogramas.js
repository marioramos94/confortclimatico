import React, { Component } from 'react';
import ReactHighcharts from 'react-highcharts'
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsExporting from 'highcharts/modules/exporting';
import datas from './dataclimo'

HighchartsMore(ReactHighcharts.Highcharts);
HighchartsExporting(ReactHighcharts.Highcharts)

class Climograma extends Component {
  state = {
    config: {
      
      title: {
        text: 'Climograma'
       },
subtitle: {
        text: 'Elavorado en base al año 2016'
      },   
      xAxis: {
        gridLineWidth: 1,
        title: {
            enabled: true,
            text: 'Humedad(%)'
         },
    startOnTick: true,
    endOnTick: true,
    showLastLabel: true
    },


yAxis: { 
       title: 
           {
          text: 'Temperatura(°C)'
            }
    }, 
      series: datas,
              
          tooltip: {
            headerFormat: '<b>{series.name}</b><br>',
            pointFormat: '{point.x} %, {point.y}°C'
           },
    }
  };

  render() {
    const { config } = this.state;
    return <ReactHighcharts config={config} />
  }
}

export default Climograma