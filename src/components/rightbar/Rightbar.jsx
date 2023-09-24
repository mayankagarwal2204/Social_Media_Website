import "./rightbar.css"

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img src="/assets/gift.png" alt="" className="birthdayImg" />
          <span className="birthdayText">
            <b>Kunal Sharma</b> and <b>2 other friends</b> have a birthday today.
          </span>
        </div>
        <img src="/assets/3.jpg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friend</h4>
        <ul className="rightbarfriendList">
          <li className="rightbarFriend">
            <div className="rightbarProfileImgContainer">
              <img src="/assets/4.jpeg" alt="" className="rightbarProfileImg" />
              <span className="rightbarOnline"></span>
            </div>
            <span className="rightbarUsername">Kunal Sharma</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
