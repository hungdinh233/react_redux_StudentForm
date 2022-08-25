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
      console.log(id, value);
      let inpSinhVien = { ...state.sinhVien };
      inpSinhVien[id] = value;
      state.sinhVien = inpSinhVien;
    //   console.log("asdsd", state.sinhVien);
      //------Thông báo tính đầy đủ khi điền Input------
      let validError = { ...state.validErr };
      let errMess = "";
      if (value.trim() === "") {
        errMess = "Không để trống phần thông tin này!";
      } else {
        if (dataType === "id") {
          //xét sinh viên có mã sv đã tồn tại
          if (state.danhSachSinhVien.find((sv) => sv.maSV === value)) {
            errMess = "Mã sinh viên đã tồn tại!";
          }
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
    case "HANDLE_CREATE": {
      //------Kiểm tra tính đầy đủ khi submit và Xử lý validation------
      let valid = true;
      let baoLoi = { ...state.validErr };
      //xử lý gắn trạng thái false khi validErr có lỗi của người dùng
      for (let key in baoLoi) {
        if (baoLoi[key] !== "") {
          valid = false;
          break;
        }
      }
      // xử lý gắn trạng thái false cho input tại from người dùng điền sót
      for (let key in state.sinhVien) {
        if (state.sinhVien[key] === "") {
          baoLoi[key] = "Không để trống phần thông tin này!";
          valid = false;
          //   break;
        }
      }
      //chặn submit khi trạng thái false xuất hiện
      if (!valid) {
        console.log("err", baoLoi);
        state.validErr = baoLoi;
        alert("Dữ liệu không hợp lệ!");
        return { ...state };
      }
      //-------------------------------------------------
      //xử lý update vào state ở dưới nếu đặt lên trên là lỗi nhé!
      let danhSachUpdate = [...state.danhSachSinhVien];
      danhSachUpdate.push(state.sinhVien);
      state.danhSachSinhVien = danhSachUpdate;
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
    case "HANDLE_UPDATE_RENDER": {
      let { sinhvien } = action.payload;
      state.sinhVien = sinhvien;
      console.log(state.sinhVien);
      return { ...state };
    }
    case "HANDLE_UPDATE_SUBMIT": {
      //   console.log("sinhvien", state.sinhVien);
      let updateDanhSachSV = [...state.danhSachSinhVien];
      let svIndex = updateDanhSachSV.findIndex(
        (sv) => sv.maSV === state.sinhVien.maSV
      );
      //   console.log("svcn", svIndex);
      updateDanhSachSV[svIndex] = state.sinhVien;
      state.danhSachSinhVien = updateDanhSachSV;
      alert ("Cập nhật thành công!")
      return { ...state };
    }
    default:
      return state;
  }
};
