import { fromJS } from "immutable"

const defaultState = fromJS({
  title: '成本太高',
  content: '<img src="https://upload.jianshu.io/admin_banners/web_images/5055/348f9e194f4062a17f587e2963b7feb0b0a5a982.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="" /><p>闺蜜结婚快二十年了，孩子今年考上了一所理想的大学。</p><p>她跟她老公一直感情不和，都分居十年了，只不过还在一个屋檐下生活。</p><p>很多次，她跟我抱怨说，老公除了交给家里生活费什么也不管。她说等孩子一考上大学就离婚，我也信以为真了。</p>'
})

const reducer = (state = defaultState, action) => {
  
  return state
}

export default reducer