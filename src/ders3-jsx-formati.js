import React, { Component } from 'react'

export default class Ders3JsxFormati extends Component {
  render() {
    var isim = "Serkan";
    var soyad = "Togal".toUpperCase();
    var yas = 36;
    var sayi1 = 7;
    var sayi2 = 9;
    var tarih = Date();
    var adres = "https://www.ontedi.com";
    return (
      <div>
        <h1>JSX Formatı</h1>
        <div>
          3 + 5 işlem sonucu = {3 + 5}
          <br />
          Benim adım: {isim}
          <br />
          Benim soyadım: {soyad}
          <br />
          Benim yaşım: {yas}
          <br />
          {sayi1} ve {sayi2} sayılarının toplamı: {sayi1 + sayi2}
          <br />
          Şuanki tarih: {tarih}
          <br />
          Web site: {adres}
        </div>
      </div>
    )
  }
}
