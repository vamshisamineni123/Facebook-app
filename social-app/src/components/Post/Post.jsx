import React, { useState } from 'react'
import './Post.css'
import { MoreVert } from '@mui/icons-material'
import {useSelector,useDispatch} from "react-redux"
import { LikeIncrement,LikeDecrement,LoveDecrement,LoveIncrement } from '../../reducers/LikeSlice'



export default function Post({post}) {
    const like=useSelector((state)=>state.likelove.like);
    const PF=process.env.REACT_APP_PUBLIC_FOLDER;
   // const {like,setLike}=useState(li)
    const dispacth=useDispatch();
    
    const handleLike=()=>{
        dispacth(LikeIncrement(like))
    }
    
    
    return (
        <div className='Post'>
            <div className='PostWrapper'>
                <div className='PostTop'>
                    <div className='PostTopLeft'>
                        <img className='PostProfileImg' src={PF+post.photo} alt="image is not displayed" />
                        <span className='PostUserName'>
                            Vamshi Samineni
                        </span>
                        <span className='PostTime'>{post.date}</span>
                    </div>
                    <div className='PostTopRight'>
                        <MoreVert />
                    </div>
                </div>
                <div className='PostMiddle'>
                    <span className='PostMiddleText'>{post.desc}</span>
                    
                    <img className="img" src={PF+post.photo} alt="it should be image over here" />
                </div>
                <div className='PostBottom'>
                    <div className="PostBottomLeft">
                        <img className="likeIcon" src="/assets/like.png" alt="Image should be displayed" onClick={handleLike}/>
                        <img className="heartIcon" src="/assets/heart.png" alt="Image should be displayed" />
                        <span className="PostLikeCounter">{like} people like it</span>
                    </div>
                    <div className="PostBottomRight">
                        <span className="PostCommentText">5 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
