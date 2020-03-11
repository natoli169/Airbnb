import styled from "styled-components";

export const Container = styled.div`
width: 100%;
  padding-right: 20px;
  padding-left: 20px;
  margin: 80px auto;
  .title {
    color: #222222 !important;
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
    margin-bottom: 5px;
    font-weight: 600 !important;
    font-size: 22px !important;
    line-height: 26px !important;
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
    font-size: 14px !important;
    line-height: 24px !important;
    color: #222222 !important;
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
    font-weight: 400 !important;
    text-align: left;
    margin: 5px 0;
  }
  .description-title{
    font-size: 12px !important;
    line-height: 16px !important;
    font-weight: 100 !important;
    margin: 5px 0 !important;
    color: #0009 !important;
    cursor: pointer !important;
  }
  .sub-description{
    font-size: 14px !important;
    line-height: 18px !important;
    word-wrap: break-word !important;
    color: inherit !important;
    cursor: pointer !important;
    font-weight: inherit;
    margin: 5px 0 !important;
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
      font-size: 16px !important;
    }
    .sub-description{
      font-size: 16px !important;
      line-height: 20px !important;
    }
    .description-title{
      font-size: 14px !important;
      line-height: 20px !important;
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