import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 695px;
  .content {
    display: flex;
    flex-flow: wrap column;
    justify-content: center;
    align-items: center;
    background: #ab9f9e;

    .main-form {
      padding: 80px 120px 180px 120px;
      box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.2);
      background: rgb(219, 223, 226);
      border-radius: 15px 0 15px 0;
      text-align: center;
    }
    .title {
      padding-bottom: 8px;
      margin-bottom: 40px;
      font-weight: 200;
      font-size: 4rem;
      color: rgb(62, 62, 63);
    }
    .btn {
      outline: none;
      height: 40px;
      text-align: center;
      width: 130px;
      border-radius: 40px;
      background: #fff;
      border: 2px solid #ab9f9e;
      color: #6e5858;
      letter-spacing: 1px;
      text-shadow: 0;
      padding: 0;
      font-size: 18px;
      cursor: pointer;
      transition: all 0.25s ease;
      margin: auto;
      &:hover {
        color: white;
        background: #ab9f9e;
      }
      &:active {
        letter-spacing: 3px;
      }
    }
  }
  .log-img {
    height: 695px;
  }
  .form input {
    display: block;
    outline: 0;
    background: #f2f2f2;
    border: 0;
    margin: 0 0 15px;
    padding: 10px 15px;
    box-sizing: border-box;
    font-size: 14px;
  }
`;
