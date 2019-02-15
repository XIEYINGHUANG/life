 
 import fetch from '../../utils/fetch.js'

// pages/home/home.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
   sliders:[],
   categories:[],
  },

  /**
   * 生命周期函数--监听页面加载，相当于created
   */
  onLoad: function(options) {
    this.getSlidersData()
    this.getcategoriesData()
  },

  // 获取轮播图的数据
  getSlidersData() {
    wx.request({
      url: 'https://locally.uieee.com/slides', // 仅为示例，并非真实的接口地址
      success:res=>{
        console.log(res.data)
        this.setData({
         sliders:res.data
        })
      }
    })
  },
  getcategoriesData(){
    fetch('categories').then(res=>{
      // console.log(res)
      this.setData({
        categories:res.data
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})