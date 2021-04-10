// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    posts: []
    
  },
  // 事件处理函数
  onLoad(){
    const self = this
    let posts = new wx.BaaS.TableObject('posts')
    posts.find().then(res => {
      console.log('posts', res),
      self.setData({
        posts: res.data.objects
      })
    })
    
    // let users = new wx.BaaS.TableObject('_userprofile')
    // users.find().then(res => {
    //   console.log('users',res)
    // })

  },

  
  toPost: function(e) {
    console.log('test', e.currentTarget.dataset.id)
    wx.navigateTo({
      url: `/pages/show/show?id=${e.currentTarget.dataset.id}`
      // url: `/pages/show/detail?id=${e.currentTarget.dataset.id}`,
    })


  }
})
