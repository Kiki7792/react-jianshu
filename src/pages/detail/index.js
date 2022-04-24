import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
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
}

const mapState = state => ({
  title: state.getIn(['detail', 'title']),
  content: state.getIn(['detail', 'content'])
})

export default connect(mapState, null)(Detail)