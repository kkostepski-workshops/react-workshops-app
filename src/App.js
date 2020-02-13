import React from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <nav>
      <NavLink to="/people">People</NavLink> |
      <NavLink to="/attractions">Attractions</NavLink> |
      <NavLink to="/assign-attraction">Assign attraction</NavLink> |
      <NavLink to="/assign-room">Assign room</NavLink>
    </nav>

    <Route path="/people" render={() => <div>People</div>} />
    <Route path="/attractions" render={() => <div>Attractions</div>} />
    <Route path="/assign-attraction" render={() => <div>Assign attraction</div>} />
    <Route path="/assign-room" render={() => <div>Assign room</div>} />
  </BrowserRouter>
)

export default App;
