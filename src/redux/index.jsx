//Store toan ung dung
import {combineReducers} from 'redux';
import storeGameBauCuaReducer from './reducer/GameBauCuaReducer';
import QuanLySinhVienReducer from './reducer/QuanLySinhVienReducer'

// Khởi tạo store của toàn ứng dụng

const rootReducer = combineReducers({
    // Nơi khai báo các store con sau này
    storeGameBauCuaReducer,
    QuanLySinhVienReducer
})

export default rootReducer;