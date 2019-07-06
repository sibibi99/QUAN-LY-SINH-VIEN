import React, { Component } from 'react'
import DanhSachCuoc from './DanhSachCuoc';
import XucSac from './XucSac'

export default class componentName extends Component {
  render() {
    return (
      <div className="container">
        <XucSac/>
       <div className="row">
        <DanhSachCuoc/>
       </div>

      </div>
    )
  }
}
