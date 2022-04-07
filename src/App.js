import React from 'react'
import styledComponents from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { theme } from './ColorsVariables';
import './style.css'

function App() {

  let currentThemeColor = localStorage.getItem('currentThemeColor') || '#ffffff';

  const changeThemeColor = () => {
    localStorage.setItem('currentThemeColor', currentThemeColor === '#691E70' ? '#ffffff' : '#691E70');
    currentThemeColor = localStorage.getItem('currentThemeColor');
  }

  return (
    <ThemeProvider theme={theme} >
      <Wrapper currentThemeColor={currentThemeColor}>
          <Header currentThemeColor={currentThemeColor}>
            <ChangeColor currentThemeColor={currentThemeColor} onClick={() => changeThemeColor()}>Change theme</ChangeColor>
            <BlockNavItem>
              <NavItem currentThemeColor={currentThemeColor}>My Works</NavItem>
              <NavItem currentThemeColor={currentThemeColor}>About Me</NavItem>
              <NavItem currentThemeColor={currentThemeColor}>Proposals</NavItem>
              <NavItem currentThemeColor={currentThemeColor}>Contact information</NavItem>
            </BlockNavItem>
          </Header>
          How are you?
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;

const Wrapper = styledComponents.div`
  width: 100%;
  height: 100vh;
  font-size: 1rem;
  background-color: ${props => props.currentThemeColor};
  color: ${props => props.currentThemeColor === '#691E70' ? '#ffffff' : props.theme.purple};
`;

const Header = styledComponents.div`
  width: 100vw;
  height: 50px;
  font-size: 1rem;
  background-color: ${props => props.currentThemeColor === '#691E70' ? props.theme.purple : props.theme.white};
  border-bottom: 1px solid ${props => props.currentThemeColor === '#691E70' ? props.theme.white : props.theme.purple};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const BlockNavItem = styledComponents.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
`;

const NavItem = styledComponents.div`
  color: ${props => props.currentThemeColor === '#691E70' ? props.theme.white : props.theme.purple};
  font-size: 1.125rem;
  margin-right: 20px;
  &:hover {
    color: ${props => props.theme.red};
  }
`;

const ChangeColor = styledComponents.button`
  color: ${props => props.currentThemeColor === '#691E70' ? props.theme.white : props.theme.purple};
  margin-left: 20px;
  border: none;
  background-color: transparent;
  font-size: 1.125rem;
  &:hover {
    color: ${props => props.theme.red};
  }
`