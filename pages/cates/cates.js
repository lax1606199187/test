// pages/cates/cates.js
Page({
  
  //在小程序中页面需要使用的数据


  

  /**
   * 页面的初始数据
   */
  data: {
    id:2,
    school:'卢傲璇',
    ischecked:false,
    num:26,
    obj:{
      name:"lax"
    },
    userInfo:{

    },

  },

    //更新UserInfo
    updateUserInfo(){
      //新增单个/多个属性
      this.setData({
        //如果是给对象新增属性，可以将key写成数据路径的方式a.b.c
        'userInfo.name':'lax',
        'userInfo.age':'26'
      })
  },
  
  updateNum(){
    //获取数据
    //this.setData两个作用
    //1.更新数据
    //2.驱动视图（页面）视图
    this.setData({
      //key是要更新的数据
      //value是要更新的值
      num:this.data.num+1
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log(options)
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