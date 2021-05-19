import React , { Component } from 'react';
import PostData from '../data/data.json';

class PostList extends Component {
    render (){
        return (
            <div> 
                {PostData.map((postDetail,index) => {
                    return <h1>{postDetail.name}</h1>
                })}
            </div>
        )
    }
}

export default PostList;