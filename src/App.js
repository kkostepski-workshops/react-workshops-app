import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import './assets/styles.css';

import PeoplePage from './components/PeoplePage';
import AddPersonPage from './components/AddPersonPage';
import AttractionsPage from './components/AttractionsPage';
import AssignAttractionPage from './components/AssignAttractionPage';
import AssignRoomPage from './components/AssignRoomPage';

const App = () => (
  <BrowserRouter>
    <Route exact path="/" render={() => <Redirect to="/people" />} />

    <Route exact path="/people" component={PeoplePage} />
    <Route path="/people/new" component={AddPersonPage} />
    <Route path="/attractions" component={AttractionsPage} />
    <Route path="/assign-attraction" component={AssignAttractionPage} />
    <Route path="/assign-room" component={AssignRoomPage} />
  </BrowserRouter>
);

export default App;
