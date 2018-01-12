// pages/addAlbum/addAlbum.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show1:true,
    show2: false,
    currentItemId:-1,
    tagIndex:0,
    tag1:[
      { id: 0, name: '家人', tag: ['全家福', '一家人', '快乐家族']},
      { id: 1, name: '资料', tag: ['商品图片', '资料', '作品']},
      { id: 2, name: '情侣', tag: ['双人游', '我们的爱', '相偎相依','我和他']},
      { id: 3, name: '朋友', tag: ['最佳损友', '我和闺蜜', '我们仨','聚会时光']},
      { id: 4, name: '校园', tag: ['校园', '校园', '校园']},
      { id: 5, name: '校园组织', tag: ['校园组织', '校园组织', '校园组织']},
      { id: 6, name: '毕业', tag: ['毕业', '毕业', '毕业']},
      { id: 7, name: '狂欢周末', tag: ['狂欢周末', '狂欢周末', '狂欢周末']},
      { id: 8, name: '度假', tag: ['度假', '度假', '度假']},
      { id: 9, name: '自拍', tag: ['自拍', '自拍', '自拍']},
      { id: 10, name: '节日', tag: ['节日', '节日', '节日']},
      { id: 11, name: '宝宝', tag: ['宝宝', '宝宝', '宝宝']}
    ],
    tag2: [
      { id: 0, name: '公司', tag: ['年会', '公司同事', '加班的日子']},
      { id: 1, name: '健身', tag: ['健身记录', '健身啦']},
      { id: 2, name: '运动', tag: ['运动记录']},
      { id: 3, name: '回忆', tag: ['青葱岁月', '那些年']},
      { id: 4, name: '购物', tag: ['买买买', '剁手节']},
      { id: 5, name: '游戏', tag: ['LOL', '开黑啦']},
      { id: 6, name: '美容美妆', tag: ['美丽']},
      { id: 7, name: '旅行', tag: ['丽江之旅', '旅行的记忆']},
      { id: 8, name: '日常', tag: ['点滴生活', '经典语录图集']},
      { id: 9, name: '萌宠', tag: ['萌宠日常', '小可爱']},
      { id: 10, name: '网红', tag: ['网红相册']},
      { id: 11, name: '美食', tag: ['吃货日记', '美食爱好者','吃货']}
    ],
    albumSrc: ['../../images/lx1.jpg', '../../images/lx1.jpg', '../../images/lx1.jpg',],
    animationtag1Big:{},
    animationtag1Small:{},
    tagName:'',
    isChecked:false,
    isTag: false,
    albumName:"",
    inputCount:0
  },
  nameInput(e){
    var count = e.detail.value.length
    console.log(count)
    this.setData({
      albumName:e.detail.value,
      isChecked:true,
      inputCount: count
    })
    if (this.data.albumName === ""){
      this.setData({
        isChecked: false
      })
    }
  },
  addAlbum(){
    var that = this;
    that.reqTag();
    console.log(that.data.albumName)
    wx.request({
      url: 'http://172.16.10.20:8888/api/addAlbum.do',
      method:'post',
      header: {
        'content-type': 'application/x-www-form-urlencoded' // 默认值
      },
      data:{
        a_name: that.data.albumName,
        u_id: app.globalData.userInfo.userId,
        a_thumbnail: '../../images/lx1.jpg'
      },
      success:function(res){
        console.log(res.data)
        wx.switchTab({
          url: '/pages/home/home'
        })
      }
    })
  },
  changTag(){
    this.setData({
      currentItemId: -1
    })
    // 放大
    var animation1 = wx.createAnimation({
      duration:2000
    })
    this.animation1 = animation1;
    animation1.scale(0.5,0.5).step();
    animationtag1Small: animation1.export()
    
    // 放大
    var animation2 = wx.createAnimation({
      duration: 2000
    })
    this.animation2 = animation2;
    animation2.scale(1, 1).step();
    animationtag1Big: animation2.export()
    
    
    if (this.data.show1 == true ){
      this.setData({
        show1: false,
        show2: true
      })
    } else{
      this.setData({
        show1: true,
        show2: false
      })
    }
    
  },
  getTag(e){
    var tagName;
    var currentTag;
    if (this.data.show1){
      currentTag = this.data.tag2
    }else{
      currentTag = this.data.tag1
    }
    if (this.data.currentItemId == e.currentTarget.dataset.num){
      this.data.tagIndex++;
      if (this.data.tagIndex==currentTag[e.currentTarget.dataset.num].tag.length){
        this.data.tagIndex=0
      }
      tagName = currentTag[e.currentTarget.dataset.num].tag[this.data.tagIndex]
    }else{
      this.data.tagIndex=0
      tagName = currentTag[e.currentTarget.dataset.num].tag[0]
    }
    this.setData({
      isChecked: true,
      isTag: true,
      currentItemId: e.currentTarget.dataset.num
    })
    this.setData({
      tagName: tagName
    })
  },
  reqTag:function () {
    var that = this;
    var tag = that.data.tagName;
    console.log(tag);
    console.log("zy");
  },
  resTag:function (event) {
    var that = this;
    var tag = event.detail.value;
    that.setData({
      albumName:tag
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      
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