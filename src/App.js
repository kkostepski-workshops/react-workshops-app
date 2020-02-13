import React from 'react';
import { BrowserRouter, Route, NavLink, Redirect } from 'react-router-dom';

import PeoplePage from './components/PeoplePage';
import AttractionsPage from './components/AttractionsPage';
import AssignAttractionPage from './components/AssignAttractionPage';
import AssignRoomPage from './components/AssignRoomPage';

const App = () => (
  <BrowserRouter>
    <nav>
      <NavLink to="/people">People</NavLink> |
      <NavLink to="/attractions">Attractions</NavLink> |
      <NavLink to="/assign-attraction">Assign attraction</NavLink> |
      <NavLink to="/assign-room">Assign room</NavLink>
    </nav>

    <Route exact path="/" render={() => <Redirect to="/people" />} />

    <Route path="/people" component={PeoplePage} />
    <Route path="/attractions" component={AttractionsPage} />
    <Route path="/assign-attraction" component={AssignAttractionPage} />
    <Route path="/assign-room" component={AssignRoomPage} />
  </BrowserRouter>
)

export default App;
