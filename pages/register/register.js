var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    showContent: '',
    phone:"",
    password:"",
    passwordAgain:"",
    isHidden:true,
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

  passwordInputAgain:function(e){
    this.setData({
      passwordAgain: e.detail.value
    })
  },

  register: function(){
    const _this = this
    if(_this.data.phone.length!=11){
      _this.setData({
        showContent:'手机号格式错误'
      })
    }else if(_this.data.password.length==0){
      _this.setData({
        showContent:'密码不为空'
      })
    }else if(_this.data.password.length<6){
      _this.setData({
        showContent:'密码至少为6位'
      })
    }else if(_this.data.password!=_this.data.passwordAgain){
      _this.setData({
        showContent:'两次输入密码不一致'
      })
    }else{
      wx.request({
        url: 'http://127.0.0.1:8088/WxDemo/AddUserinfo',
        method:'get',
        data: {
          phone:_this.data.phone,
          password:_this.data.password
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          console.log(res.data)
            _this.setData({
              showContent: res.data,
              //isHidden:false
            })
            if(res.data!='error'){
            app.globalData.uid=_this.data.showContent;
            console.log(app.globalData.uid);
            wx.switchTab({
              url: '../../pages/jiyibi/jiyibi',
            })
          }
        }
      })
      this.start();
    }
    //console.log(_this.data.showContent)
  },

  start:function(){

    wx.switchTab({
      url: '../../pages/jiyibi/jiyibi',
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