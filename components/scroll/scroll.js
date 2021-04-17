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
                isActive:false,
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
                isActive:false,
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
          picshop:[
            {
              id:0,
              name:"日用品",
              isActive:false,
              url:"../../icon/riyongpin.png",
          },
          {
            id:0,
            name:"美妆护肤",
            isActive:false,
            url:"../../icon/meizhuang.png"
          },
          {
            id:1,
            name:"数码",
            isActive:false,
            url:"../../icon/shuma.png"
          },
          {
            id:0,
            name:"家装",
            isActive:false,
            url:"../../icon/jiazhuang.png"
          },
          {
            id:0,
            name:"衣帽鞋包",
            isActive:false,
            url:"../../icon/yimaoxiebao.png"
          },
          {
            id:0,
            name:"电器",
            isActive:false,
            url:"../../icon/dianqi.png"
          },
          ],
          piccure:[
            {
              id:0,
              name:"药品",
              isActive:false,
              url:"../../icon/yaopin.png",
          },
          {
            id:0,
            name:"治疗",
            isActive:false,
            url:"../../icon/yiliao.png"
          },
          {
            id:1,
            name:"保健",
            isActive:false,
            url:"../../icon/baojian.png"
          },
          {
            id:1,
            name:"救护车",
            isActive:false,
            url:"../../icon/jiuhuche.png"
          }
            
          ],
          picfun:[
            {
              id:0,
              name:"休闲",
              isActive:false,
              url:"../../icon/xiuxian.png"
            },
            {
              id:1,
              name:"聚会",
              isActive:false,
              url:"../../icon/jvhui.png"
            },
            {
              id:0,
              name:"健身",
              isActive:false,
              url:"../../icon/jianshen.png"
            },
            {
              id:0,
              name:"约会",
              isActive:false,
              url:"../../icon/yuehui.png"
            },
            {
              id:0,
              name:"游戏",
              isActive:false,
              url:"../../icon/youxi.png"
            },

          ],
          picother:[
            {
              id:1,
              name:"旅游",
              isActive:false,
              url:"../../icon/lvyou.png"
            },
            {
              id:0,
              name:"宠物",
              isActive:false,
              url:"../../icon//chongwu.png"
            },
            {
              id:0,
              name:"丢失",
              isActive:false,
              url:"../../icon/diushi.png"
            },
            {
              id:0,
              name:"宝宝",
              isActive:false,
              url:"../../icon/baobao.png"
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
        var ename=this.data.pictravel[index];
        var cur = e.detail.current;
        pictravel.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
        this.setData(
          {
            pictravel
          }
        )
        this.triggerEvent("send",{ename});
    },
    handleshop(e)
    {
      const {index}=e.currentTarget.dataset;
        let {picshop}=this.data;
        var ename=this.data.picshop[index];
        var cur = e.detail.current;
        picshop.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
        this.setData(
          {
            picshop
          }
        )
        this.triggerEvent("send",{ename});
    },
    handlecure(e)
    {
      const {index}=e.currentTarget.dataset;
        let {piccure}=this.data;
        var ename=this.data.piccure[index];
        var cur = e.detail.current;
        piccure.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
        this.setData(
          {
            piccure
          }
        )
        this.triggerEvent("send",{ename});
    },
    handlefun(e){
      const {index}=e.currentTarget.dataset;
        let {picfun}=this.data;
        var ename=this.data.picfun[index];
        var cur = e.detail.current;
        picfun.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
        this.setData(
          {
            picfun
          }
        )
        this.triggerEvent("send",{ename});
    },
    handleother(e){
      const {index}=e.currentTarget.dataset;
        let {picother}=this.data;
        var ename=this.data.picother[index];
        var cur = e.detail.current;
        picother.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
        this.setData(
          {
            picother
          }
        )
        this.triggerEvent("send",{ename});
    }
})