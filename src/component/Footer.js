import React from 'react';
import style from './index.scss'
import IconFont from '../common/iconfont'

class Footer extends React.Component {
  render() {
    return (
     <div className={style.footerWrap}>
       @2020
      <IconFont type="icon-aixin"/>
      LinnaMao
     </div>
    )
  }
}

export default Footer