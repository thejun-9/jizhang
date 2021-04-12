// pages/yusuan/yusuan.js
Page({

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
  },

  handleTap(e){
    const {index}=e.currentTarget.dataset;
    let Url=this.data.part[index].url;
    if(index==0)
     {  wx.navigateTo({
         url: '../../pages/sancan/sancan',
     })
    }
    else if (index==1) {
      wx.navigateTo({
        url: '../../pages/demo1/demo1',
    })
    } 
    else if (index==2){
      wx.navigateTo({
        url: '../../pages/demo1/demo1',
    })
    }
    else if (index==3)
    {
      wx.navigateTo({
        url: '../../pages/demo1/demo1',
    })
    }
    else if (index==4)
    {
      wx.navigateTo({
        url: '../../pages/demo1/demo1',
    })
    }
    else if (index==5)
    {
      wx.navigateTo({
        url: '../../pages/demo1/demo1',
    })
    }
    else{
      wx.navigateTo({
        url: '../../pages/demo1/demo1',
    })
    }
    
   

    
  },
  method:{
   
    
    
  }
})