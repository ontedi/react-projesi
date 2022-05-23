import React, { Component } from 'react'

class Ders8PropsNedir extends Component {
  render() {
    console.log("Propsları konsola yaz: " + this.props);
    var strIsim = this.props.isim;
    var strSoyad = this.props.soyad;
    const{isim, soyad, yas, meslek} = this.props;
    return (
      <div>
        Props nedir öğrenelim.
        <br />
        Props ile gelen değişkenler:
        <br />
        "isim: " {isim}
        <br />
        "soyad: " {soyad}
        <br />
        "yaş: " {yas}
        <br />
        "meslek: " {meslek}
        <br />
        "this.props.yas: " {this.props.yas}
        <br />
        "strIsim: " {strIsim}
        <br />
        "strSoyad: " {strSoyad}
        <br />
        "Meslek Bilgisi: " {this.props.meslek}
      </div>
    )
  }
}
export default Ders8PropsNedir;