import React, { Component } from "react";
import { connect } from "react-redux";

class TableTTSV extends Component {
  renderThongTinSV = () => {
    let { ttSinhVien } = this.props;
    return ttSinhVien.map((sinhvien, index) => {
      return (
        <tr className="text-center" key={index}>
          <td>{sinhvien.maSV}</td>
          <td>{sinhvien.tenSV}</td>
          <td>{sinhvien.soDienThoai}</td>
          <td>{sinhvien.email}</td>
          <td>
            <button className="btn btn-danger mx-2">Xóa</button>
            <button className="btn btn-primary">Sửa</button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="container mt-5">
        <table className="table">
          <thead className=" bg-dark text-white">
            <tr className="text-center">
              <th>Mã sinh viên</th>
              <th>Họ tên</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th>
                <i className="fa fa-gear"></i>
              </th>
            </tr>
          </thead>
          <tbody>{this.renderThongTinSV()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ttSinhVien: state.ttSinhVienReducer.tableList,
});

export default connect(mapStateToProps)(TableTTSV);
