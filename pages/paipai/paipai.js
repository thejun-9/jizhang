
const app = getApp();
var inputVal = '';
var msgList = [];
/**
 * 初始化数据
 */
var plugin = requirePlugin("chatbot");
var bgam = wx.createInnerAudioContext();
var id = 1

App({
  onLaunch: function() {
    console.log(plugin, "+++");
    plugin.init({
        appid: "Qhlze7racViunn4vNTNtT4lSHoq5qh", //小程序示例账户，仅供学习和参考
        success: () => {},
        fail: error => {}
    });
  }
});


function initData(that) {
 inputVal = '';
 
 msgList = [{
   speaker: 'server',
   contentType: 'text',
   content: '欢迎来到paipai记账φ(゜▽゜*)♪'
  }
 ]
 that.setData({
  msgList,
  inputVal
 })
}
Page({
 
 /**
  * 页面的初始数据
  */
 data: {
  str:"",
  date:'2021-04-15'
 },
 
 /**
  * 生命周期函数--监听页面加载
  */
 onLoad: function(options) {
 
  initData(this);
  this.setData({
   //cusHeadIcon: app.globalData.userInfo.avatarUrl,
  });
 },
 
 /**
  * 生命周期函数--监听页面显示
  */
 onShow: function() {
 
 },
 
 /**
  * 页面相关事件处理函数--监听用户下拉动作
  */
 onPullDownRefresh: function() {
 
 },
 
 /**
  * 页面上拉触底事件的处理函数
  */
 onReachBottom: function() {
 
 },
 
 /**
  * 获取聚焦
  */
 focus: function(e) {
  
 },
 
 //失去聚焦
 blur: function(e) {
  
 },
 handleinput(e){
    this.setData({
      str:e.detail.value
    })
 },
 handletap(e){
  msgList.push({
    speaker: 'customer',
    contentType: 'text',
    content: this.data.str
   })
   let str1,str2,kind,mon
   let reg = /^[0-9]+\.?[0-9]*$/;
   str1= this.data.str
   if(str1.substring(str1.length-1,str1.length)=="元"){
   if(str1.substring(0,2)=="三餐"&&reg.test(str1.substring(2,str1.length-1))){
      str2="只要你开心，吃多少都没关系~~"
      kind=str1.substring(0,2)
      mon=-parseFloat(str1.substring(2,str1.length-1))
      
   }else if(str1.substring(0,2)=="水果"&&reg.test(str1.substring(2,str1.length-1))){
    str2="是时候补充一波维生素ABCDEFG了~"
    kind=str1.substring(0,2)
    mon=-parseFloat(str1.substring(2,str1.length-1))
   }else if(str1.substring(0,2)=="外卖"&&reg.test(str1.substring(2,str1.length-1))){
    str2="餐饮业经济增长，biu!"
    kind=str1.substring(0,2)
    mon=-parseFloat(str1.substring(2,str1.length-1))
   }else if(str1.substring(0,2)=="零食"&&reg.test(str1.substring(2,str1.length-1))){
    str2="介不介意我帮你消灭一点呢，嘿嘿"
    kind=str1.substring(0,2)
    mon=-parseFloat(str1.substring(2,str1.length-1))
   }else if(str1.substring(0,2)=="烟酒"&&reg.test(str1.substring(2,str1.length-1))){
    str2="这是...有钱人家的生活？！"
    kind=str1.substring(0,2)
    mon=-parseFloat(str1.substring(2,str1.length-1))
   }else if(str1.substring(0,4)=="公交地铁"&&reg.test(str1.substring(4,str1.length-1))){
    str2="读万卷书不如行万里路"
    kind=str1.substring(0,4)
    mon=-parseFloat(str1.substring(4,str1.length-1))
   }else if(str1.substring(0,4)=="共享单车"&&reg.test(str1.substring(4,str1.length-1))){
    str2="生命在于运动！"
    kind=str1.substring(0,4)
    mon=-parseFloat(str1.substring(4,str1.length-1))
   }else if(str1.substring(0,3)=="私家车"&&reg.test(str1.substring(3,str1.length-1))){
    str2="来一场说走就走的旅行吧！"
    kind=str1.substring(0,3)
    mon=-parseFloat(str1.substring(3,str1.length-1))
   }else if(str1.substring(0,2)=="打车"&&reg.test(str1.substring(2,str1.length-1))){
    str2="世界这么大，我想陪你去看看~"
    kind=str1.substring(0,2)
    mon=-parseFloat(str1.substring(2,str1.length-1))
   }else if(str1.substring(0,4)=="飞机火车"&&reg.test(str1.substring(4,str1.length-1))){
    str2="这钱花得真值！"
    kind=str1.substring(0,4)
    mon=-parseFloat(str1.substring(4,str1.length-1))
   }else if(str1.substring(0,3)=="日用品"&&reg.test(str1.substring(3,str1.length-1))){
    str2="因为有你，家庭生活更美好了"
    kind=str1.substring(0,3)
    mon=-parseFloat(str1.substring(3,str1.length-1))
   }else if(str1.substring(0,4)=="美妆护肤"&&reg.test(str1.substring(4,str1.length-1))){
    str2="其实，我更喜欢素颜的你~"
    kind=str1.substring(0,4)
    mon=-parseFloat(str1.substring(4,str1.length-1))
   }else if(str1.substring(0,2)=="数码"&&reg.test(str1.substring(2,str1.length-1))){
    str2="不用太多，够用就行啦~"
    kind=str1.substring(0,2)
    mon=-parseFloat(str1.substring(2,str1.length-1))
   }else if(str1.substring(0,2)=="家装"&&reg.test(str1.substring(2,str1.length-1))){
    str2="家里越来越棒啦！"
    kind=str1.substring(0,2)
    mon=-parseFloat(str1.substring(2,str1.length-1))
   }else if(str1.substring(0,4)=="衣帽鞋包"&&reg.test(str1.substring(4,str1.length-1))){
    str2="嗯，真是相当有品位呢！"
    kind=str1.substring(0,4)
    mon=-parseFloat(str1.substring(4,str1.length-1))
   }else if(str1.substring(0,2)=="电器"&&reg.test(str1.substring(2,str1.length-1))){
    str2="温暖的家离不开温暖的你"
    kind=str1.substring(0,2)
    mon=-parseFloat(str1.substring(2,str1.length-1))
   }else if(str1.substring(0,2)=="药品"&&reg.test(str1.substring(2,str1.length-1))){
    str2="小病不用治，大病治不了(才不是，好好休息呦~)"
    kind=str1.substring(0,2)
    mon=-parseFloat(str1.substring(2,str1.length-1))
   }else if(str1.substring(0,2)=="治疗"&&reg.test(str1.substring(2,str1.length-1))){
    str2="身体哪里不舒服吗？"
    kind=str1.substring(0,2)
    mon=-parseFloat(str1.substring(2,str1.length-1))
   }else if(str1.substring(0,2)=="保健"&&reg.test(str1.substring(2,str1.length-1))){
    str2="多喝热水！多喝热水！多喝热水！"
    kind=str1.substring(0,2)
    mon=-parseFloat(str1.substring(2,str1.length-1))
   }else if(str1.substring(0,2)=="休闲"&&reg.test(str1.substring(2,str1.length-1))){
    str2="劳逸结合，生活美好"
    kind=str1.substring(0,2)
    mon=-parseFloat(str1.substring(2,str1.length-1))
   }else if(str1.substring(0,2)=="聚会"&&reg.test(str1.substring(2,str1.length-1))){
    str2="下次记得带上我呦"
    kind=str1.substring(0,2)
    mon=-parseFloat(str1.substring(2,str1.length-1))
   }else if(str1.substring(0,2)=="健身"&&reg.test(str1.substring(2,str1.length-1))){
    str2="打算去哪里健身呢？"
    kind=str1.substring(0,2)
    mon=-parseFloat(str1.substring(2,str1.length-1))
   }else if(str1.substring(0,2)=="约会"&&reg.test(str1.substring(2,str1.length-1))){
    str2="日子过得挺滋润的嘛！"
    kind=str1.substring(0,2)
    mon=-parseFloat(str1.substring(2,str1.length-1))
   }else if(str1.substring(0,2)=="游戏"&&reg.test(str1.substring(2,str1.length-1))){
    str2="偷偷氪一点，应该没人发现吧？"
    kind=str1.substring(0,2)
    mon=-parseFloat(str1.substring(2,str1.length-1))
   }else if(str1.substring(0,2)=="旅游"&&reg.test(str1.substring(2,str1.length-1))){
    str2="打算去哪里玩呢？"
    kind=str1.substring(0,2)
    mon=-parseFloat(str1.substring(2,str1.length-1))
   }else if(str1.substring(0,2)=="宠物"&&reg.test(str1.substring(2,str1.length-1))){
    str2="小宠物好可爱"
    kind=str1.substring(0,2)
    mon=-parseFloat(str1.substring(2,str1.length-1))
   }else if(str1.substring(0,2)=="丢失"&&reg.test(str1.substring(2,str1.length-1))){
    str2="即丢之则安之"
    kind=str1.substring(0,2)
    mon=-parseFloat(str1.substring(2,str1.length-1))
   }else if(str1.substring(0,2)=="宝宝"&&reg.test(str1.substring(2,str1.length-1))){
    str2="为了下一代的健康成长"
    kind=str1.substring(0,2)
    mon=-parseFloat(str1.substring(2,str1.length-1))
   }else if(str1.substring(0,2)=="游戏"&&reg.test(str1.substring(2,str1.length-1))){
    str2="偷偷氪一点，应该没人发现吧？"
    kind=str1.substring(0,2)
    mon=-parseFloat(str1.substring(2,str1.length-1))
   }else if(str1.substring(0,2)=="工资"&&reg.test(str1.substring(2,str1.length-1))&&parseFloat(str1.substring(2,str1.length-1))>0){
    str2="发工资喽，这可是你应得的酬劳"
    kind=str1.substring(0,2)
    mon=parseFloat(str1.substring(2,str1.length-1))
   }else if(str1.substring(0,2)=="利息"&&reg.test(str1.substring(2,str1.length-1))&&parseFloat(str1.substring(2,str1.length-1))>0){
    str2="今日，宜花钱，宜记账"
    kind=str1.substring(0,2)
    mon=parseFloat(str1.substring(2,str1.length-1))
   }else if(str1.substring(0,2)=="投资"&&reg.test(str1.substring(2,str1.length-1))&&parseFloat(str1.substring(2,str1.length-1))>0){
    str2="你的眼光也太准了吧！"
    kind=str1.substring(0,2)
    mon=parseFloat(str1.substring(2,str1.length-1))
   }else if(str1.substring(0,2)=="加班"&&reg.test(str1.substring(2,str1.length-1))&&parseFloat(str1.substring(2,str1.length-1))>0){
    str2="感觉身体被掏空了"
    kind=str1.substring(0,2)
    mon=parseFloat(str1.substring(2,str1.length-1))
   }else if(str1.substring(0,2)=="生意"&&reg.test(str1.substring(2,str1.length-1))&&parseFloat(str1.substring(2,str1.length-1))>0){
    str2="钱少挣点没关系，别把身体累坏了"
    kind=str1.substring(0,2)
    mon=parseFloat(str1.substring(2,str1.length-1))
   }else if(str1.substring(0,2)=="奖金"&&reg.test(str1.substring(2,str1.length-1))&&parseFloat(str1.substring(2,str1.length-1))>0){
    str2="记得把钱交给我管理哦，嘿嘿"
    kind=str1.substring(0,2)
    mon=parseFloat(str1.substring(2,str1.length-1))
   }else if(str1.substring(0,2)=="礼金"&&reg.test(str1.substring(2,str1.length-1))&&parseFloat(str1.substring(2,str1.length-1))>0){
    str2="生活不必完美，但一定要精彩"
    kind=str1.substring(0,2)
    mon=parseFloat(str1.substring(2,str1.length-1))
   }else if(str1.substring(0,2)=="中奖"&&reg.test(str1.substring(2,str1.length-1))&&parseFloat(str1.substring(2,str1.length-1))>0){
    str2="我看好你的眼光哦！"
    kind=str1.substring(0,2)
    mon=parseFloat(str1.substring(2,str1.length-1))
   }else if(str1.substring(0,3)=="抢红包"&&reg.test(str1.substring(3,str1.length-1))&&parseFloat(str1.substring(2,str1.length-1))>0){
    str2="天降大财~~~"
    kind=str1.substring(0,3)
    mon=parseFloat(str1.substring(3,str1.length-1))
   }else if(str1.substring(0,4)=="家人给钱"&&reg.test(str1.substring(4,str1.length-1))&&parseFloat(str1.substring(2,str1.length-1))>0){
    str2="人要懂得感恩啊！"
    kind=str1.substring(0,4)
    mon=parseFloat(str1.substring(4,str1.length-1))
   }else if(str1.substring(0,2)=="退税"&&reg.test(str1.substring(2,str1.length-1))&&parseFloat(str1.substring(2,str1.length-1))>0){
    str2="小金库充实起来了呢~"
    kind=str1.substring(0,2)
    mon=parseFloat(str1.substring(2,str1.length-1))
   }else{
    plugin.send({
      query: str1,
      success: res => {
        console.log(res);
        if(res.msg[0].ans_node_name=="新闻"){
          str2=res.msg[0].articles[0].description
        }else if(res.msg[0].ans_node_name=="音乐"){
          str2=res.msg[0].singer_name+res.msg[0].song_name
          bgam.src = res.msg[0].music_url
          bgam.play()
        }
        msgList.push({
          speaker: 'server',
          contentType: 'text',
          content: str2
         })
         this.setData({
          msgList
         });
      },
      fail: error => {res.more_info.news_ans_detail}
    });
   }}else{
    plugin.send({
      query:str1,
      success: res => {
        console.log(res);
        if(res.msg[0].ans_node_name=="新闻"){
          str2=res.msg[0].articles[0].description
        }else if(res.msg[0].ans_node_name=="音乐"){
          str2=res.msg[0].singer_name+res.msg[0].song_name
          bgam.src = res.msg[0].music_url
          bgam.play()
        }
        msgList.push({
          speaker: 'server',
          contentType: 'text',
          content: str2
         })
         this.setData({
          msgList
         });
      },
      fail: error => {res.more_info.news_ans_detail}
    });
   }

   
   var that=this
      //console.log(that.data.content);
      console.log(mon);
      console.log(kind);
      console.log(app.globalData.uid);
      console.log(that.data.date);
      wx.request({
        url: 'http://127.0.0.1:8088/WxDemo/AddAccountinfo',
        method:'POST',
        data: {
          amout:mon,
          type:kind,
          fuid:app.globalData.uid,
          account_date:that.data.date
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        success: function (res) {
          console.log(res.data)
        }
      })
      // wx.showToast({
      //   title: '成功',
      //   icon: 'success',
      //   duration: 2000//持续的时间
      // })
 },
 /**
  * 发送点击监听
  */


 
 /**
  * 退回上一页
  */
 toBackClick: function() {
  wx.navigateBack({})
 }
 
})