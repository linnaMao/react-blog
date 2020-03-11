import React from 'react';
import { Link } from "react-router-dom";
import style from './index.scss'
import store from '../store'
import * as actionCreates from '../store/actionCreates'

class BlogTag extends React.Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    store.subscribe(this.handleStoreChange)
  }

  handleStoreChange = () => {
    this.setState(store.getState())
  }

  componentDidMount() {
    store.dispatch(actionCreates.getTags())
  }


  render() {
    const { tags } = this.state
    return (
     <div className={style.tagWrap}>
       <div className={style.tagNum}>目前共计 { tags.length } 个标签</div>
        {
          tags.map(item => (
            <Link
              to={'/tag/'+ item.tagName} 
              key={item.tagId} 
              className={style.tag}
              onClick={this.handleTagClick}
              >
                { item.tagName }
              </Link>
          ))
        }
     </div>
    )
  }
}

export default BlogTag