import product_img_1 from "./images/img-1.png"
import Frame from "./images/Frame.png"
import room1Style from './../room1/room1.module.css'

function Products(){
    return(
        <div className={room1Style.bigimg}>
            <img src={product_img_1} alt="" />
            <img src={Frame} alt="" />
        </div>
    )
}
export default Products