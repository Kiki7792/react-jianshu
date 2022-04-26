import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
// import * as actionCreators from './store/actionCreators'
import { LoginBox, LoginWrapper, Input, Button } from './style'

class Login extends PureComponent {
  render() {
    return (
      <Fragment>
        <LoginWrapper>
          <LoginBox>
            <Input placeholder='账号' />
            <Input placeholder='密码' />
            <Button>登陆</Button>
          </LoginBox>
        </LoginWrapper>
      </Fragment>
    )
  }
}

const mapState = (state) => ({
  
})



export default connect(mapState, null)(Login)