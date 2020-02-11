import styled from "styled-components";

export const Intro = styled.section`
  max-width: 660px;
  margin: 40px 0;

  h1 {
    font-size: 40px;
    font-weight: 900;
    line-height: 52px;

    @media (min-width: 450px) {
      font-size: 54px;
      line-height: 70px;
    }
  }

  p {
    margin-top: 40px;
    font-size: 24px;
    line-height: 38px;
  }

  a {
    color: #000;
    text-decoration: none;
    padding-bottom: 4px;
    border-bottom: 2px solid #000;
  }
`;

export const Emoji = styled.div`
  font-size: 42px;
  margin-bottom: 30px;
`;

export const Links = styled.div`
  margin-bottom: 60px;

  p {
    margin: 20px 0 40px;

    &:not(:first-child) {
      margin: 0;
      font-size: 20px;
    }
  }
`;

export const Small = styled.span`
  font-size: 16px;
`;
