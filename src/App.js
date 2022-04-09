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

  return (
    <ThemeProvider theme={theme} >
      <Wrapper>
          <Header>
            <ChangeColor onClick={() => changeThemeColor()}>Change theme</ChangeColor>
          </Header>
          <FirstBlock>
            <FirstBlockText>
              Hey my name is Oleksandr, I am a frontend developer.
            </FirstBlockText>
          </FirstBlock>
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

const FirstBlock = styledComponents.div`
  width: 100vw;
  height: 500px;
  background-color: ${props => props.theme.colorText};
  color: ${props => props.theme.backgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
`

const FirstBlockText = styledComponents.div`
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: bold;
  text-align: center;
`