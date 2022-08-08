import './App.css';
import React  from 'react';
import Z2SetState from './z2-setstate';

function App() {
  return (
    <div className="container">
      <h1>App.js İçerisi</h1>
      <Z2SetState deneme="değer gelsin." />
    </div>
  );
}

/*
class App extends Component
{
  render(){
    return (
        <div className="container">
          Ders 2: Merhaba Dünya
        </div>
    );
  }
}
*/

export default App;
