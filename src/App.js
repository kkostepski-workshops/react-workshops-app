import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import './assets/styles.css';

import PeoplePage from './components/PeoplePage';
import AddPersonPage from './components/AddPersonPage';
import EditPersonPage from './components/EditPersonPage';
import AttractionsPage from './components/AttractionsPage';
import AssignAttractionPage from './components/AssignAttractionPage';
import AssignRoomPage from './components/AssignRoomPage';
import AddAttractionPage from './components/AddAttractionPage';
import EditAttractionPage from './components/EditAttractionPage';

const App = () => (
  <BrowserRouter>
    <Route exact path="/" render={() => <Redirect to="/people" />} />

    <Route exact path="/people" component={PeoplePage} />
    <Route path="/people/new" component={AddPersonPage} />
    <Route path="/people/edit/:id" component={EditPersonPage} />

    <Route exact path="/attractions" component={AttractionsPage} />
    <Route path="/attractions/new" component={AddAttractionPage} />
    <Route path="/attractions/edit/:id" component={EditAttractionPage} />

    <Route path="/assign-attraction" component={AssignAttractionPage} />
    <Route path="/assign-room" component={AssignRoomPage} />
  </BrowserRouter>
);

export default App;
