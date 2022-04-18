import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: '社会热点',
      imgUrl: '//upload.jianshu.io/users/upload_avatars/17864223/cd083a11-5848-4610-b802-d6fc8941d0ef.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/100/h/100/format/webp'
    },
    {
      id: 2,
      title: '省会',
      imgUrl: '//upload.jianshu.io/users/upload_avatars/17864223/cd083a11-5848-4610-b802-d6fc8941d0ef.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/100/h/100/format/webp'
    }
  ]
})

const reducer = (state = defaultState, action) => {
  return state
}

export default reducer