import "./sidebar.css"
import { RssFeed,Chat, PlayArrow,Group,Bookmark,QuestionAnswer,Work, Event,School } from "@mui/icons-material"

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <RssFeed className="sidebarIcon"/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="sidebarIcon"/>
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <PlayArrow className="sidebarIcon"/>
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="sidebarIcon"/>
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        < Bookmark className="sidebarIcon"/>
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        < QuestionAnswer className="sidebarIcon"/>
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        < Work className="sidebarIcon"/>
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        < Event className="sidebarIcon"/>
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        < School className="sidebarIcon"/>
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr" />
                <h4 className="sidebarTitle">Suggestion</h4>
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img src="/assets/hey.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sideabarFriendName">Itisha Gehlot</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/5.jpeg" alt="" className="sidebarFriendImg" />
                        <span className="sideabarFriendName">Manvendra Singh</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/6.webp" alt="" className="sidebarFriendImg" />
                        <span className="sideabarFriendName">Laksh Nagar</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/7.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sideabarFriendName">Mridul Gupta</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/7.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sideabarFriendName">Mridul Agarwal</span>
                    </li>

                </ul>
            </div>
        </div>
    )
}
