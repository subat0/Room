import room1_img from "./images/room1.png"
import room1Style from './room1.module.css'

function Room1(){
    return(
        <div className={room1Style.bigimg}>
            <img src={room1_img} alt="" />
        </div>
    )
}
export default Room1