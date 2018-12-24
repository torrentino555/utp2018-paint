import * as React from 'react';
import './App.scss';

import Paint from "./components/Paint";

class App extends React.Component {
  public render() {
    return (
        <div>
          <Paint />
        </div>
    );
  }
}

export default App;
