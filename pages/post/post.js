// pages/post/post.js
Page({

  /**
   * Page initial data
   */
  data: {
  },

  onLoad(){
    let posts = new wx.BaaS.TableObject('posts')
    this.setData({
      posts: posts
    })
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
        let metaData = {categoryName: 'picture'}
        File.upload(fileParams, metaData).then(res => {
          console.log('image',res)  
          self.setData ({
            picture: res.data.path
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
    
  }
})