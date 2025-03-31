// pages/list/list.js
Page({
  //事件处理函数需要写在page({})中
  abc(){
    console.log("事件触发了")
  },
  //输出用户输入框事件
  getInputValue(event){
    console.log(event.detail.value)
  },
  // parentHandler(){
  //   console.log("这是父组件")
  // },
  // btnHandler(){
  //   console.log("这是子组件")
  // },

  //currentTarget 事件绑定者，是指：那个组件绑定了当前事件处理函数
  //target 事件触发者，也就是指：那个组织出发了当前事件
  btnHandlers(event){
    console.log(event)
  },

  /**
   * 页面的初始数据
   */
  data: {

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