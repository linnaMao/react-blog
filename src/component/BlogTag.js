import React from 'react';
import { Link } from "react-router-dom";
import style from './index.scss'
import store from '../store'

class BlogTag extends React.Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    store.subscribe(this.handleStoreChange)
  }

  handleStoreChange = () => {
    this.setState(store.getState())
  }
  handleTagClick = () => {

  }


  render() {
    const { tags } = this.state
    console.log(tags);
    return (
     <div className={style.tagWrap}>
       <div className={style.tagNum}>目前共计 { tags.length } 个标签</div>
        {
          tags.map(item => (
            <Link
              to={'/tag/'+ item.name} 
              key={item.id} 
              className={style.tag}
              onClick={this.handleTagClick}
              >
                { item.name }
              </Link>
          ))
        }
     </div>
    )
  }
}

export default BlogTag