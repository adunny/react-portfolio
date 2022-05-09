import React from "react";

function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    About me
                </li>
                <li>
                    <span onClick={() => console.log('clicked')}>Projects</span>
                </li>
                <li>
                    Contact
                </li>
                <li>
                    Resume
                </li>
            </ul>
        </nav>
    )
}

export default Nav;