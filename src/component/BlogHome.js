import React from 'react';
import { Button } from "antd";
import style from './index.scss'
import IconFont from '../common/iconfont'
import articleImg from '../static/metaImg.jpg'

class BlogHome extends React.Component {
  render() {
    return (
     <div className={style.homeWrap}>
       <div className={style.cardMeta}>
          <h1 className={style.articleTitle}>关于react里的那些趣事</h1>
          <div className={style.articleMeta}>
            <span><IconFont type='icon-rili' /></span>
            <span>2020-03-10</span>
            <span> | </span>
            <span><IconFont type='icon-wenjian' /></span>
            <span>前端</span>
          </div>
          <div>
            <p>
              <img className={style.articleImg} src={articleImg} alt=""/>
              <Button className={style.articleBtn} size="large">阅读全文</Button>
            </p>
          </div>
       </div>
     </div>
    )
  }
}

export default BlogHome