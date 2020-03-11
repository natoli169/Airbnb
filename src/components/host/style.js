import styled from "styled-components";

export const Container = styled.div`
  margin: 50px 50px;
  .title {
    font-weight: 100;
    font-size: 50px;
    margin-bottom: 60px;
  }
  .form-group {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 100px 60px;
  }
  .form__label {
    font-family: "Roboto", sans-serif;
    font-size: 1.2rem;
    margin-left: 2rem;
    margin-top: 0.7rem;
    display: block;
    transition: all 0.3s;
    transform: translateY(0rem);
  }
  .text-input {
    font-family: "Roboto", sans-serif;
    color: #333;
    font-size: 1.2rem;
    margin: 0 auto;
    padding: 1.5rem 2rem;
    border-radius: 0.2rem;
    background-color: rgb(255, 255, 255);
    border: orangered 1px solid;
    width: 90%;
    display: block;
    border-bottom: 0.3rem solid transparent;
    transition: all 0.2s;
  }

  .text-input:placeholder-shown + .form__label {
    opacity: 0;
    visibility: hidden;
    -webkit-transform: translateY(-4rem);
    transform: translateY(-4rem);
  }
  .price {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5px;
  }
  .full {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5px;
    grid-column: 1/3;
  }
  .sub-title {
    font-weight: 100;
    font-size: 30px;
    margin-bottom: 20px;
    color: rgba(0, 0, 0, 0.8);
    margin-left: 20px;
  }
  .inputGroup {
    background-color: #fff;
    display: block;
    margin: 10px 0;
    position: relative;

    label {
      padding: 12px 30px;
      width: 100%;
      display: block;
      text-align: left;
      color: #3c454c;
      cursor: pointer;
      position: relative;
      z-index: 2;
      transition: color 200ms ease-in;
      overflow: hidden;

      &:before {
        width: 10px;
        height: 10px;
        border-radius: 50%;
        content: "";
        background-color: black;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale3d(1, 1, 1);
        transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
        opacity: 0;
        z-index: -1;
      }

      &:after {
        width: 32px;
        height: 32px;
        content: "";
        border: 2px solid #d1d7dc;
        background-color: #fff;
        background-image: url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E ");
        background-repeat: no-repeat;
        background-position: 2px 3px;
        border-radius: 50%;
        z-index: 2;
        position: absolute;
        right: 30px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        transition: all 200ms ease-in;
      }
    }

    input:checked ~ label {
      color: #fff;

      &:before {
        transform: translate(-50%, -50%) scale3d(56, 56, 1);
        opacity: 1;
      }

      &:after {
        background-color: orangered;
        border-color: orangered;
      }
    }

    input {
      width: 32px;
      height: 32px;
      order: 1;
      z-index: 2;
      position: absolute;
      right: 30px;
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      visibility: hidden;
    }
    input[type="file"] {
      display: none;
    }
    .image-upload {
      border: 1px solid #ccc;
      display: inline-block;
      padding: 6px 12px;
      cursor: pointer;
    }
  }
  .example_a {
    color: #fff !important;
    text-transform: uppercase;
    text-decoration: none;
    background: #ed3330;
    padding: 20px;
    border-radius: 5px;
    display: inline-block;
    border: none;
    transition: all 0.4s ease 0s;
  }
  .example_a:hover {
    background: #434343;
    letter-spacing: 1px;
    -webkit-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    -moz-box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
    box-shadow: 5px 40px -10px rgba(0, 0, 0, 0.57);
    transition: all 0.4s ease 0s;
  }
  @media screen and (max-width: 480px) {
    .form-group {
      display: flex;
      flex-flow: wrap column;
    }
    .full {
      display: flex;
      flex-flow: wrap column;
    }
  }
`;
