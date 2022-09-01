import './App.css';
import React, {Component}  from 'react';
import OrnekYorumlarListe from './z5-ornek-yorumlar/Liste';
import OrnekYorumlarForm from './z5-ornek-yorumlar/Form';
/*
function App() {
  return (
    <div className="container">
      <h1>App.js İçerisi</h1>
      <OrnekYorumlarListe />
      <OrnekYorumlarForm />
    </div>
  );
}
*/

/*
import Z4Yorumlar from './z4-Yorumlar';
function App() {
  return (
    <div className="container">
      <h1>App.js İçerisi</h1>
      <div className='yorumlar-kapsul'>
        <Z4Yorumlar isim="Serkan" mesaj="react ile ilgili bu yorum harika" gun="3" avatar='https://www.cizgi.site/_d/avatar/5.png' />
        <Z4Yorumlar isim="Ufuk" mesaj="Nativescript hepsini yener" gun="2" avatar='https://www.cizgi.site/_d/avatar/1.png' />
        <Z4Yorumlar isim="Cagan" mesaj="Tabela işinde iyi para var." gun="44" avatar='https://www.cizgi.site/_d/avatar/2.png' />
        <Z4Yorumlar isim="Misafir" mesaj="Tabela lazım mı abi" gun="21" avatar='https://www.cizgi.site/_d/avatar/10.png' />
      </div>
    </div>
  );
}
*/


class App extends Component
{
  state = {
    kisiler:[
      {
      isim: 'Serkan',
      soyisim: 'Deneme',
      telefon: '34424234'
      },
      {
        isim: 'Ahmed',
        soyisim: 'Deneme',
        telefon: '567567567'
      },
      {
        isim: 'Asmin',
        soyisim: 'Deneme',
        telefon: '76867768'
      }
    ]
  }

  render(){
    return (
        <div className="container">
          <h1>App.js İçerisi</h1>
          <OrnekYorumlarListe kisiler={this.state.kisiler} />
          <OrnekYorumlarForm />
        </div>
    );
  }
}


export default App;
