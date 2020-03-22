import styled from "styled-components";

export const Container = styled.div`
  padding: 40px 0 50px 50px;

  .header {
    display: grid;

    margin-bottom: 50px;
    .main-text {
      margin-bottom: 20px;
      .title {
        font-size: 2rem;
        color: rgb(53, 52, 52);
      }
      .sub {
        color: gray;
        text-decoration: underline;
        font-size: small;
      }
    }
    .dis {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 20px;

      border-top: 1px gray solid;
      border-bottom: 1px gray solid;
      border-radius: 20px 0 0 20px;

      width: 90%;
      .image {
        border-radius: 20px 0 0 20px;
      }
      .dis-text {
        margin: 20px;
        .host {
          font-size: 2rem;
          color: rgb(44, 44, 44);
          font-weight: 100;
        }
        .hosted {
          font-size: 3rem;
          color: black;
          .listed {
            font-size: 15px;
          }
        }
        .facilities {
        }
        .facility {
          display: flex;
          margin: 10px 0;
          align-items: center;
          .facility-text {
            margin-left: 20px;
            font-size: 1.5rem;
          }
        }
        .address {
          padding: 20px;
          border-radius: 10px;
          background: aliceblue;
          color: #333;
          .state {
            font-weight: 100;
          }
          .city {
            font-weight: 100;
          }
          .streetAdress {
            font-size: 20px;
          }
        }
      }
    }
  }
  .description {
    margin-right: 50px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
    .main {
      grid-column: 1/3;
      .detail {
        margin: 80px 0;
        padding: 30px 10px 50px 30px;
        background: aliceblue;
        border-radius: 15px;
        color: #333;
        .discription {
          h1 {
            font-size: 3rem;
            font-weight: 100;
            padding-bottom: 3px;
            border-bottom: 1px solid #333;
            margin-bottom: 5px;
          }
          p {
            font-size: 1.2rem;
          }
        }
        .his {
          margin-top: 20px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          h2 {
            font-weight: 500;
            font-style: italic;
            padding-bottom: 5px;
            font-size: 1.7rem;
          }
        }
      }
    }
    .sub {
    }
  }
`;
