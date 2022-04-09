import React, { useEffect } from 'react'
import styledComponents from 'styled-components';
import { ThemeProvider } from 'styled-components';
import { themeWhite, themeDark } from './ColorsVariables';
import './style.css'

function App() {
  const [theme, setTheme] = React.useState(themeWhite);

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'themeWhite') {
      setTheme(themeWhite);
    } else {
      setTheme(themeDark);
    }
  }, [])

  const changeThemeColor = () => {
    localStorage.setItem('theme', theme.backgroundColor === themeWhite.backgroundColor  ? 'themeDark' : 'themeWhite');
    const currentTheme =  localStorage.getItem('theme');
    if (currentTheme === 'themeWhite') {
      setTheme(themeWhite);
    }
    else { 
      setTheme(themeDark);
    }
  }

  console.log(theme)

  return (
    <ThemeProvider theme={theme} >
      <Wrapper>
          <Header>
            <ChangeColor onClick={() => changeThemeColor()}>Change theme</ChangeColor>
            <BlockNavItem>
              <NavItem>My Works</NavItem>
              <NavItem>About Me</NavItem>
              <NavItem>Proposals</NavItem>
              <NavItem>Contact information</NavItem>
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
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.colorText};
`;

const Header = styledComponents.div`
  width: 100vw;
  height: 50px;
  font-size: 1rem;
  background-color: ${props => props.theme.backgroundColor};
  border-bottom: 1px solid ${props => props.theme.colorText};
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
  color: ${props => props.theme.colorText};
  font-size: 1.125rem;
  margin-right: 20px;
  &:hover {
    color: ${props => props.theme.focusTextButton};
  }
`;

const ChangeColor = styledComponents.button`
  color: ${props => props.theme.colorText};
  margin-left: 20px;
  border: none;
  background-color: transparent;
  font-size: 1.125rem;
  &:hover {
    color: ${props => props.theme.focusTextButton};
  }
`