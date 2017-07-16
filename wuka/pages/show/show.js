// pages/show/show.js

var id =0;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    infolist: {},
    animationData: {}
  },
  textChange: function () {
    var api_url = 'http://easy-mock.com/mock/59644536b6cab76bb73846f7/lists/lists';
    var that = this;
    var animation = wx.createAnimation({
       duration: 500,
     })
     this.animation = animation;
    animation.opacity(1).scale(2).step();//修改透明度,放大
    that.setData({
      animationData: animation.export()
    })
    setTimeout(function () {
      animation.opacity(1).scale(1).step({duration: 500})
      that.setData({
        animationData: animation.export()
      })
    },300)
    wx.request({
      url: api_url,
      method: 'GET',
      success: function (res) {
        that.setData({
          infolist: res.data.data[id],
        })
      }
    });
    var id = Math.floor(Math.random()*15);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.textChange();
    var api_url = 'http://easy-mock.com/mock/59644536b6cab76bb73846f7/lists/lists';
    var that = this;
    wx.request({
      url: api_url,
      method: 'GET',
      success: function (res) {
        that.setData({
          infolist: res.data.data[0],
        })
      }
    });
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
