import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("http://localhost:3000/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, [])

  if (!user) return (
    <>
    <Router>
      <Switch>
        <Route><Login onLogin={setUser} signup = {<Signup onLogin={setUser}/>} /></Route>
      </Switch>
    </Router>
    </>
);
  return (
    <div className="App">
      
    </div>
  );
}

export default App;
