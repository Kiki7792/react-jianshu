import React, { Component } from 'react'
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

class Header extends Component {
  render() {
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
            <NavSearch></NavSearch>
            <span className='iconfont search'>&#xe60c;</span>
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
}

export default Header