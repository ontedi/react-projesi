import React, { Component } from 'react'

class Form extends Component {
  render() {
    return (
      <div className='ornek-yorumlar-liste-kapsul'>
        <form>
            <input className='ad input' type="text" placeholder='Ad giriniz.' />
            <br />
            <input className='telefon input' type="text" placeholder='Telefon giriniz.' />
            <br />
            <button>Ekle</button>
        </form>
      </div>
    )
  }
}

export default Form;
