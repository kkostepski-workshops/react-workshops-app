import React from 'react';

import Navigation from '../../components/Navigation';
import Content from '../Content';
import * as Styled from './Page.styles';

const Page = ({ children, hasNavigation = true }) => (
  <Styled.Page>
    {hasNavigation && <Navigation />}

    <Content>{children}</Content>
  </Styled.Page>
);

export default Page;
