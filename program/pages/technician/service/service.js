// pages/technician/service/service.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    let self = this;
    wx.showToast({
      title : '加载中',
      icon : 'loading',
      mask : true,
    });
    app.util.get('get_my_service_list', {
      openid:app.globalData.openid
    }, function (res) {
      wx.hideToast();
      if ( res.data.code == 1 ) {
        self.setData({
          list:res.data.data
        })
      } else {
        wx.showToast({
          title : res.data.msg
        });
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