import React, { Component } from 'react'
import FormSinhVien from './FormSinhVien';
import { connect } from 'react-redux'; // Ket noi voi store redux
import {suaSinhVienAction, xoaSinhVienAction} from  '../redux/action/QuanLySinhVienActions'

class BaiTapQuanLySinhVien extends Component {



  render() {
    return (
      <div className="w-">
        <div className="row">
          <div className="col-md-6">
            <FormSinhVien />
          </div>
          <div className="col-md-6">

            <h1>DANH SACH SINH VIEN</h1>
            <table className="table">
              <tr>
                <th>Ma SV</th>
                <th>Ten SV</th>
                <th>Tuoi SV</th>
                <th>Email</th>
                <th>Option</th>
              </tr>
              <tbody>
                {
                  this.props.DSSV.map((sv, i) => {
                    return (
                      <tr key={i}>
                        <td>{sv.MaSV}</td>
                        <td>{sv.HoTen}</td>
                        <td>{sv.Tuoi}</td>
                        <td>{sv.Email}</td>
                        <td>          
                          <button onClick= {() => this.props.suaSinhVien(sv.MaSV)}  className="btn btn-danger">Xoa</button>
                          <button onClick= {() => this.props.suaSinhVien(sv)} className="btn btn-warning">Sua</button>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
        </div>

      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    DSSV: state.QuanLySinhVienReducer.DSSV
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    suaSinhVien: (sinhVien) => {
      dispatch(suaSinhVienAction(sinhVien))
    },
    xoSinhVien: (maSV) => {
      dispatch(xoaSinhVienAction(maSV))
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BaiTapQuanLySinhVien)