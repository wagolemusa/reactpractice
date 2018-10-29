import React, { Component } from 'react';
import  { Link } from  'react-router-dom'
import musa from '../musa.JPG'
import { connect } from 'react-redux'


class About extends Component{
  render(){
    console.log(this.props)
    const { datas } = this.props;
    const dataList = datas.length ? (
        datas.map(data => {
        return(
          <div className="post card" key={data.id}>
            <img src={musa} alt="refuge"></img>
            <div className="card-content">
              <Link to={{pathname: '/about/' + data.id}}>
              <span className="card-title">{data.title}</span>
              </Link>
                <p>{data.body}</p>
            </div>
          </div>
        )
      })
    ):(
      <div className="centre">No post yet</div>
    )
    return (
      
        <div className="app-connect container">
          {dataList}
        </div>

    )
  }
}


// function to retrive data from reducers
const mapStateToProps = (state) => {
    return {
        datas: state.datas
    }
}
export default connect(mapStateToProps)(About)