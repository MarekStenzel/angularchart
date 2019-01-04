import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularchart';

  // lineChart
  public lineChartData: Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40, 30, 20, 10, 5, 15], label: 'Series A', tension: 0,
      pointHoverRadius: 8, pointRadius: 0, pointHitRadius: 10}
  ];
  public lineChartLabels: Array<any> = ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER',
  'NOVEMBER', 'DECEMBER'];
  public lineChartOptions = {
    responsive: false,
    scales : {
      xAxes : [ {
        gridLines : {
          display : false
        }
      } ]},
    tooltips: {
      enabled: true,
      callbacks: {
        title: () => null,
        label: (tooltipItem) => tooltipItem.yLabel + ' EMAILS SENT ON ' + tooltipItem.xLabel
      },
      displayColors: false
    }
  };

  public lineChartColors: Array<any> = [
    { // green
      backgroundColor: 'rgba(44,184,44,0.2)',
      borderColor: 'rgba(44,184,44,1)',
      pointBackgroundColor: 'rgba(44,184,44,1)',
      pointBorderColor: 'green',
      pointHoverBackgroundColor: 'green',
      pointHoverBorderColor: 'rgba(44,184,44,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  public randomize(): void {
    const _lineChartData: Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }


}
