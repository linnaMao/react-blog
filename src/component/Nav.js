import React from 'react';
import { Link } from "react-router-dom";
import style from './index.scss'
import IconFont from '../common/iconfont';

class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      navItem: [
        {
          icon: 'icon-ai-home',
          name: '首页',
          href: '/'
        },
        {
          icon: 'icon-2',
          name: '标签',
          href: '/tag'
        },
        {
          icon: 'icon-gerenzhongxin',
          name: '关于',
          href: '/about'
        }
      ]
    }
  }
  render() {
    const { navItem } = this.state
    return (
     <div className={style.navWrap}>
       <div className={style.navTitle}>
         LinnaMao's Blog
       </div>
       <div className={style.navMotto}>
         Persist Because Of Love
       </div>
       <div className={style.navAllItem}>
         {
           navItem.map(item => (
            <Link to={item.href} key={item.icon} className={style.navItem}>
              <IconFont type={item.icon} />
              <div>{item.name}</div>
            </Link>
           ))
         }
       </div>
     </div>
    )
  }
}

export default Nav