class she {
    // 表示蛇头的元素
    head: HTMLElement
    // 蛇的身体（包括蛇头）
    bodies: HTMLCollection
    // 获取蛇的容器
    element: HTMLElement;
    //蛇的位置
    in = [[10, 0],[0,0]]
    //蛇的方向
    fanxiang = ''
  
    constructor() {
      this.element = document.getElementById('snake')!
      this.head = document.querySelector('#snake > div') as HTMLElement
      this.bodies = this.element.getElementsByTagName('div')
      this.element.insertAdjacentHTML('beforeend', '<div></div>')
      ;(this.bodies[0] as HTMLElement).style.left = 10 + 'px'
      ;(this.bodies[0] as HTMLElement).style.top = 0 + 'px'
    }
  
    // 获取蛇的坐标（蛇头坐标）
    get X() {
      return this.head.offsetLeft
    }
  
    // 获取蛇的Y轴坐标
    get Y() {
      return this.head.offsetTop
    }
  
    run(go: string) {
      this.in.pop()
      switch (go) {
        case 'ArrowUp':
        case 'w':
          (this.fanxiang == 'ArrowDown' || this.fanxiang == 's') || (this.fanxiang = go)
          break
        case 'ArrowDown':
        case 's':
          (this.fanxiang == 'ArrowUp' || this.fanxiang == 'w') || (this.fanxiang = go)
          break
        case 'ArrowLeft':
        case 'a':
          (this.fanxiang == 'ArrowRight' || this.fanxiang == 'd') || (this.fanxiang = go)
          break
        case 'ArrowRight':
        case 'd':
          (this.fanxiang == 'ArrowLeft' || this.fanxiang == 'a') || (this.fanxiang = go)
          break
      }
      switch (this.fanxiang) {
        case 'ArrowUp':
        case 'w':
          this.in.unshift([this.X, this.Y - 10])
          break
        case 'ArrowDown':
        case 's':
          this.in.unshift([this.X, this.Y + 10])
          break
        case 'ArrowLeft':
        case 'a':
          this.in.unshift([this.X - 10, this.Y])
          break
        case 'ArrowRight':
        case 'd':
          this.in.unshift([this.X + 10, this.Y])
          break
      }
      // console.log(this.in);
      if((this.in[0][0] < 0 || this.in[0][0] > 290)||(this.in[0][1] < 0 || this.in[0][1] > 290)){
        return true
      }
      this.dorun()
      return false
    }
  
    add() {
      this.element.insertAdjacentHTML('beforeend', '<div></div>')
  
      let last: number = this.in.length - 1
      // console.log(last)
  
      if (last == 0) {
        switch (this.fanxiang) {
          case 'ArrowUp':
          case 'w':
            this.in.push([this.X, this.Y + 10])
            break
          case 'ArrowDown':
          case 's':
            this.in.push([this.X, this.Y - 10])
            break
          case 'ArrowLeft':
          case 'a':
            this.in.push([this.X + 10, this.Y])
            break
          case 'ArrowRight':
          case 'd':
            this.in.push([this.X - 10, this.Y])
            break
        }
      } else {
        if (this.in[last][1] == this.in[last - 1][1]) {
          if (this.in[last][0] < this.in[last - 1][0]) {
            this.in.push([this.in[last][0] - 10, this.in[last][1]])
          } else {
            this.in.push([this.in[last][0] + 10, this.in[last][1]])
          }
        } else {
          if (this.in[last][1] < this.in[last - 1][1]) {
            this.in.push([this.in[last][0], this.in[last][1] - 10])
          } else {
            this.in.push([this.in[last][0], this.in[last][1] + 10])
          }
        }
      }
  
      this.dorun()
    }
  
    getin(){
      return this.in
    }
  
    dorun() {
      for (let i = 0; i < this.in.length; i++) {
        // 将值设置到当前身体上
        ;(this.bodies[i] as HTMLElement).style.left = this.in[i][0] + 'px'
        ;(this.bodies[i] as HTMLElement).style.top = this.in[i][1] + 'px'
      }
    }
  }
  
  export default she
  