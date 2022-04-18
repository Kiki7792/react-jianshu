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