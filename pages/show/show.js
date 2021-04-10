// pages/show/show.js
Page({

  data: {

  },

  onLoad: function (options) {
    let posts = new wx.BaaS.TableObject('posts')
    posts.get(options.id).then((res) => {
      console.log('res', res)
      self.setData({
        restaurant: res.data
      })
    }, (err) => {
    })
    
  },

})