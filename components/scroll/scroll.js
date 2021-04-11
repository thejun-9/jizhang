//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        
        navData:[
          {
            id:0,
            text: '餐饮',
            isActive:true,
            // url:"pages/main/main"
          },
          {
            id:1,
            text: '交通',
            isActive:false
          },
          {
            id:2,
            text: '购物',
            isActive:false
          },
         
         
          {
            id:3,
            text: '医疗',
            isActive:false
          },
          {
            id:4,
            text: '娱乐',
            isActive:false
          },
         
          {
            id:5,
            text: '其他',
            isActive:false
          }
        ],
        picfood:[
            {
                id:0,
                name:"三餐",
                isActive:true,
                url:"../../icon/shiwu1.png"
            },
            {
              id:0,
              name:"水果",
              isActive:false,
              url:"../../icon/shuiguo.png"
            },
            {
              id:1,
              name:"外卖",
              isActive:false,
              url:"../../icon/_waimai.png"
            },
            {
              id:0,
              name:"零食",
              isActive:false,
              url:"../../icon/lingshi.png"
            },
            {
              id:0,
              name:"烟酒",
              isActive:false,
              url:"../../icon/yanjiu.png"
            },
            
          ],
          pictravel:[
            {
                id:0,
                name:"公交地铁",
                isActive:true,
                url:"../../icon/gongjiao.png",
            },
            {
              id:0,
              name:"共享单车",
              isActive:false,
              url:"../../icon/gongxiangdanche.png"
            },
            {
              id:1,
              name:"私家车",
              isActive:false,
              url:"../../icon/sijiache.png"
            },
            {
              id:0,
              name:"打车",
              isActive:false,
              url:"../../icon/dache.png"
            },
            {
              id:0,
              name:"飞机火车",
              isActive:false,
              url:"../../icon/feijihuoche.png"
            },
            
          ],
        currentTab: 0,
        navScrollLeft: 0
    },
    //事件处理函数
    onLoad: function () {
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }


        wx.getSystemInfo({
            success: (res) => {
                this.setData({
                    pixelRatio: res.pixelRatio,
                    windowHeight: res.windowHeight,
                    windowWidth: res.windowWidth
                })
            },
        })       
    },
    switchNav(event){
        var cur = event.currentTarget.dataset.current; 
        let path= event.currentTarget.dataset.url;
        //每个tab选项宽度占1/5
        var singleNavWidth = this.data.windowWidth / 5;
        //tab选项居中                            
        this.setData({
            navScrollLeft: (cur - 2) * singleNavWidth
        })      
        if (this.data.currentTab == cur) {
            return false;
        } else {
            this.setData({
                currentTab: cur
            })
        }
        // wx.navigateTo({
        //   url: '/pages/demo02/demo02',
        // })
    },
    switchTab(event){
        var cur = event.detail.current;
        var singleNavWidth = this.data.windowWidth / 5;
        this.setData({
            currentTab: cur,
            navScrollLeft: (cur - 2) * singleNavWidth
        });
    },
    handleFood(e){
        const {index}=e.currentTarget.dataset;
        let {picfood}=this.data;
        var ename=this.data.picfood[index];
        var cur = e.detail.current;
        picfood.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
        this.setData(
          {
            picfood
          }
        )
         this.triggerEvent("send",{ename})
        
      },
    handleTravel(e){
        const {index}=e.currentTarget.dataset;
        let {pictravel}=this.data;
        pictravel.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
        this.setData(
          {
            pictravel
          }
        )
    }
})