// pages/yusuan/yusuan.js
const app= getApp()
Page({

  data: {
    part:[
      {
        id:0,
        name:"餐饮",
        isActive:false,
        money:0,
        leftmoney:0,
        url:"../../pages/canyin1",
        icon:"../../icon/canyin.png"       
      },
      {
        id:1,
        name:"交通",
        isActive:false,
        money:0,
        leftmoney:0,
        url:"../../pages/canyin1",
        icon:"../../icon/jiaotong.png"
      },
      {
        id:0,
        name:"购物",
        isActive:false,
        money:0,
        leftmoney:0,
        url:"../../pages/canyin1",
        icon:"../../icon/gouwu.png"       
      },
      {
        id:1,
        name:"医疗",
        isActive:false,
        money:0,
        leftmoney:0,
        url:"../../pages/canyin1",
        icon:"../../icon//yiliao2.png"
      },
      {
        id:0,
        name:"娱乐",
        isActive:false,
        money:0,
        leftmoney:0,
        url:"../../pages/canyin1",
        icon:"../../icon/yule.png"       
      },
      {
        id:1,
        name:"其他",
        isActive:false,
        money:0.00,
        leftmoney:0.00,
        url:"../../pages/canyin1",
        icon:"../../icon/qita.png"
      }
    ],
    content:0
  },
  onShow: function (options) {
    //  console.log(app.globalData.content) //打印options,可以看到title的值可以获取到
    // var content=this.data.content;
    this.setData({
    content: app.globalData.content //为页面中title赋值
    })

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
        url: '../../pages/jiaotong/jiaotong',
    })
    } 
    else if (index==2){
      wx.navigateTo({
        url: '../../pages/gouwu/gouwu',
    })
    }
    else if (index==3)
    {
      wx.navigateTo({
        url: '../../pages/yiliao/yiliao',
    })
    }
    else if (index==4)
    {
      wx.navigateTo({
        url: '../../pages/yule/yule',
    })
    }

    else{
      wx.navigateTo({
        url: '../../pages/qita/qita',
    })
    }
    
   

    
  },
  method:{
   
    
    
  }
})