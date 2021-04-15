Page({

  /**
   * 页面的初始数据
   */
  data: {
      content:'',//输入内容
      KeyboardKeys: [1, 2, 3 , 4, 5, 6, 7, 8, 9, 0,'·'],
      keyShow: true,//默认显示键盘
      date:'2021-04',
      type:''
  },
  showKeyboard() {
      var _this = this
      _this.setData({
          keyShow: true
      });
  },
  keyTap(e) {
      var _this = this,
          keys = e.currentTarget.dataset.keys,
          content = _this.data.content,
          len = content.length;

      switch (keys) {
          case '·': //点击小数点，（注意输入字符串里的是小数点，但是我界面显示的点不是小数点，是居中的点，在中文输入法下按键盘最左边从上往下数的第二个键，也就是数字键1左边的键可以打出居中的点）
              if (len < 11 && content.indexOf('.') == -1) { //如果字符串里有小数点了，则不能继续输入小数点，且控制最多可输入10个字符串
                  if (content.length < 1) { //如果小数点是第一个输入，那么在字符串前面补上一个0，让其变成0.
                      content = '0.';
                  } else { //如果不是第一个输入小数点，那么直接在字符串里加上小数点
                      content += '.';
                  }
              }
              break;
          case 0:
              console.log(content)
              if (len < 4) {
                  console.log(content.length)
                  if (content.length < 1) { //如果0是第一个输入，让其变成0.
                      content = '0.';
                  }else{
                      content += '0'
                  }
              }
              break;
          case '<': //如果点击删除键就删除字符串里的最后一个
              content = content.substr(0, content.length - 1);
              break;
          default:
              let Index = content.indexOf('.'); //小数点在字符串中的位置
              if (Index == -1 || len - Index != 3) { //这里控制小数点只保留两位
                  if (len < 11) { //控制最多可输入10个字符串
                      content += keys;
                  }
              }
              break
      }

      _this.setData({
          content
      });

  },
  handle(e){
    //var ename = e.detail;
    var ename = e.detail.ename.name;
    console.log(ename);
    this.setData({
        type:ename
      })
  },
  // 付款 
  payTap(options){
      var that = this;
      var date=options.date;
      this.setData({
          date:date
      })
      var flag=true;
      if(this.data.type.length==0||this.data.content.length==0){
        flag=false;
      }
      console.log(this.data.type)
      console.log(this.data.content)
      if(flag==true){
        wx.request({
            url: 'http://127.0.0.1:8088/WxDemo/AddAccountinfo',
            method:'POST',
            data: {
            amout:that.data.content,
            type:that.data.type,
            fuid:app.globalData.uid,
            account_date:date
            },
            header: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            success: function (res) {
            console.log(res.data)
            }
        })
        wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 1000//持续的时间
        })
      }else{
        wx.showToast({
          title: '信息不完整',
          icon: 'none',
          duration: 1000//持续的时间
        })
      } 
  } 
})