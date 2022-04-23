import React, { Component } from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Download from './components/Download'
import Writer from './components/Writer'
import { connect } from 'react-redux'
import { getHomeInfo } from './store/actionCreators'

import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style'

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            className='banner-img'
            src='https://upload.jianshu.io/admin_banners/web_images/5055/348f9e194f4062a17f587e2963b7feb0b0a5a982.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540'
            alt=''
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Download />
          <Writer />
        </HomeRight>
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.changeHomeData()
  }
}

const mapState = (props) => {
  return {}
}
const mapDispatch = (dispatch) => {
  return {
    changeHomeData() {
      const action = getHomeInfo()
      dispatch(action)
    }
  }
}
export default connect(mapState, mapDispatch)(Home)