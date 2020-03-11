import styled from "styled-components";

export const Container = styled.div`
width: 100%;
  padding-right: 20px;
  padding-left: 20px;
  margin: 80px auto;
  .title {
    font-weight: 100;
    margin-bottom: 5px;
  }
  .cards {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 15px;
    margin: 40px 0;
  }
  .card {
    width: 100%;
    height: 65vw;
    overflow: hidden;
  }
  .img-div{
    overflow: hidden;
    height: 75%;
    border-radius: 5px;
  }
  .card-img {
    height: 100%;
    width: 100%;
  }
  .description {
    font-weight: 100;
    font-size: 1em;
    text-align: left;
    margin: 5px 0;
  }
  @media (min-width: 300px) {
    .cards {
      grid-template-columns: repeat(2, 1fr);
    }
    .card {
      height: 35vw;
    }
  }
  @media (min-width: 550px) {
    max-width: 90%
  }
  @media (min-width: 600px) {
    .cards {
      grid-template-columns: repeat(3, 1fr);
    }
    .card {
      height: 25vw;
    }
  }
  @media (min-width: 1200px) {
    .cards {
      grid-template-columns: repeat(4, 1fr);
    }
    .card {
      height: 17vw;
    }
  }
`;