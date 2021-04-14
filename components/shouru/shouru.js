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
            text: '职业收入',
            isActive:false,
            // url:"pages/main/main"
          },
          {
            id:1,
            text: '其他收入',
            isActive:false
          }
        ],
        picfood:[
          {
            id:0,
            name: '工资',
            isActive:false,
            url:"../../icon/gongzi.png"
          },
          {
            id:1,
            name: '利息',
            isActive:false,
            url:"../../icon/lixi.png"
          },
          {
            id:0,
            name:"投资",
            isActive:false,
            url:"../../icon/touzi.png"
          },
          {
            id:1,
            name:"加班",
            isActive:false,
            url:"../../icon/jiaban.png"
          },
          {
            id:0,
            name:"生意",
            isActive:false,
            url:"../../icon/shengyi.png"
          },
          {
            id:0,
            name:"奖金",
            isActive:false,
            url:"../../icon/jiangjin.png"
          },
            
          ],
          pictravel:[
            {
                id:0,
                name:"礼金",
                isActive:false,
                url:"../../icon/lijin.png",
            },
            {
              id:0,
              name:"中奖",
              isActive:false,
              url:"../../icon/zhongjiang.png"
            },
            {
              id:1,
              name:"抢红包",
              isActive:false,
              url:"../../icon/qianghongbao.png"
            },
            {
              id:0,
              name:"家人给钱",
              isActive:false,
              url:"../../icon/jiarengeiqian.png"
            },
            {
              id:0,
              name:"退税",
              isActive:false,
              url:"../../icon/tuishui.png"
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
         this.triggerEvent("send",{ename});
    
        
      },
    handleTravel(e){
        const {index}=e.currentTarget.dataset;
        let {pictravel}=this.data;
        pictravel.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
        var ename=this.data.pictravel[index];
        var cur = e.detail.current;
        this.setData(
          {
            pictravel
          }
        )
        this.triggerEvent("send",{ename});
    }
})