// pages/home/home.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchicon:'',
    albumInfo:[
      {
        a_thumbnail: "../../images/lx1.jpg",
        a_name: "去哪儿" ,
        userCount: 2,
        imgCount: 10
      },
      {
        a_thumbnail: "../../images/lx1.jpg",
          albumTitle: "圣诞",
          a_name: 3,
          imgCount: 12
        }
        , {
          a_thumbnail: "../../images/lx1.jpg",
          a_name: "一家人",
          userCount: 5,
          imgCount: 8
      },
      {
        a_thumbnail: "../../images/lx1.jpg",
        a_name: "haha",
        userCount: 3,
        imgCount: 12
      }
      , {
        a_thumbnail: "../../images/lx1.jpg",
        a_name: "lalal",
        userCount: 5,
        imgCount: 8
      }
    ],
    albumList: [],

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that  = this
    wx.request({
      url: 'http://172.16.10.20:8888/api/albumList.do',
      method: 'post',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      success:function(res){
        console.log(res.data)
        that.setData({
          albumList:res.data
        })
      }
    })
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