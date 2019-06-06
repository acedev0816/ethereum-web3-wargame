import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Root = styled.nav`
  min-width: 200px;
  width: 200px;
  padding: 0 25px;
  background-color: #f8f8fa;
  color: #282846;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  height: 100%;
  align-self: stretch;
`;

export const Title = styled.h2`
  margin: 0;
  font-size: 1rem;
  color: #282846;
  border-bottom: 1px solid #d8d8d8;
  padding-bottom: 25px;
  margin-bottom: 25px;
  font-weight: 400;
  height: 68px;
  line-height: 68px;
  box-sizing: border-box;
`;

export const LevelList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  padding-top: 15px;
`;

export const LevelItem = styled.li``;

export const LevelName = styled(NavLink)`
  font-weight: 600;
  color: #868699;
  margin-bottom: 15px;
  display: flex;
  transition: color 0.2s ease;
  letter-spacing: 0.2px;

  :hover {
    color: #757584;
  }

  &.${(props) => props.activeClassName} {
    color: #5969e8;
  }
`;

export const NewLabel = styled.small`
  font-weight: 600;
  color: #63d2f9;
`;
