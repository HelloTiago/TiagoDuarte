import styled from "styled-components";

export const SubContainer = styled.header`
  max-width: 1248px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 0;

  a {
    color: #000;
    text-decoration: none;
    font-weight: 500;
    font-size: 17px;
    padding-bottom: 4px;

    &:hover {
      border-bottom: 2px solid #000;
    }
  }
`;

export const Logo = styled.span`
  font-weight: bold;
  font-size: 26px;
  color: #000;
`;
