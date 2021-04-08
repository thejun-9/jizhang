// components/tabs/tabs.js
const app = getApp();
var startX, endX;
var moveFlag = true;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // aaa:{
    //   type:String,
    //   value:""
    // }

  },

  /**
   * 组件的初始数据
   */
  data: {
      tabs:[
      {
        id:0,
        name:"餐饮",
        isActive:true
      },
      {
        id:1,
        name:"交通",
        isActive:false
      },
      {
        id:0,
        name:"购物",
        isActive:false
      },
      {
        id:0,
        name:"居家",
        isActive:false
      }
    ]
  },
  

  /**
   * 组件的方法列表
   */
  
  methods: {
    handleItemTap(e){
      const {index}=e.currentTarget.dataset;
      let {tabs}=this.data;
      tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
      this.setData(
        {
          tabs
        }
      )
      
    },
    touchStart: function (e) {
      startX = e.touches[0].pageX; // 获取触摸时的原点
      moveFlag = true;
    },
    // 触摸移动事件
    touchMove: function (e) {
      endX = e.touches[0].pageX; // 获取触摸时的原点
      if (moveFlag) {
        if (endX - startX > 50) {
          console.log("move right");
          this.move2right();
          moveFlag = false;
        }
        if (startX - endX > 50) {
          console.log("move left");
          this.move2left();
          moveFlag = false;
        }
      }
  
    },
    // 触摸结束事件
    touchEnd: function (e) {
      moveFlag = true; // 回复滑动事件
      
    },
  
    move2left() {
      var that = this;
      
      that.setData({
        content: "move2left"
      });
    },
    move2right() {
      var that = this;
      that.setData({
        content: "move2right"
      });
    },
  
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
    
    },
  
    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
    
    }
  }
})
