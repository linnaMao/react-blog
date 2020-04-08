import React from 'react';
import style from './index.scss'

class BlogAbout extends React.Component {
  render() {
    return (
     <div className={style.aboutWrap}>
       <p>我是一个目前在浙江科技学院就读的大三学生</p>
       <p>很开心大家能来到我的博客</p>
       <p>现在的我在计算机专业，但是好像也没学到什么，哈哈</p>
       <p>大一的时候很无忧无虑，没有对工作的苦恼，也没有对未来的规划。直到大二进了一个实验室，碰到了一群为梦想努力着的学长学姐们...</p>
       <p>他们让我明白了计算机的魅力，让我做出了放弃后端的决心，更让我在学习前端的道路上勇往直前（咳咳，其实也是困难重重的）</p>
       <p>想要在自己的博客里面记录自己的学习笔记，于是就开始写了它</p>
       <p>我喜欢记录，喜欢讨论，喜欢交流</p>
       <p>但我也喜欢安安静静的写代码，不被打扰</p>
       <p>除此之外，娱乐的生活总是要有的</p>
       <p>喜欢...我的男盆友（哈哈哈）</p>
     </div>
    )
  }
}

export default BlogAbout