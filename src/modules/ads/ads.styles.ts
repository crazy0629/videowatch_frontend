import styled from "styled-components";

export const AdsDetailsSectionWrapper = styled.div`
  border-top: 1px solid #eaeaea;
  padding: 40px 0;
  height: 100%;
  overflow: auto;
`;

export const AdsDetailsContainer = styled.div`
  width: 95%;
  display: flex;
  margin: auto;
`;

export const AdsDetailsVideoInfoWrapper = styled.div`
  flex: 1;
  width: 100%;
`;

export const AdsDetailsThumbWrapper = styled.div`
  max-width: 460px;
  width: 100%;
  margin-left: 86px;
  .mySwiper {
    .swiper-slide {
      position: relative;
      cursor: pointer;
      span {
        position: absolute;
        display: flex;
        width: 50px;
        height: 30px;
        background: #000;
        color: #fff;
        bottom: 12px;
        right: 10px;
        font-size: 14px;
        font-weight: 500;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
      }
      img {
        object-fit: cover;
      }
    }
    .swiper-button-prev,
    .swiper-button-next {
      &::after {
        font-size: 30px !important;
        color: #000000;
        font-weight: 900;
      }
    }
  }
`;

export const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 60%;
  iframe, video {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const VideoInfoWrapper = styled.div`
  margin-top: 20px;
  h1 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #000;
    font-size: 24px;
    font-weight: 700;
    border-bottom: 1px solid #00000020;
    padding-bottom: 16px;
    flex-wrap: wrap;
    & > div {
      display: flex;
      padding-top: 16px;
      width: 100%;
      justify-content: space-between;
    }
    & > span {
      width: 100%;
    }
    h2 {
      width: 100%;
      font-size: 16px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
      margin-top: 20px;
      span {
        margin-left: 12px;
        font-weight: 400;
        color: #ff6f00;
        cursor: pointer;
      }
    }
    p {
      color: #000;
      font-size: 12px;
      font-weight: 300;
      display: flex;
      align-items: center;
      span {
        margin-left: 12px;
      }
    }
  }
  & > p {
    color: #000;
    font-size: 14px;
    font-weight: 400;
    line-height: 20.4px; /* 145.714% */
    margin-top: 16px;
    margin-bottom: 24px;
  }
  & > span {
    text-decoration: underline;
    cursor: pointer;
    color: #000;
    font-size: 14px;
    font-weight: 400;
  }
  .action {
    display: flex;
    justify-content: flex-end;
    button {
      margin-left: 16px;
      span {
        margin-left: 12px;
      }
      border: 1px solid #afafaf;
      border-radius: 5px;
      height: 34px;
      width: 95px;
      display: flex;
      align-items: center;
      cursor: pointer;
      justify-content: center;
      color: #000;
      font-size: 14px;
      font-weight: 400;
      background: #fff;
      line-height: 20.4px; /* 145.714% */
    }
  }
`;
