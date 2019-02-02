import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1248px;
  margin: 0 auto;
  padding: 38px 24px;
`;

export const Service = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 96px;
  width: 100%;
  flex-wrap: wrap;

  @media (min-width: 500px) {
    flex-wrap: nowrap;
  }

  img {
    max-width: 100%;
  }

  h2 {
    margin-top: 16px;
  }

  p {
    color: #637381;
    margin-top: 16px;
    line-height: 22px;
  }
`;

export const ImageContainer = styled.div`
  flex: 0 1 615px;

  @media (max-width: 699px) {
    order: 0;
    margin-bottom: 42px;
  }
`;

export const ContentContainer = styled.div`
  flex: 1 1 0;

  @media (max-width: 699px) {
    order: 1;
  }
`;

export const Details = styled.div`
  margin-top: 24px;
`;

export const DetailItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;

  img {
    margin-right: 16px;
  }

  p {
    margin: 0;
    color: #637381;
    font-weight: 500;
  }
`;
