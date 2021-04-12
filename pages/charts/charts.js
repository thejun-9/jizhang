var wxCharts = require('../../utils/wxcharts-min');
var app = getApp();
var lineChart = null;
Page({
    data: {
      amoutList:[],
      date:'2021-04'
    },
    bindDateChange:function(e){
      console.log('picker发送选择改变，携带值为',e.detail.value)
      this.setData({
        date:e.detail.value
      })
      this.updateData();
    },
    touchHandler: function (e) {
        //console.log(lineChart.getCurrentDataIndex(e));
        lineChart.showToolTip(e, {
            // background: '#7cb5ec',
            format: function (item, category) {
                return category + '日' + item.name + ':' + item.data 
            }
        });
    },    
    createSimulationData: function () {
        var that=this;
        //console.log(that.data.amoutList);
        wx.request({
          url: 'http://127.0.0.1:8088/WxDemo/lineCanvas',
          data:{
            uid:'2',
            date:that.data.date
          },
          headers:{'Content-Type':'application/json'},
          success:function(res){
              that.data.amoutList=res.data;
              console.log(that.data.amoutList);//有数据
          }
      })
        console.log(that.data.amoutList);
        var categories = [];
        var data = that.data.amoutList;
        for (var i = 0; i < 31; i++) {
            categories.push(i + 1);
        }
        return {
            categories: categories,
            data: data
        }
    },
    updateData: function () {
        var simulationData = this.createSimulationData();
        //console.log(simulationData.data);//有数据
        var series = [{
            name: '收入',
            data: simulationData.data,
            format: function (val, name) {
                return val.toFixed(2) + '万';
            }
        }];
        lineChart.updateData({
            categories: simulationData.categories,
            series: series
        });
    },
    onLoad: function (e) {
        var windowWidth = 320;
        try {
            var res = wx.getSystemInfoSync();
            windowWidth = res.windowWidth;
        } catch (e) {
            console.error('getSystemInfoSync failed!');
        }
        var simulationData = this.createSimulationData();
        lineChart = new wxCharts({
            canvasId: 'lineCanvas',
            type: 'line',
            categories: simulationData.categories,
            animation: true,
            // background: '#f5f5f5',
            series: [{
                name: '收入',
                data: simulationData.data,
                format: function (val, name) {
                    return val.toFixed(2);
                }
            }, {
                name: '支出',
                data: [2, 0, 0, 3, 2, 4, 0, 0, 2, 0,2.5,1.8],
                format: function (val, name) {
                    return val.toFixed(2);
                }
            }],
            xAxis: {
                disableGrid: true
            },
            yAxis: {
                title: this.data.date+'支出收入详情(元)',
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
    }
});