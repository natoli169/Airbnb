import styled from "styled-components";

export const Container = styled.div`
width: 100%;
  padding-right: 20px;
  padding-left: 20px;
  margin: 80px auto;
  .title {
    color: #222222;
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
    margin-bottom: 5px;
    font-weight: 600;
    font-size: 22px;
    line-height: 26px;
  }
  .cards {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 15px;
    margin: 40px 0;
  }
  .card {
    width: 100%;
    overflow: hidden;
  }
  .img-div{
    overflow: hidden;
    height: 45vw;
    border-radius: 5px;
  }
  .card-img {
    height: 100%;
    width: 100%;
  }
  .description {
    font-size: 14px;
    line-height: 24px;
    color: #222222;
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
    font-weight: 400;
    text-align: left;
    margin: 5px 0;
  }
  .description-title{
    font-size: 12px;
    line-height: 16px;
    font-weight: 100;
    margin: 5px 0;
    color: #0009;
    cursor: pointer;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .sub-description{
    font-size: 14px;
    line-height: 18px;
    word-wrap: break-word;
    color: inherit;
    cursor: pointer;
    font-weight: inherit;
    margin: 5px 0;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .price-description{
    font-weight: 600;
  }
  @media (min-width: 300px) {
    .cards {
      grid-template-columns: repeat(2, 1fr);
    }
    .img-div {
      height: 27vw;
    }
  }
  @media (min-width: 550px) {
    max-width: 95%
  }
  @media (min-width: 770){
    .description {
      font-size: 16px;
    }
    .sub-description{
      font-size: 16px;
      line-height: 20px;
    }
    .description-title{
      font-size: 14px;
      line-height: 20px;
    }
  }
  @media (min-width: 970px) {
    .cards {
      grid-template-columns: repeat(3, 1fr);
    }
    .img-div {
      height: 19vw;
    }
  }
  @media (min-width: 1200px) {
    max-width: 90%;
    .cards {
      grid-template-columns: repeat(4, 1fr);
    }
    .img-div {
      height: 13vw;
    }
  }
  @media (min-width: 1700px) {
    max-width: 85%;
  }
  @media (min-width: 2000px) {
    max-width: 1760px;
  }
`;