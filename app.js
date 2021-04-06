// app.js
App({
  onLaunch: function() {
    wx.BaaS = requirePlugin('sdkPlugin')
    // enables login, payment, and other features
    wx.BaaS.wxExtend(wx.login,
     wx.getUserInfo,
     wx.requestPayment)

    const clientID = '7646858f3cffa31c73bc' // The ClientID received by the backend
    wx.BaaS.init(clientID)

  },
  globalData: {
    userInfo: null
  }
})
