// components/tabs/tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // aaa:{
    //   type:String,
    //   value:""
    // }

  },

  /**
   * 组件的初始数据
   */
  data: {
      tabs:[
      {
        id:0,
        name:"图表",
        isActive:true
      },
      {
        id:1,
        name:"流水",
        isActive:false
      },
      {
        id:0,
        name:"预算",
        isActive:false
      },
      {
        id:0,
        name:"设置",
        isActive:false
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  
  methods: {
    handleItemTap(e){
      const {index}=e.currentTarget.dataset;
      let {tabs}=this.data;
      tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
      this.setData(
        {
          tabs
        }
      )
      
    }
  }
})
