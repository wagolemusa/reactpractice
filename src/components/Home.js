import React, { Component } from 'react';

import axios from 'axios';
import  { Link } from  'react-router-dom'

class Home extends Component{
  state = {
    entre: []
  }
  componentDidMount(){
    // axios.get('https://dairyapp.herokuapp.com/api/v2/all_entries')
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        this.setState({
          entre: res.data.slice(0,10)
        })
      })
    }
  render(){
    const { entre } = this.state;
    const postList = entre.length ? (
      entre.map(post => {
        return(
          <div className="post card" key={post.id}>
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

export default Home;