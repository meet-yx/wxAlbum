// pages/clock/clock.js
const app = getApp();
let col1H = 0;
let col2H = 0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loadingCount:0,
    images: [],
    scrollH: 0,
    imgWidth: 0,
    col1:[],
    col2:[]
  },
  onImageLoad(e){
    // console.log(e)
    let imageId = e.currentTarget.id;
    let oImgW = e.detail.width; //图片原始宽度
    let oImgH = e.detail.height;  //图片原始高度
    let imgWidth = this.data.imgWidth;  //图片设置的宽度
    let scale = imgWidth / oImgW  //比例计算
    let imgHeight = oImgH * scale;  //图片设置高度

    let images = this.data.images;
    let imageObj = null;

    for (let i = 0; i < images.length; i++) {
      let img = images[i];
      if (img.id === imageId) {
        imageObj = img;
        break;
      }
    }
    imageObj.height = imgHeight;
    let loadingCount = this.data.loadingCount - 1;

    if(col1H<col2H){
      col1H += imgHeight;
      this.data.col1.push(imageObj);
    }else{
      col2H += imgHeight;
      this.data.col2.push(imageObj);
    }

    let data = {
      loadingCount: loadingCount,
      col1: this.data.col1,
      col2: this.data.col2
    };

    //当前这组图片已加载完毕，则清空图片临时加载区域的内容
    if (!loadingCount) {
      data.images = [];
    }

    this.setData(data);

  },
  loadImages() {
    let images = [
      { id: "0", pic: "../../images/waterfull/sweet1.jpg", height:0 },
      { id: "1", pic: "../../images/waterfull/sweet2.jpg", height: 0},
      { id: "2", pic: "../../images/waterfull/sweet3.jpg", height: 0},
      { id: "3", pic: "../../images/waterfull/sweet4.jpg", height: 0},
      { id: "4", pic: "../../images/waterfull/lvxing1.jpg", height: 0},
      { id: "5", pic: "../../images/waterfull/lvxing2.jpg", height: 0},
      { id: "6", pic: "../../images/waterfull/lvxing3.jpg", height: 0},
      { id: "7", pic: "../../images/waterfull/lvxing4.jpg", height: 0}
    ];

    let baseId = "img-"+(+new Date());

    for(let i=0;i<images.length;i++){
      images[i].id=baseId+"-"+i;
    }

    this.setData({
      loadingCount:images.length,
      images:images
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    // console.log(app.globalData.userInfo);
    wx.getSystemInfo({
      success: function(res) {
        // console.log(res);
        let windowW = res.windowWidth;
        let windowH = res.windowHeight;
        let imgWidth = windowW * 0.48;
        let scrollH = windowH;

        that.setData({
          'scrollH':scrollH,
          'imgWidth': imgWidth
        })

        //加载首组图片
        that.loadImages();
      },
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