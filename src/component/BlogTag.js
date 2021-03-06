import React from 'react';
import { Link } from "react-router-dom";
import style from './index.scss'
import store from '../store'
import * as actionCreates from '../store/actionCreates'

class BlogTag extends React.Component {
  constructor(props) {
    super(props)
    this.isUnMount = false
    this.state = store.getState()
    store.subscribe(this.handleStoreChange)
  }

  handleStoreChange = () => {
    if (this.isUnMount === false) {
      this.setState(store.getState())
    }
  }

  componentDidMount() {
    store.dispatch(actionCreates.getTags())
  }


  render() {
    const { tags } = this.state
    return (
     <div className={style.tagWrap}>
       <div className={style.tagNum}>目前共有 <span>{ tags.length }</span> 个标签哦~~</div>
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

  componentWillUnmount() {
    this.isUnMount = true
  }
}

export default BlogTag