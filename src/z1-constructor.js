import React, { Component } from 'react'

export default class Z1Constructor extends Component {
    constructor()
    {
        super();
        console.log("Yapıcı metod çalıştı.");
    }
  render() {
    console.log("render çalıştı.");
    return (
      <div>Constructor.js dosyasının içerisi</div>
    )
  }
}
