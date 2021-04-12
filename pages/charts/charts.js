var wxCharts = require('../../utils/wxcharts-min');
var lineChart = null;

const utilApi=require('../../utils/promiseTest');
const app = getApp();

Page({
  data: {
    amoutList:[]
  },
  //loadMyData函数用于打印myData的值 
  loadMyData() {
    console.log('获取到的数据为:' + this.data.amoutList)
  },
  createCharts:function(){
    var that=this;
    console.log(this.data.amoutList);
    var windowWidth = 320;
        try {
            var res = wx.getSystemInfoSync();
            windowWidth = res.windowWidth;
        } catch (e) {
            console.error('getSystemInfoSync failed!');
        }
        //var simulationData = this.createSimulationData();
        lineChart = new wxCharts({
            canvasId: 'lineCanvas',
            type: 'line',
            categories: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
            animation: true,
            // background: '#f5f5f5',
            series: [{
                name: '收入',
                data: that.data.amoutList[0],
                format: function (val, name) {
                  return val.toFixed(2);
                }
            }, {
                name: '支出',
                data: that.data.amoutList[1],
                format: function (val, name) {
                    return val.toFixed(2);
                }
            }],
            xAxis: {
                disableGrid: true
            },
            yAxis: {
                title:'2020年5月支出收入详情(元)',
                format: function (val) {
                    return val.toFixed(2);
                },
                min: 0
            },
            width: windowWidth,
            height: 200,
            dataLabel: false,
            dataPointShape: true,
            extra: {
                lineStyle: 'curve'
            }
        });
  },
  // 生命周期函数onload用于监听页面加载 
  onLoad: function() {
    utilApi.requestPromise('http://127.0.0.1:8088/WxDemo/lineCanvas?uid=2&date=2020-05') 
    // 使用.then处理结果 
    .then(res => { 
      this.setData({
        amoutList: res.data
      })
      console.log(this.data.amoutList)
      this.loadMyData()
      this.createCharts();
    }) 
  },
  touchHandler: function (e) {
    console.log(lineChart.getCurrentDataIndex(e));
    lineChart.showToolTip(e, {
        // background: '#7cb5ec',
        format: function (item, category) {
            return category + '日 ' + item.name + ':' + item.data 
        }
    });
},   
});
