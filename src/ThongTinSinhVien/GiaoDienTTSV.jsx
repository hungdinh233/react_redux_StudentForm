import React, { Component } from 'react'
import { connect } from 'react-redux'
import InputFormTTSV from './InputFormTTSV'
import TableTTSV from './TableTTSV'
import TimKiem from './TimKiem'

class GiaoDienTTSV extends Component {
  render() {
    return (
      <div>
        <InputFormTTSV/>
        <TimKiem/>
        <TableTTSV/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})



export default connect(mapStateToProps)(GiaoDienTTSV)