import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import WithRouter from '../../hoc/WithRouter'
import * as actionCreators from './store/actionCreators'
import {
  DetailWrapper,
  Header,
  Content
} from './style'
class Detail extends PureComponent {
  render() {
    const { title, content } = this.props
    return (
      <Fragment>
        <DetailWrapper>
          <Header>{title}</Header>
          {/* 相当于 vue中 v-html */}
          <Content dangerouslySetInnerHTML={{__html: content}} />
        </DetailWrapper>
      </Fragment>
    )
  }

  componentDidMount() {
    const id = this.props.params.id
    this.props.getDetail(id)
  }
}

const mapState = (state, ownProps) => {
  // let id = ownProps.params.id
  return {
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
  }
}

const mapDispatch = dispatch => ({
  getDetail(id) {
    dispatch(actionCreators.getDetail(id))
  }
})

// https://blog.csdn.net/longgege001/article/details/123428358
export default WithRouter(connect(mapState, mapDispatch)(Detail))