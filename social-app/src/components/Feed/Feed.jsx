import React from 'react'
import './Feed.css'
import Share from '../Share/Share';
import Post from '../Post/Post';
import {posts} from '../../dummyData'
function Feed() {
    return (
        <div className='Feed'>
            <div className='FeedWrapper'>
                <Share />
                {
                    posts.map((post)=>{ 
                       return <Post key={post.id} post={post} />
                    })
                }
            </div>
        </div>
    )
}
export default Feed;
