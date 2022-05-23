import './App.css';
import React  from 'react';
import Ders8PropsNedir from './ders8-props-nedir';

function App() {
  const Ders8Isim = "Serkan";
  const Ders8Soyad = "TOGAL";
  const Ders8Yas = 37;
  return (
    <div className="container">
      <h1>App.js İçerisi</h1>
      <Ders8PropsNedir isim={Ders8Isim} soyad={Ders8Soyad} yas={Ders8Yas} meslek="Yazılım" />
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
