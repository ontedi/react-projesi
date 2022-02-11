import React, { Component } from 'react';
import './ders4-css-islemleri.css';

class Ders4CssIslemleri extends Component {
  render() {
    return (
    <div>
        <div className='kutu1'>
            Ders 4 CSS İşlemleri Kutu 1
        </div>
        <div className='kutu2'>
            Ders 4 CSS İşlemleri Kutu 2
        </div>
        <div className='clearfix'></div>
        <div className='kutu3'>
          Ders 4 CSS İşlemleri Kutu 3
        </div>
        <div style={{color:"#000", fontSize:"23px", marginTop:"10px", backgroundColor:"rgba(199, 145, 63, 0.644)", padding:"6px"}}>
          Ders 4 CSS İşlemleri Kutu 4
        </div>
        <div className='clearfix'></div>
        <div style={{fontSize:"50px"}} className="kutu5">
          Ders 4 CSS İşlemleri Kutu 5
        </div>
    </div>
    );
  }
}
export default Ders4CssIslemleri;
