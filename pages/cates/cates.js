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
    list:[1,2,3],
    lists:[{
      id:1,name:"LAX"
    }],
    obj:{
      name:"lax"
    },
    userInfo:{
      name:'lax',
      age:'26',
      test:123,
    },

  },
    //更新数组
    updateList(){
      //新增数组元素
        //方法一
        // this.data.list.push(4)
        // this.setData({
        //   list:this.data.list
        // })

        //方法二
        // const newList=this.data.list.concat(4)
        // this.setData({
        //   list:newList
        // })


      //修改数组元素
      // this.setData({
      //   'list[1]':6,
      //   'lists[0].name':"lax"
      // })


      //删除数组元素

      //splice(从哪开始删除，删除数量多少)
      // this.data.list.splice(1,1)
      // this.setData({
      //   list:this.data.list
      // })

      
    },

    //更新UserInfo
    updateUserInfo(){
      //新增单个/多个属性
      // this.setData({
      //   //如果是给对象新增属性，可以将key写成数据路径的方式a.b.c
      //   'userInfo.name':'lax',
      //   'userInfo.age':'26'
      // })

      //方法一、通过对象的形式进行修改数据 
      // const userInfo={
      //   ...this.data.userInfo,
      //   name:'Lax',
      //   age:26
      // }

      // this.setData({
      //   userInfo:userInfo
      // })
      //方法二、通过obje。assign对象的形式进行修改数据 
      // const userInfo =Object.assign(this.data.userInfo,{name:'LAX'},{age:25})
      // this.setData({
      //   userInfo:userInfo
      // })

      //删除单个属性
      // delete this.data.userInfo.age
      // this.setData({
      //   userInfo:this.data.userInfo
      // })

      //删除多个属性
      // const{age,test,...rest}=this.data.userInfo
      // this.setData({
      //   userInfo:rest
      // })
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