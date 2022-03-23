import styled from 'styled-components'
import logoPic from '../../assets/jianshu-logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  top: 1px;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic}) center center no-repeat;
  background-size: contain;
`

export const Nav = styled.div`
  width: 960px;
  height: 100%;
  margin: 0 auto;
  padding-right: 70px;
  box-sizing: border-box;
`

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
`
export const SearchWrapper = styled.div`
  position: relative;
  float: left;

  .iconfont.search {
    position: absolute;
    right: 5px;
    bottom: 4px;
    width: 30px;
    line-height: 30px;
    border-radius: 50%;
    text-align: center;
    &.focused {
      color: #fff;
      background: #969696;
    }
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  margin: 9px 0px 0px 20px;
  padding: 0 30px 0 20px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #666;
  // transition: all 0.5s ease-out;
  &::placeholder {
    color: #999;
  }

  &.focused {
    width: 240px;
    // transition: all 0.5s ease-in;
  }

  // 使用 react-transition-group - CSSTransition
  &.slide-enter {
    transition: all 0.2s ease-out;
  }
  
  // &.slide-enter-active {
  //   width: 240px;
  // }
  
  &.slide-exit {
    transition: all 0.2s ease-out;
  }

  // &.slide-exit-active {
  //   width: 160px;
  // }
`

export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px;
`

export const Button = styled.div`
  float: left;
  margin: 9px 20px 0px 0px;
  padding: 0 20px;
  line-height: 38px;
  border: 1px solid #ec6149;
  border-radius: 19px;
  font-size: 14px;

  &.reg {
    color: #ec6149;
  }

  &.writting {
    color: #fff;
    background: #ec6149;
    
    span.pencil {
      vertical-align: middle;
    }
  }
`