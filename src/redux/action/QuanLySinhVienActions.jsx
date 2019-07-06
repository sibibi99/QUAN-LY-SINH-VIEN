import * as types from '../constants/QuanLySinhVien'

export const themSinhVienAction = (sinhVien) => {
  return {
    type: types.THEM_SINH_VIEN,
    sinhVien
  }
}

export const suaSinhVienAction = (sinhVien) => {
  return {
    type: types.SUA_SINH_VIEN,
    sinhVien
  }
}

export const xoaSinhVienAction = (maSV) => {
  return {
    type: types.XOA_SINH_VIEN,
    maSV
  }
}

export const capNhatSinhVienAction = (sinhVien) => {
  return {
    type: types.CAP_NHAT_SINH_VIEN,
    sinhVien
  }
}