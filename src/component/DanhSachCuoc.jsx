import React, { Component } from 'react';
import { connect } from 'react-redux'; // Ket noi voi store redux

class DanhSachCuoc extends Component {
  render() {
    return (
      <div>
        <div className="row container">
          {this.props.DanhSachCuoc.map((item, index) => {
            return (
              <div className="col-md-4 mt-3" key={index}>
                <button onClick={() => this.props.DatCuoc(item.ma)}>

                  <img src={item.hinhAnh} height={170} />
                  <div className="display-4 text-danger">{item.diemCuoc}</div>
                </button>
              </div>
            )
          })}
        </div>

      </div>
    )
  }
}

const mapDispatcToProps = (dispatch) => {
  // Dispath laf 1 ham giuo dua du lieu len store redux}
  return {
    DatCuoc: (ma) => { // Gui len moi lan click 1 ma
      dispatch({
        //Data dua len store gom 2 thuoc tinh
        type: "DAT_CUOC", //Type la thuoc tinh bat buoc phai có de dinh action nao gui len
        ma
      });
      // ĐỊnh nghĩa các prop phương thức xử lý sự kiên sau này
    },


  };
};

const mapStateToProps = (state) => {
  return {
    DanhSachCuoc: state.storeGameBauCuaReducer.danhSachCuoc
  }
}
export default connect(mapStateToProps, mapDispatcToProps)(DanhSachCuoc)