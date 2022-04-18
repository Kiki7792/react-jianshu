import React, { Component } from 'react'
import { Downloadwrapper, DownloadRight } from '../style'

class Download extends Component {
  render() {
    return (
      <Downloadwrapper>
        <img
          className='download-pic'
          src='https://upload.jianshu.io/admin_banners/web_images/5055/348f9e194f4062a17f587e2963b7feb0b0a5a982.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
          alt=''
        />
        <DownloadRight>
          <h3>下载简书手机App</h3>
          <p className='desc'>随时随地发现和创作内容</p>
        </DownloadRight>
      </Downloadwrapper>
    )
  }
}

export default Download