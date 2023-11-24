
import "./Navbar.css"
import Logo from "../../../assets/logo/logo color name.svg"
// import Logo from "../../../assets/logo/logo color2 name.svg"
import { motion } from "framer-motion"

const Navbar = () => {

    const animation = {
        initial: {
            opacity: 0, y: -30
        },

        transition: {
            ease: "backInOut",
            staggerChildren: 2,
            duration: 1
        },
        whileInView: {
            opacity: 1,
            y: 0,
            transition: {
                ease: "backInOut",
                delay: 0.4,
                type: "spring",
                duration: 1.5
            },
        }
    };

    return (
        <>
            <motion.nav
                initial="initial"
                animate="whileInView"
                variants={animation}

                className=" navbar navbar-expand-lg navbar-light topnav">
                <div className="container-fluid navfluid" >
                    <img id="logo"
                        src={Logo}    />

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div style={{ width: "21%" }}>

                        </div>
                        <ul

                            className="navbar-nav me-auto mb-2 mb-lg-0 ngflex" >
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Wallet</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Learn</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Team</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Tokenomics</a>
                            </li>
                        </ul>
                        <form className="d-flex ngflex">

                            {/* <button className="button-87 btn  " type="submit" style={{ width: "100%", fontSize: 14 }}>Buy Tokens</button> */}
                            <button className="button-87 btn2  " type="submit" style={{ width: "100%", fontSize: 14 }}>Buy Tokens</button>
                        </form>
                    </div>
                </div>
            </motion.nav>
        </>
    )
}

export default Navbar