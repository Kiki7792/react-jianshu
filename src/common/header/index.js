import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { Link } from 'react-router-dom'
import {
  getHotList,
  searchFocus,
  searchBlur,
  mouseEnter,
  mouseLeave,
  changePage
} from './store/actionCreators'
import * as loginActionCreators from '../../pages/login/store/actionCreators'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button
} from './style'
class Header extends PureComponent {

  getListArea() {
    const {
      focused,
      mouseIn,
      list,
      page,
      totalPage,
      handleMouseEnter,
      handleMouseLeave,
      handleChangePage
    } = this.props
    const jsList = list.toJS()
    const pageList = []
    if (jsList.length) {
      for(let i = (page - 1) * 10; i < page * 10; i++) {
        pageList.push(
          <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
        )
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
              <span
                ref={(icon) => {this.spinIcon = icon}}
                className='iconfont spin'
              >&#xe6a2;</span>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            { pageList }
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }

  render() {
    const { login, focused, list, handleInputFocus, handleInputBlur, logout } = this.props
    return (
      <HeaderWrapper>
        <Link to="/">
          <Logo />
        </Link>
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>
            <span className='iconfont'>&#xe636;</span>
          </NavItem>
          <Link to={login ? '' : '/login'}>
            <NavItem className='right' onClick={login ? logout : null}>{login ? '退出' : '登陆'}</NavItem>
          </Link>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              ></NavSearch>
            </CSSTransition>
            {/* <span className={[focused ? 'focused' : '', 'iconfont search'].join(' ')}>&#xe60c;</span> */}
            <span className={`iconfont search ${focused ? 'focused' : ''}`}>&#xe60c;</span>
            { this.getListArea() }
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

const mapStateToProps = (state) => {
  return {
    // focused: state.get('header').get('focused')
    // 等价于
    focused: state.getIn(['header', 'focused']),
    list: state.get('header').get('list'),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    login: state.getIn(['login', 'login'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      (list.size === 0) && dispatch(getHotList())
      dispatch(searchFocus())
    },
    handleInputBlur() {
      dispatch(searchBlur())
    },
    handleMouseEnter() {
      dispatch(mouseEnter())
    },
    handleMouseLeave() {
      dispatch(mouseLeave())
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      } else {
        originAngle = 0
      }
      spin.style.transform = `rotate(${originAngle + 360}deg)`
      let currentPage = page < totalPage ? (page + 1) : 1
      dispatch(changePage(currentPage))
    },
    logout() {
      dispatch(loginActionCreators.handleLogout())
      console.log('logout')
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)