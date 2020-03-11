import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 80px auto;
  padding: 0;
  .title {
    font-weight: 100;
    margin-bottom: 15px;
    margin-top: 30px;
    padding-right: 20px;
    padding-left: 20px;
  }
  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 5px 0;
    margin-bottom: 10px;
    padding-right: 10px;
    padding-left: 10px;
    overflow-x: auto;
  }
  .card {
    box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-flow: wrap column;
    border-radius: 15px;
    min-width: 150px;
    margin-right: 10px;
    margin-left: 10px;
  }
  .card-img {
    max-height: 200px;
    width: 100%;
    border-radius: 15px 15px 0 0;
  }
  .catagoery {
    font-weight: 400;
    font-size: 1rem;
    padding: 20px 10px;
  }
  @media (min-width: 550px) {
    max-width: 90%
  }
  @media (min-width: 1200px) {
    .card {
      flex-direction: row;
      max-width: 400px;
      text-align: center;
    }
    .card-img {
      width: 30%;
      border-radius: 15px 0 0 15px;
    }
    .catagoery {
      font-size: 1.2rem;
    }
  }
`;
