import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  .menu{
    margin: 20px 15px 20px 0;
  }
  .main {
    display: flex;
    justify-content: space-between;
    .logo {
      height: 30px;
      width: auto;
      margin: 15px 20px 0 20px;
    }
    .nav-search{
      padding: 15px 0;
      width: 200px;
    }
    .first {
      display: flex;
    }
    .menu {
      border: none;
      background: none;
      outline: none;
    }
    .menu-icon:hover {
      color: gray;
    }
  }
  .lists {
    display: ${props => (props.isOpen ? "block" : "none")};
  }
  .menu-list {
    display: block;
    padding: 20px 15px;
    border-bottom: 2px solid transparent;
  }
  .menu-list:hover {
    border-bottom-color: red
  }
  @media (max-width: 850px) {
    background-color: white;
    .lists {
      height: 100vh;
      border-bottom: 1px solid #0000001c;
    }
  }
  @media (min-width: 850px) {
    display: flex;
    justify-content: space-between;
    border-bottom: solid rgba(0, 0, 0, 0.2) 1px;
    font-size: 15px;
    .main .menu {
      display: none;
    }
    .lists {
      display: flex;
      text-align: center;
    }
    .lists a {
      color: rgb(80, 80, 80);
    }
  }
`;
