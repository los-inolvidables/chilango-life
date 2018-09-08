import React from 'react';
import ReactDOM from 'react-dom';
import AddPost from "./foro/AddPost.jsx";
import PostList from "./foro/PostList.jsx";
import CommentPost from './foro/CommentPost.jsx';
import $ from "jquery";


class Forum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.addCommentPost =this.addCommentPost.bind(this);
    this.getPost =this.getPost.bind(this);
  }
  addCommentPost(description){
   $.ajax({
     method: "POST",
     url: "/forum",
     contentType: 'application/json',
     data: JSON.stringify({
       description: description
     })
   }).done(() => {
     this.getPost();
   });
 }
  getPost (){
    $.ajax({
    url: '/forum',
    method: 'GET',
    success: (results) => {
      this.setState({posts:results});
    },
    error: (xhr, err) => {
      console.log('err', err);
      }
    })
  }
  componentDidMount(){
    this.getPost();
  }

  render() {
    return (
      <div className ="posts">
      <h2>Event Forum</h2>
      <p>Are you aware of any events going on??<br/><br/>Post them here!!!!</p>
       <AddPost addPost={this.addCommentPost}/>
       <PostList posts={this.state.posts}/>
        </div>
      )
    }
  }
export default Forum;
