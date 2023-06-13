import React from 'react'
import './RightBar.css'
import Online from '../Online/Online';
import { users } from '../../dummyData';
function RightBar() {
    return (
        <div className='rightBar'>
            <div className='rightBarWrapper'>
                <div className='birthdayContainer'>
                    <img className='birthdayImg' src="/assets/gift.png" alt="birthdaypic"/>
                    <span className='birthdayText'>Vamsi and 3 others friends have birthday today</span>
                </div>
                <img className='rightBarAd' src="/assets/ad.png" alt="alt"/>
                <h1 className='rightBarTitle'>Online Friends</h1>
                <ul className='rightBarFriendList'>
                {
                    users.map((user)=>{
                       return <Online user={user}/>
                    })
                }
                </ul>
            </div>
        </div>
    )
}
export default RightBar;