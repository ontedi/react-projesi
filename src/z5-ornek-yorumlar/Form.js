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
    this.fnFormGonder = this.fnFormGonder.bind(this);
  }
  
  fnKisiDegistir(event)
  {
    //var strId = event.target.getAttribute("id");

    //console.log("strId - " + strId);

    /*
    var kisi = {isim: 'Murat',soyisim: 'Deneyci',telefon: '89797057'};
    this.setState({
      kisi: kisi
    })


    console.log("log - event - " + event);
    */


    //console.log("log - event - " + event);
    //console.log("log - event.target - " + event.target);
    //console.log("log - event.target.getAttribute - class - " + event.target.getAttribute("class"));
    //console.log("log - event.target.value - " + event.target.value);
    //console.log("######################################");
  }


  fnKisiEkle()
  {

  }
  fnKisiAra()
  {

  }

  fnFormGonder(event) {
    event.preventDefault();
    var form_data = new FormData(document.getElementById("formKisiler"));
    console.log("form_data - " + form_data);
    console.log("ad - " + form_data.get('ad'));
    console.log("soyad - " + form_data.get('soyad')); 
    console.log("telefon - " + form_data.get('telefon'));
  }


  render() {
    return (
      <div className='ornek-yorumlar-liste-kapsul'>
        <form onSubmit={this.fnFormGonder} id="formKisiler">
            <input className='ad input' name="ad" onChange={this.fnKisiDegistir} value={this.state.kisi.ad} type="text" placeholder='Ad giriniz.' />
            <br />
            <input className='soyad input' name="soyad" onChange={this.fnKisiDegistir} value={this.state.kisi.soyad} type="text" placeholder='Soyad giriniz.' />
            <br />
            <input className='telefon input' name="telefon" onChange={this.fnKisiDegistir} value={this.state.kisi.telefon} type="text" placeholder='Telefon giriniz.' />
            <br />
            <button onClick={this.fnFormGonder}>Ekle</button>
        </form>
        <br />
        <input className='ara' type="text" name='filtre' id='filtre' placeholder='Ad veya telefon numrası giriniz.' />
        <button onClick={this.fnKisiAra}>Ara</button>
        <br />
        <ul>
            {
                this.state.kisiler.map(kisi => 
                    <li key={kisi.telefon}>
                        <span className='isim'>{kisi.isim}</span>
                        <span className='soyisim'>{kisi.soyisim}</span>
                        <span className='telefon'>{kisi.telefon}</span>
                    </li>
                )
            }
        </ul>
      </div>
    )
  }
}

export default Form;
