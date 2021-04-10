// pages/post/post.js
Page({

  /**
   * Page initial data
   */
  data: {
    postTitle: [],
    postContent: [],
    postPicture: []

  },

  uploadImage: function() {
    const self = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        let File = new wx.BaaS.File()
        let fileParams = {filePath: res.tempFilePaths[0]}
        let metaData = {categoryName: 'postPicture'}

        File.upload(fileParams, metaData).then(res => {
          console.log('image',res)  
          self.setData ({
            postPicture: res.data.path
          })
        })
      }
    }) 
  },

  // previewMyImages: function(files) {
  //   wx.previewImage({
  //     current: '',  // number of index or file path
  //     urls: files  // Array of temp files
  //   })
  // },

  formSubmit: function() {
    let postTitle = this.data.postTitle
    let postContent = this.data.postContent
    let postPicture = this.data.postPicture
    let posts = new wx.BaaS.TableObject('posts')
    let newPost = posts.create()
    newPost.set({ postTitle, postContent, postPicture}).save();
    // wx.navigateTo({
    //   url:'/pages/index/index' 
    // })
  },


  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})