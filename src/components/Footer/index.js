import React from "react";
import ghLogo from '../../assets/icons/gh-logo32.png'


function Footer() {
    return (
        <footer className="footer mt-auto py-3 fixed-bottom">
            <div className="container">
                <div className="row justify-content-center border-top border-3">
                    <div className="col-1 py-2">
                    <img src={ghLogo} alt="github logo"/>
                    </div>
                    <div className="col-1 py-2">
                    <img src={ghLogo} alt="github logo"/>
                    </div>
                
                
                </div>
                
            </div>
        </footer>
        
    )
}

export default Footer;