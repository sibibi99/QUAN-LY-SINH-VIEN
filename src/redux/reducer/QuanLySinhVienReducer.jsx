import * as types from '../constants/QuanLySinhVien'


const stateDefault = {
  DSSV: [],
  sinhVienSua: {
    MaSV: 1,
    HoTen: 'sv_1',
    Tuoi: 1,
    Email: '123@gmail'
  }
}

const QuanLySinhVienReducer = (state = stateDefault, action) => {

  switch(action.type)
  {
    case types.THEM_SINH_VIEN: {
      let DSSVCapNhat = [...state.DSSV, action.sinhVien];
      state.DSSV = DSSVCapNhat;
      console.log(state);
      return {...state}
    } 
    case types.XOA_SINH_VIEN : {
      let maSV = action.maSV;
      console.log(maSV);
      
    }
    // eslint-disable-next-line no-fallthrough
    case types.SUA_SINH_VIEN : {
      state.sinhVienSua = action.sinhVien
      console.log(123)
      return {...state}
    }
    case types.CAP_NHAT_SINH_VIEN : {
      let DSSVCapNhat = [...state.DSSV];
      // TIm lay ra sinh vien cap nhat
      let index = DSSVCapNhat.findIndex
      (sv=>sv.MaSV == action.sinhVien.MaSV);
      if(index !== -1)
      {
        DSSVCapNhat[index] = action.sinhVien
      }
      state.DSSV = DSSVCapNhat;
      console.log("OK");
      
      return {...state}
    }
    
    default:
  }
return { ...state}
}
export default QuanLySinhVienReducer;