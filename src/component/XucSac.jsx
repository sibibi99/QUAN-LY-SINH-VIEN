import React, { Component } from 'react';
import {connect} from 'react-redux';

class XucSac extends Component {
  render() {
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-md-2 mr-2 ">
            <button className="btn btn-danger" onClick = {() => this.props.ChoiGame()}>Play Game</button>
          </div>
          <div className="col-md-4">
        <div className="row">
          {this.props.xucSac.map((item, index) => {
            return (
              
                <img key={index} src={item.hinhAnh} width={50} height={50}/>
            
            )
          })}
        </div>

          </div>
          <div className="col-md-2">
            <h1 className="text-danger"> 
            {this.props.tongDiem}$
            </h1>
          </div>
        </div>
        
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tongDiem: state.storeGameBauCuaReducer.tongDiem,
    xucSac: state.storeGameBauCuaReducer.xucSac
  }
}

const mapDispatchToProps = (dispath) => {
  return {
    ChoiGame: () => {
      dispath({
        type: 'CHOI_GAME'
      })
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (XucSac)