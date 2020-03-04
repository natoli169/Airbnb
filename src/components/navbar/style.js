import styled from "styled-components";

export const Container = styled.div`
  .main {
    display: flex;
    justify-content: space-between;
    padding: 31px;
    .logo {
      height: 30px;
      width: auto;
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
    padding: 5px 0 0 10px;
  }
  .menu-list {
    display: block;
    padding: 10px 0 10px 31px;
  }

  @media (min-width: 850px) {
    display: flex;
    justify-content: space-between;
    padding: 18px;
    border-bottom: solid rgba(0, 0, 0, 0.2) 1px;
    font-size: 15px;
    allign-items: center;
    .main {
      padding: 0;
    }
    .main .menu {
      display: none;
    }
    .lists {
      display: flex;
      text-align: center;
    }
    .lists a {
      color: rgb(80, 80, 80);
      marhin-right: 10px;
    }
  }
`;
