import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import PeoplePage from './components/PeoplePage/PeoplePage';
import AttractionsPage from './components/AttractionsPage/AttractionsPage';
import AssignAttractionPage from './components/AssignAttractionPage/AssignAttractionPage';
import AssignRoomPage from './components/AssignRoomPage/AssignRoomPage';

const App = () => (
  <BrowserRouter>
    <Route exact path="/" render={() => <Redirect to="/people" />} />

    <Route path="/people" component={PeoplePage} />
    <Route path="/attractions" component={AttractionsPage} />
    <Route path="/assign-attraction" component={AssignAttractionPage} />
    <Route path="/assign-room" component={AssignRoomPage} />
  </BrowserRouter>
);

export default App;
