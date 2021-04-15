Page({

  /**
   * 页面的初始数据
   */
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
    
    ]
  },

  select: function(e) {
     console.log(e.detail);
     if(e.detail.id==0)
     {
       wx.redirectTo({
        url: '../../pages/liushui/liushui'
        })
     }else if(e.detail.id==1)
     {
      wx.redirectTo({
        url: '../../pages/liushui/liushui'
        })
     }else{
      wx.redirectTo({
        url: '../../pages/liushui/liushui'
        })
     }


  }

})