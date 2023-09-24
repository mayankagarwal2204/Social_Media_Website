import "./post.css"
import { MoreVert } from "@mui/icons-material"

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src="/assets/1.jpg" alt="" className="postProfileImg" />
                    <span className="postUsername">Mayank Agarwal</span>
                    <span className="postDate">5 min ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCentre">
                <span className="postText">Hey! Its my first post!!!!</span>
                <img src="/assets/2.jpeg" alt="" className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="/assets/like.png" alt="" className="likeIcon" />
                    <img src="/assets/heart1.jpg" alt="" className="likeIcon" />
                    <span className="postLikeCounter">32 people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">9 comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
