import React from 'react'
import './SideBar.css'
import { users } from '../../dummyData';
import CloseFriends from '../closeFriends/CloseFriends';
import {
    RssFeed,
    Chat,
    PlayCircleFilledOutlined,
    Group,
    Bookmark,
    HelpOutline,
    WorkOutline,
    Event,
    School,
} from '@mui/icons-material'
import { Button } from '@mui/material';
function SideBar() {
    return (
        <div className='SideBar'>
            <div className='SideBarWrapper'>
                <ul className='SideBarList'>
                    <li className="SideBarListItem">
                        <RssFeed className="SideBarIcon" />
                        <span className="SideBarListItemText">Feed</span>
                    </li>
                    <li className="SideBarListItem">
                        <Chat className="SideBarIcon" />
                        <span className="SideBarListItemText">Chats</span>
                    </li>
                    <li className="SideBarListItem">
                        <PlayCircleFilledOutlined className="SideBarIcon" />
                        <span className="SideBarListItemText">Videos</span>
                    </li>
                    <li className="SideBarListItem">
                        <Group className="SideBarIcon" />
                        <span className="SideBarListItemText">Groups</span>
                    </li>
                    <li className="SideBarListItem">
                        <Bookmark className="SideBarIcon" />
                        <span className="SideBarListItemText">Bookmarks</span>
                    </li>
                    <li className="SideBarListItem">
                        <HelpOutline className="SideBarIcon" />
                        <span className="SideBarListItemText">Questions</span>
                    </li>
                    <li className="SideBarListItem">
                        <WorkOutline className="SideBarIcon" />
                        <span className="SideBarListItemText">Jobs</span>
                    </li>
                    <li className="SideBarListItem">
                        <Event className="SideBarIcon" />
                        <span className="SideBarListItemText">Events</span>
                    </li>
                    <li className="SideBarListItem">
                        <School className="SideBarIcon" />
                        <span className="SideBarListItemText">Courses</span>
                    </li>
                </ul>
                <button className='SideBarButton'>Show More</button>
                <hr className='SideBarHr'/ >
                 <ul className='SideBarFriendsList'>
                 {
                    
                       users.map((user)=>{
                        console.log('i am dng ')
                        return <CloseFriends key={user.id} user={user}/>
                       })
                 }
                 </ul>
            </div>
        </div>
    )
}
export default SideBar;
