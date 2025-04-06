Page({
  data:{
    numList:[1,2,3]
  },
  //监听用户上拉加载
  onReachBottom(){
    // console.log('监听用户上拉加载')
    //当用户上拉，需要进行累加

    //当用户上拉加载时，需要对数字进行累加,每次累加3个数字
    //目前是【1,2,3】，【1,2,3,4,5,6】
    //
    wx.showLoading({
      title: '数据加载中。。。',
    })

    setTimeout(()=>{
      const lastNum=this.data.numList[this.data.numList.length-1]

      const newArr =[lastNum+1,lastNum+2,lastNum+3]
  
      this.setData({
        numList:[...this.data.numList,...newArr]
      })
      wx.hideLoading()

    },1500)
  },

  //监听用户下拉刷新
  onPullDownRefresh(){
    this.setData({
      numList:[1,2,3]
    })
    if(this.data.numList.length===3){
      console.log('已经重置')
      wx.stopPullDownRefresh()
    }
  }
})