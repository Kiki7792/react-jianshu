import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'

class Write extends PureComponent {
  render() {
    const { login } = this.props
    if (login) {
      return (
        <div>write</div>
      )
    } else {
      return <Navigate to='/login' />
    }
  }
}

const mapState = state => ({
  login: state.getIn(['login', 'login'])
})

export default connect(mapState, null)(Write)