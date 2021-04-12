// pages/sancan/sancan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    part:[
      {
        id:0,
        name:"餐饮",
        isActive:false,
        money:100,
        leftmoney:100,
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

  }

  
})