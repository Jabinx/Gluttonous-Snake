// 定义表示记分牌的类
class ScorePanel{
    score = 0;

    scoreEle: HTMLElement;

    constructor() {
        this.scoreEle = document.getElementById('score')!;
    }

    //设置一个加分的方法
    addScore(){
        // 使分数自增
        this.scoreEle.innerHTML = ++this.score + '';
    }
}

export default ScorePanel;