import styled from 'styled-components';

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;

    li {
      & + li {
        margin-left: 48px;
      }
    }
  }
`;
