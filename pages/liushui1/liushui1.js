// pages/liushui1/liushui1.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
    accountinfo:[[1,1,-77,"其他","2020-04-01"],[2,1,28,"其他","2020-04-01"],
    [3,1,-32,"其他","2020-04-01"],[4,1,72,"其他","2020-04-03"],
    [5,1,81,"其他","2020-04-03"],[7,1,-51,"其他","2020-04-03"],
    [8,1,-70,"其他","2020-04-05"],[9,1,-77,"其他","2020-04-05"],
    [10,1,-38,"其他","2020-04-07"],[11,1,76,"其他","2020-04-07"],
    [10,1,-38,"其他","2020-04-07"],[11,1,76,"其他","2020-04-07"],
    [10,1,-38,"其他","2020-04-07"],[11,1,76,"其他","2020-04-07"]],
    account_date:'2021-04',
    space:'       ',
    tabs:[
        {id:0,
        name:"日期升序",
        isActive:true},
        {id:1,
        name:"日期降序",
        isActive:false},
        {id:2,
        name:"金额升序",
        isActive:false},
        {id:3,
        name:"金额降序",
        isActive:false}
      ]
    },
    bindDateChange:function(e){
        this.setData({
            account_date:e.detail.value
        })
    },
    handleItemTab(e){
        const {index}=e.currentTarget.dataset;
        let tabs=this.data.tabs;
        tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
        this.setData({tabs})
        /**
         * 用wx.request根据要求(月份，排序方式)请求数据
         */
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

    }
})