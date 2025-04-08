Page({
  data:{
    numList:[1,2,3],
    isTriggered:false
  },

  //scroll-view 上拉加载更多事件处理函数
  getMore(){
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


  refreshHandler(){


    this.setData({
      numList:[1,2,3],
      isTriggered:false
    })

    wx.showToast({
      title: '下拉刷新',
    })
  }
})