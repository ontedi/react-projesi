import './App.css';
import React  from 'react';
import Z4Yorumlar from './z4-Yorumlar';


function App() {
  return (
    <div className="container">
      <h1>App.js İçerisi</h1>
      <div className='yorumlar-kapsul'>
        <Z4Yorumlar isim="Serkan" mesaj="react ile ilgili bu yorum harika" gun="3" avatar='https://www.cizgi.site/_d/avatar/5.png' />
        <Z4Yorumlar isim="Ufuk" mesaj="Nativescript hepsini yener" gun="2" avatar='https://www.cizgi.site/_d/avatar/1.png' />
        <Z4Yorumlar isim="Cagan" mesaj="Tabela işinde iyi para var." gun="44" avatar='https://www.cizgi.site/_d/avatar/2.png' />
      </div>
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
