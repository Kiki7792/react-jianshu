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
  ],
  articleList: [
    {
      id: 1,
      title: '这是什么东西呢？',
      desc: '果园里，果树刚剪过枝，大大小小的枝杈随意堆放在果树趟子里。时令尚早，上一年的枯叶和杂草依然铺陈在大地上，新的草芽还在土层里蓄势待发。',
      imgUrl: '//upload.jianshu.io/users/upload_avatars/17864223/cd083a11-5848-4610-b802-d6fc8941d0ef.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/100/h/100/format/webp'
    },
    {
      id: 2,
      title: '这是什么东西呢？',
      desc: '果园里，果树刚剪过枝，大大小小的枝杈随意堆放在果树趟子里。时令尚早，上一年的枯叶和杂草依然铺陈在大地上，新的草芽还在土层里蓄势待发。',
      imgUrl: '//upload.jianshu.io/users/upload_avatars/17864223/cd083a11-5848-4610-b802-d6fc8941d0ef.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/100/h/100/format/webp'
    },
    {
      id: 3,
      title: '这是什么东西呢？3',
      desc: '果园里，果树刚剪过枝，大大小小的枝杈随意堆放在果树趟子里。时令尚早，上一年的枯叶和杂草依然铺陈在大地上，新的草芽还在土层里蓄势待发。',
      imgUrl: '//upload.jianshu.io/users/upload_avatars/17864223/cd083a11-5848-4610-b802-d6fc8941d0ef.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/100/h/100/format/webp'
    },
    {
      id: 4,
      title: '这是什么东西呢？',
      desc: '果园里，果树刚剪过枝，大大小小的枝杈随意堆放在果树趟子里。时令尚早，上一年的枯叶和杂草依然铺陈在大地上，新的草芽还在土层里蓄势待发。',
      imgUrl: '//upload.jianshu.io/users/upload_avatars/17864223/cd083a11-5848-4610-b802-d6fc8941d0ef.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/100/h/100/format/webp'
    },
  ]
})

const reducer = (state = defaultState, action) => {
  return state
}

export default reducer