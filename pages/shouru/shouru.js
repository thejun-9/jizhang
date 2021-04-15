const app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        content: '',//输入内容
        KeyboardKeys: [1, 2, 3 , 4, 5, 6, 7, 8, 9, 0,'·'],
        keyShow: true,//默认显示键盘
        fuid:app.globalData.uid,
        type:'其它',
        account_date:'2020-04-12'
    },
    bindDateChange:function(e){
      console.log('picker发送选择改变，携带值为',e.detail.value)
      this.setData({
          account_date:e.detail.value
      })
    },
    //点击输入框，键盘显示
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
    payTap(){
        var that=this
      //console.log(that.data.content);
      wx.request({
        url: 'http://127.0.0.1:8088/WxDemo/AddAccountinfo',
        method:'POST',
        data: {
          amout:that.data.content,
          type:that.data.type,
          fuid:app.globalData.uid,
          account_date:that.data.account_date
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
        },
        success: function (res) {
          console.log(res.data)
          that.setData({
            condition:res.data,
          })
        }
      })
        wx.showToast({
            title: '成功',
            icon: 'success',
            duration: 2000//持续的时间
          })
        //console.log(_this.data.content)
    },
    zhichu()
    {
          wx.navigateBack({
            url: '../../pages/jiyibi/jiyibi',
          })
    }
   
  })