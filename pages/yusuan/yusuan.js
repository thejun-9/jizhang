// pages/yusuan/yusuan.js
const utilApi=require('../../utils/promiseTest');
const app= getApp()
Page({

  data: {
    amoutList:'',
    outcomeList:'',
    type:'food',
    fuid:'2',
    date:'2021-04',
    part:[
      {
        id:0,
        name:"餐饮",
        isActive:false,
        money:0,
        outcomeMoney:0,
        url:"../../pages/canyin1",
        icon:"../../icon/_waimai.png"       
      },
      {
        id:1,
        name:"交通",
        isActive:false,
        money:0.00,
        outcomeMoney:0.00,
        url:"../../pages/canyin1",
        icon:"../../icon/shezhi.png"
      }
    ],
    content:0
  },
        // 生命周期函数onload用于监听页面加载 
        onLoad: function() {
          //console.log(app.globalData.uid)
          var that=this;
          utilApi.requestPromise('http://127.0.0.1:8088/WxDemo/QueryBudget?fuid='+that.data.fuid+'&date='+that.data.date+'&type='+that.data.type) 
          .then(res => { 
            this.setData({
              amoutList: res.data
            })
            this.setBudget();
          }) 
          utilApi.requestPromise('http://127.0.0.1:8088/WxDemo/QueryBudgetLeft?fuid='+that.data.fuid+'&date='+that.data.date+'&type='+that.data.type) 
          .then(res => { 
            this.setData({
              outcomeList: res.data
            })
            this.setLeftMoney();
          }) 
        },
    
        setBudget:function(){
          var sum=0;
          for (let i = 0; i < this.data.amoutList[0].length; i++) {
            sum+=this.data.amoutList[0][i];
          }
          var val;
          switch(this.data.type){
            case 'food':val=0;break;
            case 'traffic':val=1;break;
          }
          var index="part["+val+"].money";
          this.setData({
            [index]:sum,
          })
          //console.log(sum);
        },

        setLeftMoney:function(){
          var sum=0;
          for (let i = 0; i < this.data.outcomeList[0].length; i++) {
            sum+=this.data.outcomeList[0][i];
          }
          var val;
          switch(this.data.type){
            case 'food':val=0;break;
            case 'traffic':val=1;break;
          }
          var index="part["+val+"].outcomeMoney";
          this.setData({
            [index]:sum,
          })
          //console.log(sum);
        },

              //日期选择器
  bindDateChange:function(e){
    console.log('picker发送选择改变，携带值为',e.detail.value)
    this.setData({
        date:e.detail.value
    })
    this.onLoad()
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
    if(index==0){  
      wx.navigateTo({
        url: '../../pages/sancan/sancan?date='+this.data.date,
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