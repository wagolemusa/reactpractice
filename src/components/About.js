import React, { Component } from 'react';
import  { Link } from  'react-router-dom'
import musa from '../musa.JPG'
import { connect } from 'react-redux'


class About extends Component{
  render(){
    console.log(this.props)
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map(post => {
        return(
          <div className="post card" key={post.id}>
            <img src={musa} alt="refuge"></img>
            <div className="card-content">
              <Link to={'/' + post.id}>
              <span className="card-title">{post.title}</span>
              </Link>
                <p>{post.body}</p>
            </div>
          </div>
        )
      })
    ):(
      <div className="centre">No post yet</div>
    )
    return (
      
        <div className="app-connect container">
          {postList}
        </div>

    )
  }
}


// function to retrive data from reducers
const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}
export default connect(mapStateToProps)(About)