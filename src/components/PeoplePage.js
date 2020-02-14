import React from "react";

import Navigation from './Navigation';
import Page from "./Page";
import Content from "./Content";

const PeoplePage = () => (
  <Page>
    <Navigation />
    <Content>People page</Content>
  </Page>
);

export default PeoplePage;
