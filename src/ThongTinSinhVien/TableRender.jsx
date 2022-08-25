import React, { Component } from 'react'
import { connect } from 'react-redux'

export class TableRender extends Component {
  render() {
    return (
      <div>TableRender</div>
    )
  }
}

const mapStateToProps = (state) => ({})



export default connect(mapStateToProps)(TableRender)