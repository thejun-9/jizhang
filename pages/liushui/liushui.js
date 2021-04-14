// pages/zhichu/zhichu.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    zongzhichu: 2345,
    zongshouru: 3456,
    accountinfo:[[1,1,-77,"其他","2020-04-01"],[1,1,28,"其他","2020-04-01"],[3,1,-32,"其他","2020-04-01"],[4,1,72,"其他","2020-04-03"],
    [5,1,81,"其他","2020-04-03"],[7,1,-51,"其他","2020-04-03"],
    [8,1,-70,"其他","2020-04-05"],[9,1,-77,"其他","2020-04-05"],
    [10,1,-38,"其他","2020-04-07"],[11,1,76,"其他","2020-04-07"]],
    accountinfo_map:new Map()
    },
    
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    let accountinfo=this.data.accountinfo;
    let accountinfo_map=new Map();
    for(let i = 0; i < accountinfo.length;i++){
      if(!accountinfo_map.has(accountinfo[i][4])){
        accountinfo_map.set(accountinfo[i][4],[accountinfo[i]]);
      }
      else{
        accountinfo_map.get(accountinfo[i][4]).push(accountinfo[i]);
      }
    }
    that.setData({accountinfo_map : accountinfo_map});
    console.log(accountinfo_map);
  },
  /*hasKey = function(map, key){
    for(let i = 0;i < )
  }*/
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