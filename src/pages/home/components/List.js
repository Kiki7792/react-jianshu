import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { ListItem, ListInfo, LoadMore } from '../style'
import * as actionCreators from '../store/actionCreators'
class List extends PureComponent {
  render() {
    const { list, page, getMoreList } = this.props
    return (
      <Fragment>
        {
          list.map((item, index) => {
            return (
              // <ListItem key={item.get('id')}>
              <Link key={index} to={`/detail/${item.get('id')}`}>
                <ListItem>
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
              </Link>
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
    dispatch(actionCreators.getMoreList(page))
  }
})
export default connect(mapState, mapDispatch)(List)