// pages/page1/page1.js
var mylist = [];
var total_get=0;
var total_pay=0;
var total_remain=0;
var cal;
var total_month;
var total_year;
const utilApi=require('../../utils/promiseTest');
var app = getApp();
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    data1:[]/*[[7,2,'其它',-51.0,'2020-09-05'],
    [7,2,'其它',-51.0,'2020-09-05'],
    [7,2,'其它',-51.0,'2020-09-05'],
                [7,2,'其它',-51.0,'2020-09-05'],
                [11,2,'其它',76.0,'2020-09-10'],
                [11,2,'其它',76.0,'2020-09-10'],
                [13,2,'其它',78.0,'2020-09-17'],
                [13,2,'其它',78.0,'2020-09-17']]*/,
    amoutList:[],
    condition:'account_date desc',
    date:'2020-05',
    list:[][5],
    str:"",
   // mylist:[{date:'2020-09-10',type:'其他',mon:'-51.0',change:-1}]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    utilApi.requestPromise('http://127.0.0.1:8088/WxDemo/QueryAccountinfo?fuid='+app.globalData.uid+'&date='+this.data.date+'&condition='+this.data.condition) 
    // 使用.then处理结果 
    .then(res => { 
      this.setData({
        amoutList: res.data
      })
      //this.createCharts();
    }) 
    this.data.data1=wx.getStorageSync('id')
    console.log(this.data.amoutList)

    let j=0;
    let total_mon=0;
    let pay_mon=0;
    let get_mon=0;
    let str="sefes";
    total_month = this.data.data1[0][4].substring(5,7);
    total_year = this.data.data1[0][4].substring(0,4);
    let datelist = ['周日','周一','周二','周三','周四','周五','周六',];
    for(let i=0;i<this.data.data1.length;i++){
      if(i+1<this.data.data1.length&&i>=j&&this.data.data1[i][4]==this.data.data1[i+1][4]){
        total_mon = this.data.data1[i][2]+this.data.data1[i+1][2];
        if(this.data.data1[i][2]>0){
          get_mon += this.data.data1[i][2];
        }else{
          pay_mon += -this.data.data1[i][2];
        }
        if(this.data.data1[i+1][2]>0){
          get_mon += this.data.data1[i+1][2];
        }else{
          pay_mon += -this.data.data1[i+1][2];
        }
        for(j=i+2;j<this.data.data1.length&&this.data.data1[j][4]==this.data.data1[j-1][4];j++){
          if(this.data.data1[j][4]==this.data.data1[j-1][4]){
            total_mon = total_mon+this.data.data1[j][2];
          }
          if(this.data.data1[j][2]>0){
            get_mon += this.data.data1[j][2];
          }else{
            pay_mon += -this.data.data1[j][2];
          }
        }
        mylist.push({
          data:this.data.data1[i][4].substring(0,7),
          day:this.data.data1[i][4].substring(8,10),
          week:datelist[new Date(this.data.data1[i][4]).getDay()],
          get:get_mon,
          pay:pay_mon,
          type:"",
          mon:total_mon,
          change:0
        })
        mylist.push({
          data:this.data.data1[i][4],
          day:this.data.data1[i][4].substring(8,10),
          week:datelist[new Date(this.data.data1[i][4]).getDay()],
          get:0,
          pay:0,
          type:this.data.data1[i][3],
          mon:this.data.data1[i][2],
          change:1
        })
        total_pay+=pay_mon;
        total_get+=get_mon;
        total_remain+=total_mon;
        get_mon=0;
        pay_mon=0;
        total_mon=0;
      }else if((i+1<this.data.data1.length&&i-1>=0&&this.data.data1[i][4]!=this.data.data1[i+1][4]&&this.data.data1[i][4]!=this.data.data1[i-1][4])||(i==0&&i+1<this.data.data1.length&&this.data.data1[i][4]!=this.data.data1[i+1][4])||(i==this.data.data1.length-1&&i-1>=0&&this.data.data1[i][4]!=this.data.data1[i-1][4])){
        if(this.data.data1[i][2]>0){
          get_mon = this.data.data1[i][2];
        }else{
          pay_mon = -this.data.data1[i][2];
        }
        mylist.push({
          data:this.data.data1[i][4].substring(0,7),
          day:this.data.data1[i][4].substring(8,10),
          week:datelist[new Date(this.data.data1[i][4]).getDay()],
          get:get_mon,
          pay:pay_mon,
          type:"",
          mon:this.data.data1[i][2],
          change:0
        })
        mylist.push({
          data:this.data.data1[i][4],
          day:this.data.data1[i][4].substring(8,10),
          week:datelist[new Date(this.data.data1[i][4]).getDay()],
          get:0,
          pay:0,
          type:this.data.data1[i][3],
          mon:this.data.data1[i][2],
          change:1
        })
        total_pay+=pay_mon;
        total_get+=get_mon;
        total_remain+=this.data.data1[i][2];
        get_mon=0;
        pay_mon=0;
      }else{
        mylist.push({
          data:this.data.data1[i][4],
          day:this.data.data1[i][4].substring(8,10),
          week:datelist[new Date(this.data.data1[i][4]).getDay()],
          get:0,
          pay:0,
          type:this.data.data1[i][3],
          mon:this.data.data1[i][2],
          change:1
        })
      }
    }
    this.setData({
      mylist,
      total_get,
      total_pay,
      total_remain,
      total_year,
      total_month
    })
    
    let data11=this.data.data1[1][4];
    let week=datelist[new Date(data11).getDay()]
    console.log(week)

    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  switch(){
    wx.switchTab({
      url: '../../pages/liushui1/liushui1',
    })
  }
})