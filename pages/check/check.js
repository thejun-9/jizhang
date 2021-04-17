var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    showContent: '',
    phone:"",
    password:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  phoneInput: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },

  passwordInput:function(e){
    this.setData({
      password: e.detail.value
    })
  },
  
  login: function(){
    const _this = this
    wx.request({
      url: 'http://127.0.0.1:8088/WxDemo/Check',
      method:'get',
      data: {
        phone:_this.data.phone,
        password:_this.data.password,
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        //console.log(res.data)
        _this.setData({
          showContent: res.data,
        })
        if(res.data!='该手机号未注册'&&res.data!='密码错误'){
          app.globalData.uid=_this.data.showContent
          console.log(app.globalData.uid)
          wx.switchTab({
            url: '../../pages/jiyibi/jiyibi'
          })
        }
      }
    })
  },

  //跳转到注册页
  register:function(){
    wx.redirectTo({
      url: '../../pages/register/register'
    })
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