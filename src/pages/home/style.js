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
  width: 280px;
  float: right;
`

export const BackTop = styled.div`
  position: fixed;
  right: 10px;
  bottom: 30px;
  width: 60px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 14px;
  padding: 0 10px;
  border: 1px solid #dcdcdc;
  cursor: pointer;
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

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`

// Recommend
export const RecommendWrapper = styled.div`
  margin: 0 0 30px;
`

export const RecommendItem = styled.div`
  width: 100%;
  height: 50px;
  border-radius: 4px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
  margin-bottom: 10px;
`

// Download
export const Downloadwrapper = styled.div`
  padding: 10px 22px;
  margin-bottom: 30px;
  border: 1px solid #dcdcdc;
  border-radius: 6px;

  .download-pic {
    display: inline-block;
    width: 60px;
    height: 60px;
  }
`

export const DownloadRight = styled.div`
  display: inline-block;
  margin-left: 10px;
  margin-top: 13px;
  vertical-align: top;
  
  .title {
    font-size: 15px;
    color: #333;
  }

  .desc {
    margin-top: 5px;
    font-size: 13px;
    color: #999;
  }
`

// Writer
export const WriterWrapper = styled.div`
  .biaoti {
    font-size: 14px;
    color: #969696;
    span {
      display: inline-block;
      height: 16px;
      line-height: 16px;
    }
    .refresh {
      float: right;
      cursor: pointer;
    }
  }

  .find-more {
    margin-top: 20px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    color: #787878;
    font-size: 13px;
    padding: 8px;
    text-align: center;
    background: #f7f7f7;
    cursor: pointer;
  }
`
export const WriterItem = styled.div`
  position: relative;
  margin-top: 15px;
  cursor: pointer;

  .writer-pic {
    display: inline-block;
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }

  .follow {
    position: absolute;
    top: 10px;
    right: 0;
    font-size: 13px;
    color: #42c02e;
  }
`
export const WriterInfo = styled.div`
  display: inline-block;
  margin-left: 10px;
  margin-top: 10px;
  vertical-align: top;
  .title {
    font-size: 14px;
    color: #333;
  }

  .desc {
    font-size: 12px;
    color: #969696;
    margin-top: 6px;
    cursor: text;
  }
`