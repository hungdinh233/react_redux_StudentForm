import React, { Component } from "react";
import { connect } from "react-redux";

class InputFormTTSV extends Component {
  getInfo = (e) => {
    let { id, value } = e.target;
    const action = {
      type: "INPUT_RECIVER",
      payload: {
        id: id,
        value: value,
      },
    };
    this.props.dispatch(action);
  };
  createStudent = (e) => {
    e.preventDefault();
    const action = {
      type: "HANDLE_SUBMIT",
    };
    this.props.dispatch(action);
  };
  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header bg-dark text-white">
            <h2>Thông tin sinh viên</h2>
          </div>
          <div className="card-body">
            <div className="row d-flex justify-content-between">
              <div className="col-6 d-flex flex-column">
                <span>Mã sinh viên</span>
                <input
                  type="text"
                  name=""
                  id="maSV"
                  className="form-control"
                  onChange={this.getInfo}
                />
              </div>
              <div className="col-6 d-flex flex-column">
                <span>Họ và tên</span>
                <input
                  type="text"
                  name=""
                  id="tenSV"
                  className="form-control"
                  onChange={this.getInfo}
                />
              </div>
            </div>
            <div className="row d-flex justify-content-between">
              <div className="col-6 d-flex flex-column">
                <span>Số điện thoại</span>
                <input
                  type="number"
                  name=""
                  id="soDienThoai"
                  className="form-control"
                  onChange={this.getInfo}
                />
              </div>
              <div className="col-6 d-flex flex-column">
                <span>Email</span>
                <input
                  type="text"
                  name=""
                  id="email"
                  className="form-control"
                  onChange={this.getInfo}
                />
              </div>
            </div>
          </div>
          <div className="card-footer bg-default">
            <button
              className="btn btn-success my-2"
              type="submit"
              onClick={this.createStudent}
            >
              Thêm sinh viên
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(InputFormTTSV);
