// 定义食物类Food
class Food {
  // 定义一个属性表示食物所对应的元素
  element: HTMLElement
  mythis=this

  constructor() {
    // 获取页面中的food元素并将其赋值给element
    this.element = document.getElementById('food')!
    this.change([[10, 0],[0,0]])
  }

  // 定义一个获取食物X轴坐标的方法
  get X() {
    return this.element.offsetLeft
  }

  // 定义一个获取食物Y轴坐标的方法
  get Y() {
    return this.element.offsetTop
  }

  myweizhi(){
    return [this.element.offsetLeft,this.element.offsetTop]
  }

  // 修改食物的位置
  change(notIn :number[][]) {
    let shuaxin=[this.suiji(),this.suiji()]
    let tui=true
    while(tui){
      notIn.forEach(element => {
        if(element[0]==shuaxin[0] && element[1]==shuaxin[1]){
          tui=false
        }
      });
      if(!tui){
        tui=true
        shuaxin=[this.suiji(),this.suiji()]
      }else{
        tui=false
      }
    }
    this.element.style.left = shuaxin[0] + 'px'
    this.element.style.top = shuaxin[1] + 'px'
  }

  suiji(){
    return Math.round(Math.random() * 29) * 10
  }
}

export default Food
