import React, { Component } from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Download from './components/Download'
import Writer from './components/Writer'
import { connect } from 'react-redux'
import { getHomeInfo, toggleTopShow } from './store/actionCreators'

import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style'

class Home extends Component {
  
  // 回到顶部
  handleScrollTop() {
    window.scrollTo(0, 0)
  }

  render() {
    const { showScroll } = this.props
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
        {
          showScroll
            ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>
            : null
        }
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvents()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapState = (state) => {
  return {
    showScroll: state.getIn(['home', 'showScroll'])
  }
}
const mapDispatch = (dispatch) => {
  return {
    changeHomeData() {
      dispatch(getHomeInfo())
    },

    changeScrollTopShow(e) {
      const scrollTopDistance = document.documentElement.scrollTop
      if (scrollTopDistance > 200) {
        dispatch(toggleTopShow(true))
      } else {
        dispatch(toggleTopShow(false))
      }
    }
  }
}
export default connect(mapState, mapDispatch)(Home)