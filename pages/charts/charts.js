var wxCharts = require('../../utils/wxcharts-min');
var lineChart = null;
var radarChartOutcome = null;
var radarChartIncome = null;

const utilApi=require('../../utils/promiseTest');
const app = getApp();

Page({
  data: {
    selectArray: [{
      id:0,
      "text": "折线图"
    }, 
    {
      id:1,
      "text": "支出雷达图"
    },
    {
      id:2,
       "text":'收入雷达图',
    },    
    ],
    amoutList:[],
    date:'2021-04',
    lineHidden:false,
    radarOutcomeHidden:true,
    radarIncomeHidden:true,
    noMessage:true,
    id:0
  },
  //日期选择器
  bindDateChange:function(e){
    console.log('picker发送选择改变，携带值为',e.detail.value)
    this.setData({
        date:e.detail.value
    })
    this.onLoad(this.data.id)
  },
  //loadMyData函数用于打印myData的值 
  loadMyData() {
    //console.log('获取到的数据为:' + this.data.amoutList[5])
  },
  select: function(e) {
    this.setData({
      id:e.detail.id
    })
    if(this.data.id==0){
      this.setData({
        lineHidden:false,
        radarOutcomeHidden:true,
        radarIncomeHidden:true
      })
    }else if(this.data.id==1){
      this.setData({
        lineHidden:true,
        radarOutcomeHidden:false,
        radarIncomeHidden:true
      })
    }else{
      this.setData({
        lineHidden:true,
        radarOutcomeHidden:true,
        radarIncomeHidden:false
      })
    }
    this.onLoad(this.data.id);
  },
  createCharts:function(){
    var that=this;
    var windowWidth = 320;
    try {
      var res = wx.getSystemInfoSync();
      windowWidth = res.windowWidth;
    } catch (e) {
      console.error('getSystemInfoSync failed!');
    }
    lineChart = new wxCharts({
      canvasId: 'lineCanvas',
      type: 'line',
      categories: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
      animation: true,
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
        title:that.data.date+'支出收入详情(元)',
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
    if(that.data.amoutList[4].length==0){
      if(this.data.id==1){
        this.setData({
          noMessage:false,
          radarOutcomeHidden:true
        })
      }
    }else{
      this.setData({
        noMessage:true
      })
      radarChartOutcome = new wxCharts({
        canvasId: 'radarCanvasOutcome',
        type: 'radar',
        categories: that.data.amoutList[4],
        series: [{
          name: '支出雷达图',
          data: that.data.amoutList[5]
        }],
        width: 300,
        height: 200
      });
    }
    if(that.data.amoutList[2].length==0){
      if(this.data.id==2){
        this.setData({
          noMessage:false,
          radarIncomeHidden:true
        })
      }
    }else{
      this.setData({
        noMessage:true
      })
      radarChartIncome = new wxCharts({
        canvasId: 'radarCanvasIncome',
        type: 'radar',
        categories: that.data.amoutList[2],
        series: [{
          name: '收入雷达图',
          data: that.data.amoutList[3]
        }],
        width: 300,
        height: 200
      });
    }
  },
  // 生命周期函数onload用于监听页面加载 
  onLoad: function(options) {
    //console.log(options)
      var id=options
      this.setData({
        id:id
      })
    if(this.data.id==0){
      this.setData({
        lineHidden:false
      })
    }else if(this.data.id==1){
      this.setData({
        radarOutcomeHidden:false
      })
    }else if(this.data.id==2){
      this.setData({
        radarIncomeHidden:false
      })
    }
    /*console.log(this.data.lineHidden)
    console.log(this.data.radarOutcomeHidden)
    console.log(this.data.radarIncomeHidden)*/
    utilApi.requestPromise('http://127.0.0.1:8088/WxDemo/lineCanvas?uid='+app.globalData.uid+'&date='+this.data.date) 
    // 使用.then处理结果 
    .then(res => { 
      this.setData({
        amoutList: res.data
      })
      this.createCharts();
    }) 
  },
  touchHandler: function (e) {
    console.log(lineChart.getCurrentDataIndex(e));
    lineChart.showToolTip(e, {
        format: function (item, category) {
            return category + '日 ' + item.name + ':' + item.data 
        }
    });
},   
});
