import styled from "styled-components";

export const Container = styled.div`
  margin-top: 140px;
  .links {
    color: #616161;
    font-size: 12px;
    padding: 35px 0;
    display: none;
    border-top: solid 1px rgba(0, 0, 0, 0.2);
  }

  .links-inner {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
    align-items: flex-start;
    justify-content: center;
  }

  .title {
    line-height: 1.8;
    color: black;
  }
  .list {
    line-height: 1.8;
    color: gray;
  }

  /* Footer */
  .footer {
    display: flex;
    padding: 20px;
    justify-content: space-between;
    border-top: solid 1px rgba(0, 0, 0, 0.2);
    width: 80%;
    margin: auto;
  }
  .copyright {
    color: gray;
    font-size: 1rem;
  }
  .social-links {
    display: flex;
  }
  .social-link {
    margin-right: 5px;
  }
  .social {
    height: 18px;
    width: 18px;
    display: block;
    fill: rgb(118, 118, 118);
  }
  @media (min-width: 600px){
    .links{
      display: block;
    }
  }
`;
