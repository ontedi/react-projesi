import React, { Component } from 'react'

export default class Ders3JsxFormati extends Component {
  render() {
    var isim = "Serkan";
    var soyad = "Togal".toUpperCase();
    return (
      <div>
        <h1>JSX Formatı</h1>
        <div>
          3 + 5 işlem sonucu = {3 + 5}
          <br />
          <br />
          Benim adım: {isim}
          <br />
          Benim soyadım: {soyad}
        </div>
      </div>
    )
  }
}
