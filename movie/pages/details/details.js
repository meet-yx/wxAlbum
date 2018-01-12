// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailsSrc: '../../images/lx1.jpg',
    detailsTitle: '去哪儿',
    userCount: 2,
    imgCount: 10,
    detailsInfo: [],
    albumList: [
      {
        l_id: 0,
        l_imgPath: '../../images/waterfull/lomo1.jpg',
        l_desc: 'lomo1',
        l_date: '2017-12-28'
      },
      {
        l_id: 1,
        l_imgPath: '../../images/waterfull/lomo2.jpg',
        l_desc: 'lomo1',
        l_date: '2017-12-28'
      }
      ,
      {
        l_id: 2,
        l_imgPath: '../../images/waterfull/lomo3.jpg',
        l_desc: 'lomo1',
        l_date: '2017-12-28'
      }
      ,
      {
        l_id: 3,
        l_imgPath: '../../images/waterfull/lomo4.jpg',
        l_desc: 'lomo1',
        l_date: '2017-12-28'
      }
      ,
      {
        l_id: 4,
        l_imgPath: '../../images/waterfull/lvxing1.jpg',
        l_desc: 'lomo1',
        l_date: '2017-12-28'
      }
      ,
      {
        l_id: 5,
        l_imgPath: '../../images/waterfull/lvxing2.jpg',
        l_desc: 'lomo1',
        l_date: '2017-12-28'
      }
      ,
      {
        l_id: 6,
        l_imgPath: '../../images/waterfull/lvxing3.jpg',
        l_desc: 'lomo1',
        l_date: '2017-12-28'
      }
      ,
      {
        l_id: 7,
        l_imgPath: '../../images/waterfull/lvxing4.jpg',
        l_desc: 'lomo1',
        l_date: '2017-12-28'
      }
      ,
      {
        l_id: 8,
        l_imgPath: '../../images/waterfull/sweet1.jpg',
        l_desc: 'lomo1',
        l_date: '2017-12-28'
      }
    ],
    tempFilePaths: '',
    albumId:""
  },
  returnAlbum(){
    wx.navigateBack({
      delta: 1
    })
  },
  uploadImg() {
    var that = this;
    wx.showActionSheet({
      itemList: ['相册照片', '拍照片', '相册视频', '拍视频'],
      itemColor: "#333",
      success(res) {
        // console.log(res.tapIndex);
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            that.chooseWxImage('album')
          } else if (res.tapIndex == 1) {
            that.chooseWxImage('camera')
          } else if (res.tapIndex == 2) {
            that.chooseWxImage('album')
          } else {
            that.chooseWxImage('camera')
          }
        }
      }
    })
  },
  chooseWxImage(type) {
    var that = this;
    wx.chooseImage({
      sizeType: ['oringal', 'compressed'],
      sourceType: [type],
      success: function (res) {

        // console.log(res);
        // that.setData({
        //   tempFilePaths: res.tempFilePaths[0]
        // })
        // wx.navigateTo({
        //   url: "/pages/uploadImg/uploadImg?jsonStr=" + that.data.tempFilePaths,
        // })
        for (let i = 0; i < res.tempFilePaths.length;i++){
          wx.uploadFile({
            url: 'http://172.16.10.20:8888/api/uploadImg.do', //仅为示例，非真实的接口地址
            filePath: res.tempFilePaths[i],
            name: 'file',
            formData: {
              'albumId': that.data.albumId
            },
            success: function (res) {
              var data = res.data;
              console.log(data)
              //do something
            }
          })
        }
       
      }
    })
    // console.log(this.data.tempFilePaths,"detailspath")
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options.id)
    this.setData({
      albumId: options.id
    })
    var that = this
    wx.request({
      url: 'http://172.16.10.20:8888/api/imgList.do',
      method: 'post',
      data: {
        a_id: that.data.albumId
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success: function (res) {
        let arr = [];
        for (let i = 0; i < res.data.length; i++) {
          res.data[i].l_date = res.data[i].l_date.substr(0,10)
        }
        arr.push(res.data[0])
        for (let i = 0; i < res.data.length; i++) {
          if (i < res.data.length-1){
            if (res.data[i].l_date == res.data[i + 1].l_date) {
              arr.push(res.data[i+1]) 
              res.data.splice(i + 1,1)
              i--; 
            } else {
              that.data.detailsInfo.push(arr);
              arr = [];
              arr.push(res.data[i + 1])
            }
          }
        }
        that.data.detailsInfo.push(arr);
        console.log(that.data.detailsInfo);
        console.log("123");
        that.setData({
          detailsInfo: that.data.detailsInfo
        })
      }
    })
    let index
    var detail = this.data.detailsInfo
    for (let i = 0; i < detail.length; i++) {
      if (options.id == detail[i].id) {
        index = i
      }
    }
    // this.setData({
    //   detailsSrc: detail[index].detailsSrc,
    //   detailsTitle: detail[index].detailsTitle,
    //   userCount: detail[index].userCount,
    //   imgCount: detail[index].imgCount,
    // })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  clickImg() {

  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})