import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Route path="/people" render={() => <div>People</div>} />
    <Route path="/attractions" render={() => <div>Attractions</div>} />
    <Route path="/assign-attraction" render={() => <div>Assign attraction</div>} />
    <Route path="/assign-room" render={() => <div>Assign room</div>} />
  </BrowserRouter>
)

export default App;
