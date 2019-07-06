import React from 'react';
import './App.css';
import GameBauCua from './component/gameBauCua'

import FormSinhVien from './BaiTapForm/FormSinhVien';
import BaiTapQuanLySinhVien from './BaiTapForm/BaiTapQuanLySinhVien';
function App() {
  return (
    <div className="container W-50 ">
      {/* <GameBauCua/> */}
      <BaiTapQuanLySinhVien/>
    </div>
  );
}

export default App;
