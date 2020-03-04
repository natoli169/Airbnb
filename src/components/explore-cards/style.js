import styled from "styled-components";

export const Container = styled.div`
  margin: 80px 20px 0 20px;
  .title {
    font-weight: 100;
    margin-bottom: 15px;
  }
  .cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    align-items: center;
  }
  .card {
    box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-flow: wrap column;
    border-radius: 15px;
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
