

const stateDefault = {
  danhSachCuoc: [
    {ma:'bau', hinhAnh:'./img/bau.PNG', diemCuoc: 0},
    {ma:'cua', hinhAnh:'./img/cua.PNG', diemCuoc: 0},
    {ma:'tom', hinhAnh:'./img/tom.PNG', diemCuoc: 0},
    {ma:'ca', hinhAnh:'./img/ca.PNG', diemCuoc: 0},
    {ma:'ga', hinhAnh:'./img/ga.PNG', diemCuoc: 0},
    {ma:'nai', hinhAnh:'./img/nai.PNG', diemCuoc: 0},
    
  ],
  tongDiem: 100,
  xucSac: [
    {ma: 'bau', hinhAnh:'./img/bau.PNG'},
    {ma: 'bau', hinhAnh:'./img/bau.PNG'},
    {ma: 'bau', hinhAnh:'./img/bau.PNG'}
  ]

}





// storeQUanLySanPhamReducer: Dùng để lấy dữ liệu từ store về Component
const storeGameBauCuaReducer = (state = stateDefault, action) => {

  switch (action.type)
  {
    case 'DAT_CUOC': {
      // TIm ma item trong danhSAchCuoc => tang diemCuoc
      const mangCuoc = [...state.danhSachCuoc] //Sao chep mang moi ra

      // Tim trong mangCuoc => phan tu nao co ma = ma action gui len => tang diem
      let item = state.danhSachCuoc.find(itemCuoc => itemCuoc.ma === action.ma)
      if(state.tongDiem>0)
      {
        item.diemCuoc += 10;
        state.tongDiem -= 10;
      }
      state.danhSachCuoc = mangCuoc;
      return {...state}
    }
    case 'CHOI_GAME': {
      let mangXucSacMoi=[];
      // Random tu 1-6 Math.floor(Math.random()* 6);
      for ( let i=0; i<3; i++)
      {
        let soNghauNhien = Math.floor(Math.random() * 6);
        //Tao so ngay nhien => lay ra 1 item trong danhsachcuoc => tao xuc sac moi
        let xucSacMoi = {
          ma:state.danhSachCuoc[soNghauNhien].ma, 
          hinhAnh:state.danhSachCuoc[soNghauNhien].hinhAnh}
        mangXucSacMoi.push(xucSacMoi)
      }
      state.xucSac = mangXucSacMoi;
      // Xu ly hoan tien
      for (let itemCuoc of state.danhSachCuoc)
      {
        // So trong mang cuoc voi mang xux sac => neu phan tu mang cuoc chua trong xuc sac => hoan tien
        let index = mangXucSacMoi.findIndex(xucSac =>xucSac.ma === itemCuoc.ma);
        if (index !== -1)
        {
          // xu ly hoan tien khi tim thay item cuoc trong xuc sac
          state.tongDiem += itemCuoc.diemCuoc;
        }
      }
      // Buoc 3: Xu ly tang diem
      for (let xucSac of mangXucSacMoi) { 
        // Neu xuc sac co tronf danh sach cuoc thi lay tong diem + diemCuoc
        let index = state.danhSachCuoc.findIndex(item => item.ma === xucSac.ma)
        if (index !== -1) {
          state.tongDiem += state.danhSachCuoc[index].diemCuoc
        }
      }

      // Buoc 4
      // Reset diem cuoc
      let mangCuoc = [...state.danhSachCuoc]
      mangCuoc.forEach((item, index) => {
        item.diemCuoc = 0;
      })
      state.danhSachCuoc = mangCuoc;

      return {...state}
      
      // Lap 3 lan => 3 index
      // Tu 3 index => Tao 3 con xuc xac moi => gan mang xuc sac moi cho mang xuc sac sac cu
    }
    default:
  
  }
    
  return {...state}
};
export default storeGameBauCuaReducer


