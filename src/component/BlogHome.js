import React from 'react'
import { Button } from "antd"
import { Link } from 'react-router-dom';
import style from './index.scss'
import IconFont from '../common/iconfont'
import articleImg from '../static/metaImg.jpg'
import store from '../store'
import * as actionCreates from '../store/actionCreates'
import  moment from '../common/moment'

class BlogHome extends React.Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    store.subscribe(this.handleStoreChange)
  }

  handleStoreChange = () => {
    this.setState(store.getState())
  }

  componentDidMount() {
    store.dispatch(actionCreates.getArticle())
  }

  render() {
    const { list } = this.state
    console.log(list);
    return (
     <div className={style.homeWrap}>
       {
         list.map(item => (
          <div className={style.cardMeta} key={item.id}>
            <h1 className={style.articleTitle}>{ item.title }</h1>
            <div className={style.articleMeta}>
              <span><IconFont type='icon-rili' /></span>
              <span>{ moment(item.time) }</span>
              <span> | </span>
              <span><IconFont type='icon-wenjian' /></span>
              <span>{ item.tag }</span>
            </div> 
            <div>
              <p>
                <img className={style.articleImg} src={articleImg} alt=""/>
                <Link>
                  <Button className={style.articleBtn} size="large">阅读全文</Button>
                </Link>
                
              </p>
            </div>
          </div>
         ))
       }
     </div>
    )
  }
}

export default BlogHome