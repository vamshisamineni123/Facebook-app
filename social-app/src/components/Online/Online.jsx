import React from 'react'
import './Online.css'
export default function Online({user}) {
    const PF=process.env.REACT_APP_PUBLIC_FOLDER;
    return (
       
            <li className='rightBarFriend'>
                <div className='rightBarProfileContainer'>
                    <img className="imge" src={PF+user.profilePicture} />
                    <span className='rightBarOnline'> </span>
                </div>
                <span className='rightBarUserName'>{user.username}</span>
            </li>
        
            )
}
