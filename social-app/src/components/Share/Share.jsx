import React from 'react'
import './Share.css'
import { PermMedia, Label, Room, EmojiEmotions } from '@mui/icons-material'
export default function Share() {
    return (
        <div className='Share'>
            <div className='ShareWrapper'>
                <div className='ShareTop'>
                    <img className="ShareProfileImg" src="/assets/Person/1.jpeg" alt="" />
                    <input
                        placeholder="What's in your mind Safak?"
                        className="ShareInput"
                    />
                </div>
                <hr className='ShareHr'/>
                <div className='ShareBottom'>
                    <div className="ShareOptions">
                        <div className="ShareOption">
                            <PermMedia htmlColor="tomato" className="ShareIcon" />
                            <span className="ShareOptionText">Photo or Video</span>
                        </div>
                        <div className="ShareOption">
                            <Label htmlColor="blue" className="ShareIcon" />
                            <span className="ShareOptionText">Tag</span>
                        </div>
                        <div className="ShareOption">
                            <Room htmlColor="green" className="ShareIcon" />
                            <span className="ShareOptionText">Location</span>
                        </div>
                        <div className="ShareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="ShareIcon" />
                            <span className="ShareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="ShareButton">Share</button>
                </div>
            </div>
        </div>
    )
}
