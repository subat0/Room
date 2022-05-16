import Nike from "./images/Nike.png"
import Nasa from "./images/Nasa.png"
import Google from "./images/Google.png"
import Uber from "./images/Uber.png"
import Walmart from "./images/Walmart.png"
import Salesforce from "./images/Salesforce.png"
import Hulu from "./images/Hulu.png"
import Reddit from "./images/Reddit.png"
import Knotel from "./images/Knotel.png"
import Samsung from "./images/Samsung.png"
import Amazon from "./images/Amazon.png"
import Angellist from "./images/Angellist.png"
import Buzzfeed from "./images/Buzzfeed.png"
import Apple from "./images/Apple.png"
import Harrys from "./images/Harrys.png"
import Asana from "./images/Asana.png"
import JPMorgan from "./images/JPMorgan.png"
import Greenpeace from "./images/Greenpeace.png"

import brandsStyle from './brands.module.css'



function Brands() {
    return (
        <div className={brandsStyle.brands}>
            <h2>The world's leading brands choose ROOM.</h2>
            <p>Over 3,000 and counting.</p>
            <div className={brandsStyle.logos}>
                <img src={Nike} alt=""/>
                <img src={Nasa} alt=""/>
                <img src={Google} alt=""/>
                <img src={Uber} alt=""/>
                <img src={Walmart} alt=""/>
                <img src={Salesforce} alt=""/>
                <img src={Hulu} alt=""/>
                <img src={Reddit} alt=""/>
                <img src={Knotel} alt=""/>
                <img src={Samsung} alt=""/>
                <img src={Amazon} alt=""/>
                <img src={Angellist} alt=""/>
                <img src={Buzzfeed} alt=""/>
                <img src={Apple} alt=""/>
                <img src={Harrys} alt=""/>
                <img src={Asana} alt=""/>
                <img src={JPMorgan} alt=""/>
                <img src={Greenpeace} alt=""/>
            </div>
        </div>
    )
}
export default Brands