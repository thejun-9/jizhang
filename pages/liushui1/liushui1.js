// pages/liushui1/liushui1.js
const utilApi=require('../../utils/promiseTest');
var app = getApp();

Page({
 
    /**
     * 页面的初始数据
     */
    data: {
        amoutList:[[7,2,-51.0,'其它','2020-09-05'],
        [7,2,-51.0,'其它','2020-09-05'],
        [7,2,-51.0,'其它','2020-09-05'],
                    [7,2,-51.0,'其它','2020-09-05'],
                    [11,2,76.0,'其它','2020-09-10'],
                    [11,2,76.0,'其它','2020-09-10'],
                    [13,2,78.0,'其它','2020-09-17'],
                    [13,2,78.0,'其它','2020-09-17']],
    accountinfo:[],
    date:'2020-05',
    space:'       ',
    condition:'amout',
    tabs:[
        {id:0,
        name:"日期升序",
        orderName:'account_date',
        isActive:true},
        {id:1,
        name:"日期降序 ",
        orderName:'account_date desc',
        isActive:false},
        {id:2,
        name:"金额升序 ",
        orderName:'amout',
        isActive:false},
        {id:3,
        name:"金额降序 ",
        orderName:'amout desc',
        isActive:false}
      ]
    },
    bindDateChange:function(e){
        this.setData({
            date:e.detail.value
        })
        this.onLoad()
    },
    handleItemTab(e){
        const {index}=e.currentTarget.dataset;
        let tabs=this.data.tabs;
        tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
        this.setData({tabs})
        /**
         * 用wx.request根据要求(月份，排序方式)请求数据
         */
        this.setData({
            condition:tabs[index].orderName
        })
        this.onLoad();
    },
    handleItem(e){
        //console.log(e);
        wx.setStorageSync('record', e.currentTarget.dataset);
        wx.navigateTo({
          url: '../../pages/update/update',
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
     //   console.log(app.globalData.uid)
        utilApi.requestPromise('http://127.0.0.1:8088/WxDemo/QueryAccountinfo?fuid='+app.globalData.uid+'&date='+this.data.date+'&condition='+this.data.condition) 
        // 使用.then处理结果 
        .then(res => { 
          this.setData({
            amoutList: res.data
          })
          //this.createCharts();
        }) 
       // console.log(this.data.amoutList)
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
      this.onLoad()
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
      wx.setStorage({
        key:"id",
        data:this.data.amoutList
      })
      wx.navigateTo({
        url: '../../pages/chaojiliushui/chaojiliushui',
      })
    }
})