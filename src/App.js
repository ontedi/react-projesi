import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          function yöntemi ile çıktı elde edelim.
        </p>
      </header>
    </div>
  );
}
*/

class App extends Component
{
  render(){
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
            Component yöntemi ile çıktı elde edelim.
            </p>
          </header>
        </div>
    );
  }
}

export default App;
