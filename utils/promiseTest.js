  /** 

  * requestPromise用于将wx.request改写成Promise方式 

  * @param：{string} myUrl 接口地址 

  * @return: Promise实例对象 

  */ 

const requestPromise = myUrl => {
  // 返回一个Promise实例对象 
  return new Promise((resolve, reject) => {
    wx.request({
      url: myUrl,
      success: res => resolve(res)
    })
  })
}

module.exports = {
  requestPromise: requestPromise
}