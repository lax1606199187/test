// components/custom-checkbox/custom-checkbox.js
Component({
  
  //组件样式修改设置
  options:{
    styleIsolation:'shared'
  },
  /**
   * 组件的属性列表
   * 组件的对外属性，主要用来接受组件使用者传递给组件内部的属性及数据
   */
  properties: {
    //如果需要接受传递的属性，有两个方式：全写、简写
    label:String,
    position:{
      type:String,
      value:'right'
    }
  },


  /**
   * 组件的初始数据
   */
  //用来定义当前组件内部所需要使用的数据
  data: {
    isChecked:false
  },

  /**
   * 组件的方法列表
   * 在组件中，所有的事件都要写在methods方法中
   */
  methods: {
    updateChecked(){
      //更新复选框的状态
      this.setData({
        isChecked:!this.data.isChecked
      })
      console.log(this.properties.label)

    }
  }
})


