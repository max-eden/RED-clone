// app.js
App({
  onLaunch: function() {
    wx.BaaS = requirePlugin('sdkPlugin')
    // enables login, payment, and other features
    wx.BaaS.wxExtend(wx.login,
     wx.getUserInfo,
     wx.requestPayment
    )
    wx.BaaS.init('7646858f3cffa31c73bc')
    wx.BaaS.auth.loginWithWechat().then(res=>{
      console.log(res)
    }) // 静默登录
  },
  globalData: {
    userInfo: null
  }
})
