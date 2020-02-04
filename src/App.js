import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {Navbar} from "./components/navbar";
import {Home} from "./pages/Home";
import Todos from "./pages/Todos";

function App() {
  return (
    <BrowserRouter basename="/react-Todo-app">
      <Navbar/>
      <div className="container pt-4">
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/todo' component={Todos}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;