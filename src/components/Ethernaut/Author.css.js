import styled from 'styled-components';

export const Root = styled.div`
  color: #282846;
  border-top: 1px solid #d8d8d8;
  padding: 25px 0;
`;

export const Headline = styled.div`
  font-size: 1.2em;
  margin-bottom: 20px;
`;

export const AuthorBox = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 0.9em;
`;

export const AuthorItem = styled.span`
  display: flex-item;
  font-weight: bold;
  padding-right: 15px;
  margin-right: 15px;
  border-right: 1px solid black;

  &:last-child {
    border: none;
  }

  > a {
    color: inherit;
  }
`;

export const Description = styled.p``;
export const Donate = styled.span`
  color: #4e5ee4;
`;
