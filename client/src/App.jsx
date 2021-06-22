import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import Update from './routes/Update';
import Detail from './routes/Detail';
import { HikesContextProvider } from './context/HikesContext';

const App = () => {
  return (
    <HikesContextProvider>
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/hikes/:id/update" component={Update} />
            <Route exact path="/hikes/:id" component={Detail} />
          </Switch>
        </Router>
      </div>
    </HikesContextProvider>
  )
};

export default App;