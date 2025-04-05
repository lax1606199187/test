// pages/test3/test3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    a:""
  },
  //跳转按钮
  navigateTo(){
    //保留当前页面，跳转到应用中其他页面，不能跳转到tabBar页面
    wx.navigateTo({
      url: '/pages/cates/cates?id=1&name=LAx'
    })
  }, 
  redirectTo(){
    //关闭销毁当前页面，跳转到应用
    wx.redirectTo({
      url: '/pages/list/list',
    })
  }, 
  switchTab(){
    //跳转到tabBar页面，不能跳转到非tabBar页面
    wx.switchTab({
      url: '/pages/lax/lax',
    })
  }, 
  reLaunch(){
    //关闭所有的页面，然后跳转到应用中的某一个页面
    wx.reLaunch({
      url: '/pages/list/list',
    })
  }, 


  //删除商品
  async delHandler(){
    //显示模态对话框
    const {confirm}= await wx.showModal({
      title:'提示',
      content:'是否删除该商品？'
    })
    if (confirm){
      wx.showToast({
        title:'删除成功',
        icon:'none',
        duration:2000
      })
    }else{
      wx.showToast({
        title: '取消删除',
        icon:'error',
        duration:2000
      })
    }

  },

  getDatas(){

    //现实loading提示框
    //mask：是否展示透明蒙层，防止触摸穿透,默认false,如果为true,用户点击后，就点击不了屏幕其他位置
    wx.showLoading({
      //用来现实提示的内容
      //提示的内容较多时，数据会被隐藏
      title: '数据加载中。。。',
      mask:true
    })
    //如果需要发起网络请求，需要使用wx.request AOI
    wx.request({
      url: 'http://localhost:8001/lax',
      //API不管调用成功还是失败以后，执行的回调

      complete:(res)=>{
        // console.log(res)
        //关掉loading提示框
        //hideLoading和showLoading必须配对使用才可以
        wx.hideLoading()
      },
      
    })    

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
        // console.log(res)
        //关掉loading提示框
        wx.hideLoading()
      },
    })

  },
  //四个按钮设置

  //将数据存储在本地
  setStorage(){
    //第一个参数：本地存储中指定的key
    //第二个参数：需要存储的数据
    // wx.setStorageSync('num', 1)
    // wx.setStorageSync('obj', {name:'lax',age:'26'})
    //-----------------------------------------------
    //异步API
    wx.setStorage({
      key:'num',
      data:'1'
    }),
    wx.setStorage({
      key:'obj',
      data:{name:'lax',age:25}
    })

    
  },

  //获取本地存储的数据
  async getStorage(){
  //从本地存储的数据中获取指定key的数据、内容
  // const num=wx.getStorageSync('num')
  // const obj=wx.getStorageSync('obj')

  // console.log(num)
  // console.log(obj)

  //---------------------------------------
  //异步
  const {data}=await wx.getStorage({
    key:'obj'
  })
  console.log(data)
  },

  //删除本地存储的数据
  //从本地移除指定key的数据、内容
  removeStorage(){
    wx.removeStorageSync('num')
  },

  //清空本地存储的数据
  clearStorage(){
    wx.clearStorageSync()
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