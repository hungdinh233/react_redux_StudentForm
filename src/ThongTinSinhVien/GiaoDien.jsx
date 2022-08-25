import React, { Component } from "react";
import { connect } from "react-redux";
import { InputForm } from "./InputForm";
import { TableRender } from "./TableRender";

export class giaoDien extends Component {
  render() {
    return (
      <div>
        <InputForm />
        <TableRender />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(giaoDien);
