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
  validErr: {
    maSV: "",
    tenSV: "",
    soDienThoai: "",
    email: "",
  },
};

export const ttSinhVienReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "HANDLE_INPUT": {
      let { id, value, dataType } = action.payload;
      console.log(id, value)
      let inpSinhVien = { ...state.sinhVien };
      inpSinhVien[id] = value;
      state.sinhVien = inpSinhVien;
      //------Thông báo tính đầy đủ khi điền Input------
      let validError = { ...state.validErr };
      let errMess = "";
      if (value.trim() === "") {
        errMess = "Không để trống phần thông tin này!";
      } else {
        if (dataType === "id") {
          let regexNumberId = /^[0-9]*$/;
          if (!regexNumberId.test(value)) {
            errMess = "Mã sinh viên phải là số!";
          }
        }
        if (dataType === "name") {
          let regexName =
            /[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]+$/;
          if (!regexName.test(value)) {
            errMess = "Tên sinh viên phải là chữ có/không dấu";
          }
        }
        if (dataType === "tel") {
          let regexTel =
            /^(0|84)(2(0[3-9]|1[0-6|8|9]|2[0-2|5-9]|3[2-9]|4[0-9]|5[1|2|4-9]|6[0-3|9]|7[0-7]|8[0-9]|9[0-4|6|7|9])|3[2-9]|5[5|6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])([0-9]{7})$/;
          if (!regexTel.test(value)) {
            errMess = "Số điện thoại không hợp lệ!";
          }
        }
        if (dataType === "email") {
          let regexMail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
          if (!regexMail.test(value)) {
            errMess = "Email không hợp lệ!";
          }
        }
      }
      validError[id] = errMess;
      //console.log("validErr", validError);
      state.validErr = validError;
      //-----------------
      return { ...state };
    }
    case "HANDLE_SUBMIT": {
      //------Kiểm tra tính đầy đủ khi submit và Xử lý validation------
      let valid = true;
      let baoLoi = { ...state.validErr };
      for (let key in baoLoi) {
        if (baoLoi[key] !== "") {
          valid = false;
          break;
        }
      }
      for (let key in state.sinhVien) {
        if (state.sinhVien[key] === "") {
          baoLoi[key] = "Không để trống phần thông tin này!";
          valid = false;
          //   break;
        }
      }
      if (!valid) {
        console.log("err", baoLoi);
        state.validErr = baoLoi;
        alert("Dữ liệu không hợp lệ!");
        return { ...state };
      }
      //-------------------------------------------------
      let danhSachSinhVienUpdate = [...state.danhSachSinhVien];
      danhSachSinhVienUpdate.push(state.sinhVien);
      state.danhSachSinhVien = danhSachSinhVienUpdate;
      console.log(valid);
      alert("Thêm sinh viên thành công!");
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
