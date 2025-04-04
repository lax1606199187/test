// pages/test3/test3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    a:""
  },

  //获取数据
  getData(){
    //如果需要发起网络请求，需要使用wx.request API
    wx.request({
      //接口地址
       url: 'http://localhost:8001/lax',
      //请求方式
      method:'GET',
      //请求参数
      data:{},
      //请求头
      header:{},
      //API调用成功以后，执行的回调
      success:(res)=>{
        console.log(res)
        this.setData({
          a:res.data.message,
        })
      },
      //API调用失败以后，执行的回调
      fail:(err)=>{
        console.log(err)
      },
      //API不管调用成功还是失败以后，执行的回调
      complete:(res)=>{
        console.log(res)
      },
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})