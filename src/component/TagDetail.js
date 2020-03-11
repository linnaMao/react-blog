import React from 'react';
import style from './index.scss';
import store from '../store';
import moment from '../common/moment'

class TagDetail extends React.Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    store.subscribe(this.handleStoreChange)
  }

  handleStoreChange = () => {
    this.setState(store.getState())
  }

  render() {
    const { name } = this.props.match.params
    const { list } = this.state
    return (
     <div className={style.tagDetailWrap}>
       <div className={style.tag}> <span>{name}</span> 标签</div>
       {
         list.map(item => {
           if (item.tag === name) {
             return (
              <div className={style.articleTitle}>
                <header>
                  <div className={style.time}>{ moment(item.time) }</div>
                  <h3 className={style.title}>{ item.title }</h3>
                </header>
              </div>
             )
           }
         })
       }
       
     </div>
    )
  }
}

export default TagDetail