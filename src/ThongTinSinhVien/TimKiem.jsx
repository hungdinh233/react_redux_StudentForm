import React, { Component } from "react";
import { connect } from "react-redux";

class TimKiem extends Component {
  searchFunction = (e) => {
    let { value } = e.target;
    let inpSearch = value.trim().toLowerCase()
    let {danhSach} = this.props;
    console.log(danhSach)
    let searchedArr = danhSach.filter(sv => sv.tenSV.toLowerCase().includes(inpSearch) || sv.maSV.includes(inpSearch)||sv.email.toLowerCase().includes(inpSearch) ||sv.soDienThoai.includes(inpSearch) );
    console.log(searchedArr);
    const action = {
      type: "HANDLE_SEARCH",
      payload: {
        searchedArr: searchedArr
      },
    };
    this.props.dispatch(action);

  };
  render() {
    return (
      <div className="container mt-4">
        <h5 className="text-center">Tìm kiếm</h5>
        <div className="w-75 d-flex mx-auto">
          <input
            className="form-control"
            placeholder="Nhập vào: mã sinh viên/họ tên có dấu/email/số điện thoại cần tìm"
            type="text"
            name=""
            id="search_bar"
            onChange={this.searchFunction}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  danhSach : state.ttSinhVienReducer.danhSachSinhVien
});

export default connect(mapStateToProps)(TimKiem);

   