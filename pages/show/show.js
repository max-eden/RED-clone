// pages/show/show.js
Page({

  data: {

  },

  onLoad: function (options) {
    console.log("??", options)
    let self = this
    let posts = new wx.BaaS.TableObject('posts')
    posts.get(options.id).then((res) => {
      console.log('post', res.data)
      self.setData({
        post: res.data
      })
    }, (err) => {
    })
    
  },

})