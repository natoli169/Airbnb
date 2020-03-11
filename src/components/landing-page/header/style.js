import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 85vh;
  background-color: burlywood;
  padding-top: 150px;
  .form-container{
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    max-width: 500px;
    margin-bottom: 40px;
    box-shadow: #00000030 0px 0px 7px 0px;
  }
  .form-input-wrapper{
    margin-top: 20px;
  }
  .label{
    display: block;
    white-space: nowrap;
    width: 90%;
    overflow: hidden;
    text-overflow:ellipsis;
  }
  .d-flex{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  }
  .form-header{
    max-width: 300px;
  }
   @media (min-width: 1100px){
    height: 100vh;
  }
  @media (min-width: 500px){
    padding-left: 10%;
    padding-right: 10%;
  }
`;
