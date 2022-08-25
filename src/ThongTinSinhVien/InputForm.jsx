import React, { Component } from "react";
import { connect } from "react-redux";

export class InputForm extends Component {
  render() {
    return (
      <div className="container">
        <div className="card">
          <div className="card-header bg-dark text-white">
            <h2>Thông tin sinh viên</h2>
          </div>
          <div className="card-body">
            <div className="row d-flex justify-content-between">
              <div className="col-6 d-flex flex-column" >
                <span>Mã sinh viên</span>
                <input type="text" name="" id="" className="form-control"/>
              </div>
              <div className="col-6 d-flex flex-column">
                <span>Họ và tên</span>
                <input type="text" name="" id="" className="form-control" />
              </div>
            </div>
            <div className="row d-flex justify-content-between">
              <div className="col-6 d-flex flex-column" >
                <span>Số điện thoại</span>
                <input type="number" name="" id="" className="form-control"/>
              </div>
              <div className="col-6 d-flex flex-column">
                <span>Email</span>
                <input type="text" name="" id="" className="form-control" />
              </div>
            </div>
          </div>
          <div className="card-footer bg-default">
            <button className="btn btn-success my-2">Thêm sinh viên</button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(InputForm);
