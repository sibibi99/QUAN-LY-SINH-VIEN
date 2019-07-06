import React, { Component } from 'react';
import { connect } from 'react-redux'; // Ket noi voi store redux
import {themSinhVienAction, capNhatSinhVienAction} from '../redux/action/QuanLySinhVienActions'

class FormSinhVien extends Component {

  constructor(props) {
    super(props);
    this.state = {
      MaSV: '',
      HoTen: '',
      Tuoi: '',
      Email: ''
    }
  }

  xuLyNhapLieu = (event) => {// event dai dien cho su kien Input
    const name = event.target.name;
    const value = event.target.value;
    this.setState ({
      [name]: value
    })
    console.log(this.state);
    
    
  }
  themSinhVien = (event) => {
    // Chan su kien load lai trang
    event.preventDefault();
    // Goi phuong thuc them sinh vien tu redux dua du lieu len store (reducer)
    this.props.themSinhVien(this.state)
    this.setState(
      {
        MaSV: '',
        HoTen: '',
        Tuoi: '',
        Email: ''
      }
    )
    

  }

  // Khi props thay doi se chay vao life cycle
  componentWillReceiveProps(newProps) { //chay khi Props component thay doi truoc khi render
    // newProps dong vai tro la this.props sau khi lay du lieu tu redux ve
    // Dung du lieu do set lai state dong bo hoa du lieu giua props va state
    this.setState(newProps.sinhVienSua)

  }

  render() {
    return (
      <form onSubmit= {this.themSinhVien}>
        <h1>Bài Tập Form Sinh Viên</h1>
        <div className="form-group">
          <label>Mã Sinh Vien</label>
          <input value={this.state.MaSV} type="text" name="MaSV"  onChange={this.xuLyNhapLieu} id className="form-control" placeholder aria-describedby="helpId" />
          <small id="helpId" className="text-muted">Help text</small>
        </div>
        <div className="form-group">
          <label>Họ Tên</label>
          <input value={this.state.HoTen} type="text" name="HoTen" onChange={this.xuLyNhapLieu} id className="form-control" placeholder aria-describedby="helpId" />
          <small id="helpId" className="text-muted">Help text</small>
        </div>
        <div className="form-group">
          <label>Tuổi</label>
          <input value={this.state.Tuoi}type="text" name="Tuoi" onChange={this.xuLyNhapLieu} id className="form-control" placeholder aria-describedby="helpId" />
          <small id="helpId" className="text-muted">Help text</small>
        </div>
        <div className="form-group">
          <label>Email</label>
          <input value={this.state.Email}type="text" name="Email" onChange={this.xuLyNhapLieu} id className="form-control" placeholder aria-describedby="helpId" />
          <small id="helpId" className="text-muted">Help text</small>
        </div>
        <div className="form-">
          <button className="btn btn-success">Thêm Sinh Viên</button>
          <button type="button" onClick = {() => this.props.capNhatSinhVien(this.state)} className="btn btn-danger">Cap Nhat</button>
        </div>

      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    themSinhVien: (sinhVien) => {
      dispatch(themSinhVienAction(sinhVien))
    },
    capNhatSinhVien: (sinhVien) => {
      dispatch(capNhatSinhVienAction(sinhVien))
    }
  }
}


const mapStateToProps = (state) => {
  return {
    sinhVienSua: state.QuanLySinhVienReducer.sinhVienSua
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormSinhVien)