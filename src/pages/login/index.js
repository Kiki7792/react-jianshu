import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
// https://bobbyhadz.com/blog/react-export-redirect-was-not-found-in-react-router-dom
import { Navigate } from 'react-router-dom'
import * as actionCreators from './store/actionCreators'
import { LoginBox, LoginWrapper, Input, Button } from './style'

class Login extends PureComponent {
  render() {
    const { handleLogin, login } = this.props
    if (!login) {
      return (
        <Fragment>
          <LoginWrapper>
            <LoginBox>
              <Input placeholder='账号' ref={(input) => {this.account = input}} />
              <Input placeholder='密码' type='password' ref={(input) => { this.password = input }} />
              <Button onClick={() => handleLogin(this.account, this.password)}>登陆</Button>
            </LoginBox>
          </LoginWrapper>
        </Fragment>
      )
    } else {
      // 重定向到 /
      return <Navigate to='/' />
    }
  }
}

const mapState = state => ({
  login: state.getIn(['login', 'login'])
})

const mapDispatch = dispatch => ({
  handleLogin(accountElm, passwordElm) {
    dispatch(actionCreators.handleLogin(accountElm.value, passwordElm.value))
  }
})

export default connect(mapState, mapDispatch)(Login)