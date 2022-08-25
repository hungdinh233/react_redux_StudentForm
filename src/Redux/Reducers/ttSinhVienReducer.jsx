const defaultState = {
  inpArr: {
    maSV: "",
    tenSV: "",
    soDienThoai: "",
    email: "",
  },

  tableList: [
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
      
    }
    default:
      return state;
  }
};
