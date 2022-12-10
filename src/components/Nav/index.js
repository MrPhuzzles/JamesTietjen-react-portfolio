import React from "react";

function Nav(props) {

    const {
        contactSelected,
        setContactSelected
    } = props;
    return (
        <header>
            <h1>
                <a href="/">James Tietjen</a>
            </h1>
            <nav>
                <ul>
                    <li>
                        <a href="#about-me" onClick={() => setContactSelected(false)}>About Me</a>
                    </li>
                    <li>
                        <a href="#my-work" onClick={() => setContactSelected(false)}>My Work</a>
                    </li>
                    <li className={`mx-2${contactSelected && 'navActive'}`}>
                        <a href="#contact" onClick={() => setContactSelected(true)}>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Nav;