const utilApi=require('../../utils/promiseTest');
const app= getApp()
Page({

    /**
     * 页面的初始数据
     */
    data: {
        record:[],
        content:'',//输入内容
        KeyboardKeys: [1, 2, 3 , 4, 5, 6, 7, 8, 9, 0,'·'],
        keyShow: true,//默认显示键盘
        fuid:0,
        type:'',
        account_date:'',
        index: 0,
        aid:0
    },
    onLoad: function (options) {
        const record=wx.getStorageSync("record").index;
        //console.log(record);
        this.setData({record:record,aid:record[0],content:String(record[2]),fuid:record[1],type:record[3],account_date:record[4]});
    },
    bindDateChange:function(e){
      //console.log('picker发送选择改变，携带值为',e.detail.value)
      this.setData({
          account_date:e.detail.value
      })
    }, 
    bindPickerChange: function (e) {
        //console.log('picker发送选择改变，携带值为', e.detail.value)
        //console.log(e.detail.value)
        this.setData({
          index: e.detail.value,
          type:array[index] 
        })
        console.log(this.data.index)
    },
    //删除消费记录
    hendleTap:function(){
        console.log(this.data.aid+"我一会必删除你")
        utilApi.requestPromise('http://127.0.0.1:8088/WxDemo/DeleteAccountinfo?aid='+this.data.aid) 
        // 使用.then处理结果 
        .then(res => { 
          console.log(res.data)
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
        console.log(len);
        switch (keys) {
            case '·': 
                if (len < 8 && content.indexOf('.') == -1) { //如果字符串里有小数点了，则不能继续输入小数点，且控制最多可输入10个字符串
                    if (content.length < 1) { 
                        content = '0.';
                    } else if(content.indexOf('-') == 0 && content.length == 1)
                    {
                        content = '-0.';
                    }
                    else { //如果不是第一个输入小数点，那么直接在字符串里加上小数点
                        content += '.';
                    }
                }
                break;
            case 0:
                console.log(content);

                if (content.length < 7) {
                    console.log(content.length)
                    if (content.length < 1) {
                        content = '0.';
                    }else if(content.length == 1 && content.indexOf('-') == 0){
                        content = '-0.';
                    }else if(content.indexOf('.') != -1 && content.length-content.indexOf('.') == 3)//有小数点并且小数点最后已经有两位数字了
                    {
                        break;
                    }
                    else{
                        content += '0'
                    }
                    
                }
                break;
            case '<':
                if(content.length==1 && content.indexOf('-') == 0)
                    break;
                content = content.substr(0, content.length - 1);
                break;
            default:
                let Index = content.indexOf('.');
                if (Index == -1 || len - Index != 3) {
                    if (len < 8) {
                        content = content + String(keys);
                    }
                }
                break
        }
  
        _this.setData({
            content
        });
  
    },
    //要改
    handle(e){
      console.log(e.detail.ename.name);
      let type=e.detail.ename.name;
      console.log(type);
      this.setData({
          type
      });
      console.log(this.data.type);
    },
    // 付款
    payTap(){
        var that=this
        wx.request({
          url: 'http://127.0.0.1:8088/WxDemo/UpdateAccountinfo',
          method:'POST',
          data: {
            aid:that.data.record[0],
            amout:that.data.content,
            type:that.data.record[3],
            //fuid:getApp().globalData.uid,
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
            duration: 1000//持续的时间
        })
    }
  })