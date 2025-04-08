// components/custom04/custom04.js
Component({

  /**
   * 组件的属性列表
   */
  properties: {
    label:{
      type:String,
      value:'测试'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    num:10,
    count:100,
    obj:{
      name:'lax',
      age:26
    },
    arr:[1,2,3,4,5]
  },

  /**
   * 组件的方法列表
   */
  //用来监听数据属性是否发生改变
    observers:{
     //key:需要监听的数据
     //value:就是一个回调函数，形参：最新的数据

     'num,count':function(newNum,newCount){
        console.log(newNum,newCount)
      },

      //支持监听属性内部数据的变化
      //使用通配符
      'obj.**':function(newObj){
        console.log(newObj)
      }
   },

  methods: {

    //更新数据
    updateData(){
      this.setData({
        num:this.data.num+1,
        count:this.data.count-1,
        'obj.name':'LAX',
        'arr[1]':666,
        label:'最新的标题'
      })
    }
  }
})