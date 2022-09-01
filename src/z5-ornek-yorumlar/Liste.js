import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

 class Liste extends Component {
  render() {


    return (
        <div className='ornek-yorumlar-liste-kapsul'>
            <input className='ara' type="text" name='filtre' id='filtre' placeholder='Ad veya telefon numrası giriniz.' />
            <ul>
                {
                    this.props.kisiler.map(kisi => 
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

export default Liste;
