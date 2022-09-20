import React, { Component } from 'react'

class Form extends Component {

  state = 
    {
    kisi: 
      {
        isim: '',
        soyisim: '',
        telefon: ''
      },

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
  
  constructor(props)
  {
    super(props);
    this.fnKisiDegistir = this.fnKisiDegistir.bind(this);
    this.fnKisiEkle = this.fnKisiEkle.bind(this);
  }
  
  fnKisiDegistir(event)
  {
    console.log("log - event - " + event);


    //console.log("log - event - " + event);
    //console.log("log - event.target - " + event.target);
    //console.log("log - event.target.getAttribute - class - " + event.target.getAttribute("class"));
    //console.log("log - event.target.value - " + event.target.value);
    //console.log("######################################");
  }


  fnKisiEkle()
  {
    var kisi = {isim: 'Murat',soyisim: 'Deneyci',telefon: '89797057'};
    this.setState(prevState => ({
      kisiler: [...prevState.kisiler, kisi]
    }))
  }



  render() {
    return (
      <div className='ornek-yorumlar-liste-kapsul'>
        <div>
            <input className='ad input' onChange={this.fnKisiDegistir} value={this.state.ad} type="text" placeholder='Ad giriniz.' />
            <br />
            <input className='soyad input' onChange={this.fnKisiDegistir} value={this.state.soyad} type="text" placeholder='Soyad giriniz.' />
            <br />
            <input className='telefon input' onChange={this.fnKisiDegistir} value={this.state.telefon} type="text" placeholder='Telefon giriniz.' />
            <br />
            <button onClick={this.fnKisiEkle}>Ekle</button>
        </div>
      </div>
    )
  }
}

export default Form;
