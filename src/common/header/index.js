import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  Addition,
  Button
} from './style'

// 无状态组件 - 提高性能
const Header = props => {
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className='left active'>首页</NavItem>
        <NavItem className='left'>下载App</NavItem>
        <NavItem className='right'>
          <span className='iconfont'>&#xe636;</span>
        </NavItem>
        <NavItem className='right'>登陆</NavItem>
        <SearchWrapper>
          <CSSTransition
            in={props.focused}
            timeout={200}
            classNames="slide"
          >
            <NavSearch
              className={props.focused ? 'focused' : ''}
              onFocus={props.handleInputFocus}
              onBlur={props.handleInputBlur}
            ></NavSearch>
          </CSSTransition>
          {/* <span className={[props.focused ? 'focused' : '', 'iconfont search'].join(' ')}>&#xe60c;</span> */}
          <span className={`iconfont search ${props.focused ? 'focused' : ''}`}>&#xe60c;</span>
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className='reg'>注册</Button>
        <Button className='writting'>
          <span className='iconfont pencil'>&#xe6eb;</span>
          写文章
        </Button>
      </Addition>
    </HeaderWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    focused: state.focused
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = {
        type: 'search_focus'
      }
      dispatch(action)
    },
    handleInputBlur() {
      const action = {
        type: 'search_blur'
      }
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)