import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import * as echarts from 'echarts';
import { StockListProvider } from '../../providers/stockList-provider';

/**
 * Generated class for the StockDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-stock-details',
  templateUrl: 'stock-details.html',
})
export class StockDetailsPage {
  stockChartPage:string ="stockChart";
  stockListInfo:any[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public stockListProvider:StockListProvider) {
  this.stockListInfo=this.stockListProvider.stockListData;
  }
  ionViewDidLoad() {
    this.initLineCandleStickChart();
  }
  private initLineCandleStickChart(){
  
    var rawData = [['2015/12/31','3570.47','3539.18','-33.69','-0.94%','3538.35','3580.6','176963664','25403106','-'],
    ['2015/7/31','3655.67','3663.73','-42.04','-1.13%','3620.17','3729.51','350955712','46047224','-']].reverse();
    var dates = rawData.map(function (item) {
        return item[0];
    });
    
    var data = rawData.map(function (item) {
        return [+item[1], +item[2], +item[5], +item[6], +item[7], +item[8]];
    });


let myChart = echarts.init (<HTMLCanvasElement> document.getElementById("lineChart")) ;
    var upColor = '#ec0000';
    var upBorderColor = '#8A0000';
   var downColor = '#00da3c';
   var downBorderColor = '#008F28';
    let optionChart ={
      backgroundColor: '#21202D',
    legend: {
        data: ['日K'],
        inactiveColor: '#777',
        textStyle: {
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            animation: false,
            type: 'cross',
            lineStyle: {
                color: '#376df4',
                width: 2,
                opacity: 1
            }
        }
    },
    xAxis: {
        type: 'category',
        data: dates,
        axisLine: { lineStyle: { color: '#8392A5' } }
    },
    yAxis: {
        scale: true,
        axisLine: { lineStyle: { color: '#8392A5' } },
        splitLine: { show: false }
    },
    grid: {
        bottom: 80
    },
    dataZoom: [{
        textStyle: {
            color: '#8392A5'
        },
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        dataBackground: {
            areaStyle: {
                color: '#8392A5'
            },
            lineStyle: {
                opacity: 0.8,
                color: '#8392A5'
            }
        },
        handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
        }
    }, {
        type: 'inside'
    }],
    animation: false,
    series: [
        {
            type: 'candlestick',
            name: '日K',
            data: data,
            // itemStyle: {
            //     normal: {
            //         color: '#FD1050',
            //         color0: '#0CF49B',
            //         borderColor: '#FD1050',
            //         borderColor0: '#0CF49B'
            //     }
            // }
        }
    ]
 
    };
    myChart.setOption(optionChart);
  }


 
 

}
