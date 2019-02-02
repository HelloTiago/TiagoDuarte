import styled from 'styled-components';

export const Text = styled.span`
  cursor: pointer;
  display: block;
  border: 0;
  padding: 15px 24px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.08);
  color: ${({ color }) => () => {
    switch (color) {
      case 'primary':
        return '#fff';
      case 'secondary':
        return '#000';
      default:
        return '#fff';
    }
  }};
  background-color: ${({ color }) => () => {
    switch (color) {
      case 'primary':
        return '#4D64E1';
      case 'secondary':
        return '#fff';
      default:
        return '#4D64E1';
    }
  }};
`;
