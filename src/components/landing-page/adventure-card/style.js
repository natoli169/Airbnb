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
    height: 85vw;
    overflow: hidden;
  }
  .img-div{
    overflow: hidden;
    border-radius: 10px;
    height: 75%;
  }
  .card-img {
    height: 100%;
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
  }
  @media (min-width: 400px) {
    .card {
      height: 75vw;
    }
  }
  @media (min-width: 550px) {
    max-width: 90%
  }
  @media (min-width: 610px) {
    .cards {
      grid-template-columns: repeat(3, 1fr);
    }
    .card {
      height: 50vw;
    }
    .card {
      height: 45vw;
    }
  }
  @media (min-width: 800px) {
    .cards{
      grid-gap: 20px;
    }
  }
  @media (min-width: 930px) {
    .card{
      height: 45vw;
    }
  }
   @media (min-width: 985px) {
    .cards {
      grid-template-columns: repeat(4, 1fr);
    }
    .card{
      height: 35vw;
    }
  }
  @media (min-width: 1200px) {
    .cards {
      grid-template-columns: repeat(5, 1fr);
      grid-gap: 20px;
    }
    .card {
      height: 30vw;
    }
  }
  @media (min-width: 1700px) {
    .cards {
      grid-template-columns: repeat(5, 1fr);
    }
    .card {
      height: 30vw;
    }
  }
  @media (min-width: 2000px) {
    .card {
      height: 25vw;
    }
  }
  @media (min-width: 2300px) {
    .card {
      height: 20vw;
    }
  }
`;
