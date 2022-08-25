const defaultState = {
  sinhVien: {
    maSV: "",
    tenSV: "",
    soDienThoai: "",
    email: "",
  },

  danhSachSinhVien: [
    {
      maSV: "1",
      tenSV: "Nguyễn Mai",
      soDienThoai: "0123456789",
      email: "mainguyen@gmail.com",
    },
    {
      maSV: "2",
      tenSV: "Trần Tuấn",
      soDienThoai: "0987666777",
      email: "tuan_tran@gmail.com",
    },
  ],
};

export const ttSinhVienReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "INPUT_RECIVER": {
      let { id, value } = action.payload;
      let inpSinhVien = { ...state.sinhVien };
      inpSinhVien[id] = value;
      state.sinhVien = inpSinhVien;
      return { ...state };
    }
    case "HANDLE_SUBMIT": {
      let danhSachSinhVienUpdate = [...state.danhSachSinhVien];
      danhSachSinhVienUpdate.push(state.sinhVien);
      state.danhSachSinhVien = danhSachSinhVienUpdate;
      return { ...state };
    }
    case "HANDLE_DELETE": {
      let { masinhvien } = action.payload;
      let danhSachSinhVienUpdate = [...state.danhSachSinhVien];
      let sinhVienIndex = danhSachSinhVienUpdate.findIndex(
        (sv) => sv.maSV === masinhvien
      );
      danhSachSinhVienUpdate.splice(sinhVienIndex, 1);
      state.danhSachSinhVien = danhSachSinhVienUpdate;
      return { ...state };
    }
    default:
      return state;
  }
};
