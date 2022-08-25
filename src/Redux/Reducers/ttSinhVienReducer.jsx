const defaultState = {
  sinhVien: {
    maSV: "",
    tenSV: "",
    soDienThoai: "",
    email: "",
  },

  danhSachSinhVien: [
    {
      maSV: "2",
      tenSV: "Nguyen K",
      soDienThoai: "0123456789",
      email: "knguyen@gmail.com",
    },
    {
      maSV: "3",
      tenSV: "Tran Thi C",
      soDienThoai: "0123456789",
      email: "cnguyen@gmail.com",
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
      console.log("sinhVien",state.sinhVien);
      return { ...state };
    }
    default:
      return state;
  }
};
