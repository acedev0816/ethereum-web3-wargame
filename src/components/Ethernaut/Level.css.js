import styled from 'styled-components';

export const Root = styled.div`
  padding-top: 25px;
`;

export const PageHeader = styled.div`
  /* padding: 0 30px; */
  display: flex;
  flex-direction: row;
  align-items: center;

  > *:first-child {
    flex: 1;
  }
  > *:last-child {
    flex: 0;
  }

  border-bottom: 1px solid #d8d8d8;
  padding-bottom: 10px;
  margin-bottom: 15px;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 400;
`;

export const Label = styled.small`
  padding: 0 30px;
`;
