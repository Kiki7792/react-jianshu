import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { ListItem, ListInfo, LoadMore } from '../style'
import * as actionCreators from '../store/actionCreators'
class List extends Component {
  render() {
    const { list, page, getMoreList } = this.props
    return (
      <Fragment>
        {
          list.map((item, index) => {
            return (
              // <ListItem key={item.get('id')}>
              <ListItem key={index}>
                <img
                  className='list-pic'
                  src={item.get('imgUrl')}
                  alt=''
                />
                <ListInfo>
                  <h3 className='title'>{item.get('title')}</h3>
                  <p className='desc'>{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            )
          })
        }
        <LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>
      </Fragment>
    )
  }
}

const mapState = state => ({
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage'])
})

const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    console.log('vv--', page)
    dispatch(actionCreators.getMoreList(page))
  }
})
export default connect(mapState, mapDispatch)(List)