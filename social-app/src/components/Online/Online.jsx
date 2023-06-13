import React from 'react'
import './Online.css'
export default function Online({user}) {
    return (
       
            <li className='rightBarFriend'>
                <div className='rightBarProfileContainer'>
                    <img className="imge" src={'../'+user.profilePicture} />
                    <span className='rightBarOnline'> </span>
                </div>
                <span className='rightBarUserName'>{user.username}</span>
            </li>
        
            )
}
