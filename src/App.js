import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Ders1CssIslemleri from './ders1-css-islemleri';

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
        <div className="container">
          <header className="ana-header dn">
            <img src={logo} className="ana-logo" alt="logo" />
            <p>
            Burası .ana-kapsul içindeki .ana-header bölümü
            </p>
          </header>
          <Ders1CssIslemleri />
        </div>
    );
  }
}

export default App;
