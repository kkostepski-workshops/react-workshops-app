import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Switch from 'react-switch';

import Navigation from '../../components/Navigation';
import themes from '../../config/themes';
import GlobalStyle from '../../components/GlobalStyle';
import Content from '../Content';
import * as Styled from './Page.styles';

const Page = ({ children, hasNavigation = true }) => {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeProvider theme={themes[theme]}>
      <GlobalStyle />
      <Styled.Header>
        <Styled.DarkModeSwitch>
          <Styled.DarkModeSwitchLabel>Dark mode</Styled.DarkModeSwitchLabel>
          <Switch
            height={20}
            width={40}
            onChange={() =>
              theme === 'dark' ? setTheme('light') : setTheme('dark')
            }
            checked={theme === 'dark'}
          />
        </Styled.DarkModeSwitch>
      </Styled.Header>
      <Styled.Page>
        {hasNavigation && <Navigation />}

        <Content>{children}</Content>
      </Styled.Page>
    </ThemeProvider>
  );
};

export default Page;
