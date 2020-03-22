import styled from "styled-components";

export const Container = styled.div`
  .modal-wrapper {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .modal-box {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-height: 50%;
    width: 60%;
    overflow-y: auto;
    padding: 40px;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    z-index: 101;
  }
  .header {
    text-align: center;
  }
  .title {
    font-size: 3rem;
    background: -webkit-linear-gradient(#ff6e6e, #ba2a2a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 7px auto;
    padding-bottom: 15px;
    border-bottom: 1px solid orangered;
  }
  .main-form {
    .buy {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin-bottom: 40px;
      .form__group {
        position: relative;
        padding: 15px 0 0;
        margin-top: 10px;
        width: 80%;
      }

      .form__field {
        font-family: inherit;
        width: 100%;
        border: 0;
        border-bottom: 2px solid #9b9b9b;
        outline: 0;
        font-size: 1.3rem;
        color: #333;
        padding: 7px 0;
        background: transparent;
        transition: border-color 0.2s;

        &::placeholder {
          color: transparent;
        }

        &:placeholder-shown ~ .form__label {
          font-size: 1.3rem;
          cursor: text;
          top: 20px;
        }
      }

      .form__label {
        position: absolute;
        top: 0;
        display: block;
        transition: 0.2s;
        font-size: 1rem;
        color: #9b9b9b;
      }

      .form__field:focus {
        ~ .form__label {
          position: absolute;
          top: 0;
          display: block;
          transition: 0.2s;
          font-size: 1rem;
          color: #ff6e6e;
          font-weight: 700;
        }
        padding-bottom: 6px;
        font-weight: 700;
        border-width: 3px;
        border-color: red;
        border-image-slice: 1;
      }
      /* reset input */
      .form__field {
        &:required,
        &:invalid {
          box-shadow: none;
        }
      }
    }
    textarea {
      margin-top: 10px;
      margin-left: 50px;
      width: 500px;
      height: 100px;
      -moz-border-bottom-colors: none;
      -moz-border-left-colors: none;
      -moz-border-right-colors: none;
      -moz-border-top-colors: none;
      background: none repeat scroll 0 0 rgba(0, 0, 0, 0.07);
      border-color: -moz-use-text-color #ffffff #ffffff -moz-use-text-color;
      border-image: none;
      border-radius: 6px 6px 6px 6px;
      border-style: none solid solid none;
      border-width: medium 1px 1px medium;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.12) inset;
      color: #555555;
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-size: 1em;
      line-height: 1.4em;
      padding: 5px 8px;
      transition: background-color 0.2s ease 0s;
    }

    textarea:focus {
      background: none repeat scroll 0 0 #ffffff;
      outline-width: 0;
    }
    .btn {
      margin-top: 40px;
      border: none;
      padding: 8px 15px;
      color: white;
      background: radial-gradient(
        circle,
        rgba(244, 39, 39, 1) 0%,
        rgba(233, 96, 96, 1) 50%,
        rgba(255, 0, 0, 1) 100%
      );
    }
  }
  .brk-btn {
    position: relative;
    background: none;
    color: black;
    text-transform: uppercase;
    text-decoration: none;
    border: 0.2em solid red;
    padding: 0.5em 1em;
    &::before {
      content: "";
      display: block;
      position: absolute;
      width: 10%;
      background: #222;
      height: 0.3em;
      right: 20%;
      top: -0.21em;
      transform: skewX(-45deg);
      -webkit-transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
      transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
    }
    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 10%;
      background: #222;
      height: 0.3em;
      left: 20%;
      bottom: -0.25em;
      transform: skewX(45deg);
      -webkit-transition: all 0.45 cubic-bezier(0.86, 0, 0.07, 1);
      transition: all 0.45s cubic-bezier(0.86, 0, 0.07, 1);
    }
    &:hover {
      &::before {
        right: 80%;
      }
      &::after {
        left: 80%;
      }
    }
  }
`;
