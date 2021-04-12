// pages/yusuan/yusuan.js
Page({

  data: {
    part:[
      {
        id:0,
        name:"餐饮",
        isActive:false,
        money:0.00,
        leftmoney:0.00,
        url:"../../pages/canyin1",
        icon:"../../icon/_waimai.png"
      },
      {
        id:1,
        name:"交通",
        isActive:false,
        money:0.00,
        leftmoney:0.00,
        url:"../../pages/canyin1",
        icon:"../../icon/shezhi.png"
      }
    ]
  },

  handleTap(event){
    wx.navigateTo({
      url: '../../pages/demo1/demo1',
    })
  },
  method:{
   
    
    
  }
})