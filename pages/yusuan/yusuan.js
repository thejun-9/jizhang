// pages/yusuan/yusuan.js
const utilApi=require('../../utils/promiseTest');
const app= getApp()
Page({

  data: {
    amoutList:'',
    outcomeList:'',
    sumBudget:0,
    sumOutcome:0,
    leftBudget:0,
    index:0,
    fuid:app.globalData.uid,
    date:'2020-05',
    part:[
      {
        id:0,
        name:"餐饮",
        type:'food',
        isActive:false,
        money:0,
        outcomeMoney:0,
        url:"../../pages/canyin1",
        icon:"../../icon/_waimai.png"       
      },
      {
        id:1,
        name:"交通",
        type:'traffic',
        isActive:false,
        money:0,
        outcomeMoney:0,
        url:"../../pages/canyin1",
        icon:"../../icon/jiaotong.png"
      },
      {
        id:2,
        name:"购物",
        type:'shopping',
        isActive:false,
        money:0,
        outcomeMoney:0,
        url:"../../pages/canyin1",
        icon:"../../icon/gouwu.png"       
      },
      {
        id:3,
        name:"医疗",
        type:'medicine',
        isActive:false,
        money:0,
        outcomeMoney:0,
        url:"../../pages/canyin1",
        icon:"../../icon//yiliao2.png"
      },
      {
        id:4,
        name:"娱乐",
        type:'entertainment',
        isActive:false,
        money:0,
        outcomeMoney:0,
        url:"../../pages/canyin1",
        icon:"../../icon/yule.png"       
      },
      {
        id:5,
        name:"其它",
        type:'others',
        isActive:false,
        money:0,
        outcomeMoney:0,
        url:"../../pages/canyin1",
        icon:"../../icon/qita.png"       
      }],
    content:0
  },
        // 生命周期函数onload用于监听页面加载 
        onLoad: function() {
          var that=this;
          for(let i=0;i<that.data.part.length;i++){
            var type=that.data.part[i].type
            utilApi.requestPromise('http://127.0.0.1:8088/WxDemo/QueryBudget?fuid='+that.data.fuid+'&date='+that.data.date+'&type='+type) 
            .then(res => { 
              this.setData({
                amoutList: res.data,
                index:i//index必须在这里更改，否则报错
              })
              this.setBudget();
            }) 
            utilApi.requestPromise('http://127.0.0.1:8088/WxDemo/QueryBudgetLeft?fuid='+that.data.fuid+'&date='+that.data.date+'&type='+type) 
            .then(res => { 
              this.setData({
                outcomeList: res.data,
              })
              this.setOutcomeMoney();
            })  
            //console.log(this.data.sumBudget)
          }
        },
    
        setBudget:function(){
          var sum=0;
          for (let i = 0; i < this.data.amoutList[0].length; i++) {
            sum+=this.data.amoutList[0][i];
          }
          var val=this.data.index;
          var index="part["+val+"].money";
          var oldSumBudget=this.data.sumBudget;
          this.setData({
            [index]:sum,
            sumBudget:oldSumBudget+sum,
          })
        },

        setOutcomeMoney:function(){
          var sum=0;
          for (let i = 0; i < this.data.outcomeList[0].length; i++) {
            sum+=this.data.outcomeList[0][i];
          }      
          var val=this.data.index;
          var index="part["+val+"].outcomeMoney";
          var oldSumOutcome=this.data.sumOutcome;
          var sumBudget=this.data.sumBudget;
          this.setData({
            [index]:sum,
            sumOutcome:oldSumOutcome+sum,
            leftBudget:sumBudget-(oldSumOutcome+sum),
          })
        },
 
    /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.onLoad();
  },

  //日期选择器
  bindDateChange:function(e){
    //console.log('picker发送选择改变，携带值为',e.detail.value)
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
        url: '../../pages/jiaotong/jiaotong?date='+this.data.date,
    })
    } 
    else if (index==2){
      wx.navigateTo({
        url: '../../pages/gouwu/gouwu?date='+this.data.date,
    })
    }
    else if (index==3){
      wx.navigateTo({
        url: '../../pages/yiliao/yiliao?date='+this.data.date,
    })
    }
    else if (index==4)
    {
      wx.navigateTo({
        url: '../../pages/yule/yule?date='+this.data.date,
    })
    }

    else{
      wx.navigateTo({
        url: '../../pages/qita/qita',
    })
    }
    
  },
})