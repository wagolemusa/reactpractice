import React, { Component } from 'react'
import { connect } from 'react-redux'

class Blog extends Component{
    handleClick = () => {
        this.props.deletePost(this.props.data.id);
    }

    render(){ 
        const data = this.props.data ? (
            <div className="post">
                <h4 className="center">{this.props.data.title}</h4>
                <p>{this.props.data.body}</p>
                <button className="btn grey" onClick={this.handleClick}>Delete Post</button>

            </div>

        ):(
            <div className="centre">Loading........</div>
        )
        return (
            <div className="container">
            {data}

             </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.blog_id;
    return{
        data: state.datas.find((data) => {
            return data.id === id   
        })
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => { dispatch({type: 'DELETE_POST', id: id }) }
    }
}
export  default connect(mapStateToProps, mapDispatchToProps)(Blog)