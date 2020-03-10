import React from 'react';
import style from './index.scss'

class TagDetail extends React.Component {
  render() {
    return (
     <div className={style.tagDetailWrap}>
       <div className={style.tag}>前端标签</div>
       <div className={style.articleTitle}>
         <header>
          <div className={style.time}>2020-03-10</div>
          <h3 className={style.title}>性能优化</h3>
         </header>
       </div>
     </div>
    )
  }
}

export default TagDetail