import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  padding-top: 30px;
  overflow: hidden;
`

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  width: 625px;

  .banner-img {
    width: 625px;
    height: 270px;
  }

  @media screen and (max-width: 1080px) {
    .banner-img {
      width: 485px;
      height: 210px;
    }
  }
`

export const HomeRight = styled.div`
  width: 240px;
  float: right;
`

// Topic
export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
  float: left;
  background: #f7f7f7;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 18px;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  box-sizing: content-box;

  .topic-pic {
    float: left;
    display: inline-block;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`

// List

export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;

  .list-pic {
    display: block;
    float: right;
    width: 150px;
    height: 100px;
    border-radius: 6px;
  }

  @media screen and (max-width: 1080px) {
    width: 485px;
  }
`

export const ListInfo = styled.div`
  width: calc(100% - 165px);
  float: left;

  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }

  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`