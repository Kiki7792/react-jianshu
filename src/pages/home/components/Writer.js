import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { WriterWrapper, WriterItem, WriterInfo } from '../style'
class Writer extends PureComponent {
  render() {
    const { list } = this.props
    return (
      <WriterWrapper>
        <p className='biaoti'>
          <span>推荐作者</span>
          <span className='refresh'>
            <span
              className='iconfont spin'
            >&#xe6a2;</span>
            换一批
          </span>
        </p>
        {
          list.map(item => {
            return (
              <WriterItem key={item.get('id')}>
                <img
                  className='writer-pic'
                  src={item.get('imgUrl')}
                  alt=''
                />
                <WriterInfo>
                  <h3 className='title'>{item.get('title')}</h3>
                  <p className='desc'>{item.get('desc')}</p>
                </WriterInfo>
                <p className='follow'>+ 关注</p>
              </WriterItem>
            )
          })
        }
        <p className='find-more'>查看全部</p>
      </WriterWrapper>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'writerList'])
})

export default connect(mapState, null)(Writer)