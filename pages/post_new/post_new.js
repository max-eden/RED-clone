// pages/post_new/post_new.js
Page({

  /**
   * Page initial data
   */
  data: {
    mapData: {
      // scale: value can be from the 3-20
      scale: 15,
      longitude: 121.4737,
      latitude: 31.23037
    },
    selectedMarker: false,
    markers: []
  },

  formSubmit(e) {
    let title = e.detail.value.title
    let content = e.detail.value.content
    let Posts = new wx.BaaS.TableObject('posts')
    let newPost = Posts.create()
    newPost.set({
      title: title,
      content: content,
      picture: this.data.picture
    })
    newPost.save().then(res=>{  
    },err => {{
      console.log("err", err)
      wx.showToast({
        icon: 'error',
        title: 'Pleaes fill all the fields',
      })
    }})
  },

  uploadImage: function(){
    const self = this
    wx.chooseImage({
      success: function(res) {
        let MyFile = new wx.BaaS.File()
        let fileParams = {filePath: res.tempFilePaths[0]}
        let metaData = {categoryName: 'SDK'}
    
        MyFile.upload(fileParams, metaData).then(res => {
          let data = res.data  // res.data 为 Object 类型
          console.log(res)
          self.setData({
            picture: res.data.file.path
          })
        })
      }
    })
    
  },

  selectMarker(e){
    let markerId = e.detail.markerId
    let currentMarker = this.data.markers.find(marker=> marker.id == markerId)
    if (markerId != 0){
      this.setData({
        selectedMarker: currentMarker
      })
      console.log(currentMarker)
    }
  },

  chooseLocation(){
    wx.chooseLocation({
      latitude: 0,
      longitude: 0,
      success: (res) => {
        console.log(this.data.markers, res)
        const newMarker = {
          iconPath: '/images/marker.png',
          id: this.data.markers.length == 0 ? 1 :  this.data.markers.length,
          name: res.name,
          address: res.address,
          longitude: res.longitude,
          latitude: res.latitude,
          height: 50,
          width: 50
        }
        this.data.markers.push(newMarker)
        this.setData({
          markers: this.data.markers
        })
      }
    })
  }

})