import styled from "styled-components";
import date from "../../assets/date.png";

export const Container = styled.div`
  .title {
    padding: 10px 0 20px 7px;
    font-size: 2rem;
    color: rgb(53, 52, 52);
    border-bottom: solid 1px red;
    margin-bottom: 20px;
  }

  .date {
    .date-picker {
      background: #fff url(${date}) 97% 50% no-repeat;
    }
    .date-picker::-webkit-inner-spin-button {
      display: none;
    }
    .date-picker::-webkit-calendar-picker-indicator {
      opacity: 0;
    }

    label {
      display: block;
    }
    .date-picker {
      border: 1px solid #c4c4c4;
      border-radius: 5px;
      background-color: #fff;
      padding: 3px 5px;
      box-shadow: inset 0 3px 6px rgba(0, 0, 0, 0.1);
      width: 190px;
    }
  }
  .btn {
    margin-top: 15px;
    padding: 10px;
    background: rgba(184, 55, 55, 0.959);
    border: none;
    color: white;
    border-radius: 2px;
    transition: 0.5s;
  }
  .btn:hover {
    background: red;
  }
`;
