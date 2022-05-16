import phoneBooth from "./../rooms/images/Phone Booth.png"
import focusRoom from "./../rooms/images/Focus Room.png"
import meetingRoom from "./../rooms/images/Meeting Room.png"
import openMeetingRoom from "./../rooms/images/Open Meeting Room.png"
// import phoneBoothText from "./../rooms/images/Phone Booth (1).png"
// import focusRoomText from "./../rooms/images/Focus Room (1).png"
// import meetingRoomText from "./../rooms/images/Meeting Room (1).png"
// import openMeetingRoomText from "./../rooms/images/Open Meeting Room (1).png"
import roomsStyle from './rooms.module.css'


function Rooms() {
    return (
        <div className={roomsStyle.rooms}>
            <div className={roomsStyle.rooms_div}>
                <img src={phoneBooth} alt="" />
                {/* <img className={roomsStyle.imgText} src={phoneBoothText} alt=""  /> */}
                <h1>Phone Booth</h1>
            </div>
            <div className={roomsStyle.rooms_div}>
                <img src={focusRoom} alt="" />
                {/* <img className={roomsStyle.imgText} src={focusRoomText} alt="" /> */}
                <h1>Focus Room</h1>
            </div>
            <div className={roomsStyle.rooms_div}>
                <img src={meetingRoom} alt="" />
                {/* <img className={roomsStyle.imgText} src={meetingRoomText} alt="" /> */}
                <h1>Meeting Room</h1>
            </div>
            <div className={roomsStyle.rooms_div}>
                <img src={openMeetingRoom} alt="" />
                {/* <img className={roomsStyle.imgText} src={openMeetingRoomText} alt="" /> */}
                <h1>Open Meeting Room</h1>
            </div>
        </div>
    )
}
export default Rooms