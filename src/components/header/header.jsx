import logo from "./../header/images/logo.png"
import metka from "./../header/images/metka.png"
import korzina from "./../header/images/korzina.png"
import headerStyle from './../header/header.module.css'

function Header() {
    return (
        <div>
            <div className={headerStyle.header}>
                <img src={logo} alt="" />

                <div className={headerStyle.menu}>
                    <a href="/">Products</a>
                    <a href="/">Explore</a>
                    <a href="/">Shop</a>
                </div>

                <div className={headerStyle.shop}>
                    <img src={metka} alt="" />
                    <a href="/">Showrooms</a>
                    <img src={korzina} alt="" />
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Header