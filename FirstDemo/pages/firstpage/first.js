Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      {
        "url": "http://127.0.0.1/1.flv",
        "title": "这是标题一",
        "viewbg":"green"
      },
      {
        "url": "http://127.0.0.1/2.flv",
        "title": "这是标题二",
        "viewbg": "yellow"
      }
    ],
    "viewbg": "green"

  },

  setPlain:function(event){
    console.log(event);
    console.log(event.currentTarget.dataset.sendval);
    // this.setData({viewbg:"blue"});
  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onLoad");
    wx.request({
      url: 'https://www.yuedele.top:8443/yuedele/getBookList/fd', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
      },
      fail: function(){

      }

    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onReady");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log("onShow");
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
    console.log("onUnload");
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