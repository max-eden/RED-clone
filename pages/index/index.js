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
  },
  toPost: function(e) {
    console.log('test', e)
    // wx.navigateTo({
    //   url: `/pages/show/detail?id=${e.currentTarget.dataset.id}`,
    // });
  }
})
