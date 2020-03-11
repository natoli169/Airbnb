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
    line-height: 26px !important
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
    border-radius: 10px;
    height: 80vw;
  }
  .card-img {
    height: 100%;
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
    font-size: 10px !important;
    line-height: 12px !important;
    font-weight: 800 !important;
    margin: 5px 0 !important;
    text-transform: uppercase !important;
    color: inherit !important;
    cursor: pointer !important;
  }
  .sub-description{
    font-size: 14px !important;
    line-height: 18px !important;
    word-wrap: break-word !important;
    color: inherit !important;
    cursor: pointer !important;
    font-weight: inherit;
  }
  @media (min-width: 300px) {
    .cards {
      grid-template-columns: repeat(2, 1fr);
    }
    .img-div {
      height: 50vw;
    }
  }
  @media (min-width: 400px) {
    .img-div {
      height: 55vw;
    }
  }
  @media (min-width: 550px) {
    max-width: 95%
  }
  @media (min-width: 770px) {
    .description {
      font-size: 16px !important;
    }
    .sub-description{
      font-size: 16px !important;
      line-height: 20px !important;
    }
    .description-title{
      font-size: 12px !important;
      line-height: 16px !important;
    }
    .cards {
      grid-template-columns: repeat(3, 1fr);
    }
    .img-div {
      height: 37vw;
    }
  }
  @media (min-width: 800px) {
    .cards{
      grid-gap: 16px;
    }
  }
  @media (min-width: 930px) {
    .img-div{
      // height: 45vw;
    }
  }
   @media (min-width: 1000px) {
    .cards {
      grid-template-columns: repeat(4, 1fr);
    }
    .img-div{
      height: 30vw;
    }
  }
  @media (min-width: 1200px) {
     max-width: 90%;
    .cards {
      grid-template-columns: repeat(5, 1fr);
    }
    .img-div {
      height: 23vw;
    }
  }
  @media (min-width: 1700px) {
    max-width: 85%;
    .cards {
      grid-template-columns: repeat(6, 1fr);
      grid-gap: 18px;
    }
    .img-div {
      height: 18vw;
    }
  }
  @media (min-width: 2000px) {
    max-width: 1760px;
  }
`;
