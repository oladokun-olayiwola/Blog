import React, { Component} from "react";
import { connect } from 'react-redux'
import { fetchPostsAndUsers} from '../actions'
import UserHeader from "./UserHeader";


class PostList extends Component{
    componentDidMount(){
        this.props.fetchPostsAndUsers();
    }



    render() {
        const posts = this.props.posts
        const renderedLists = posts.map(post => {
            return (
              <div className="item" key={post.id}>
                <i className="large middle aligned icon user" />
                <div className="content">
                  <div className="description">
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                  </div>
                  <UserHeader userId={post.userId} />
                </div>
              </div>
            );
        })

        return (
        <div>
            <div className="ui relaxed divided list">{renderedLists}</div>

        </div>
        );
    }
}
    const mapPropsToState = state => {
            return { posts: state.posts }
    }

export default connect(mapPropsToState, { fetchPostsAndUsers})(PostList);