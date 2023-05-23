import { func } from "prop-types";
import {useEffect, useState} from "react";


const NavBar = () => {
useEffect(() => {
    const header = document.querySelector("header");
    const headerTop = header.getBoundingClientRect().top;
    document.body.sttyle.setProperty("--header-h",`${header.offsetHeight}px`);
    function handleScroll() {
        header.classList.toggle("sticky", window.scrollY > headerTop + header.offsetHeight);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
        window.removeEventListener("scroll", handleScroll);
    };
}, []);
return (
    <header className="header">
        <div className="header__inner">
            <div className="logo">
                <a href="/">Logo</a>
            </div>
           
        </div>
    </header>

);
};

export default NavBar;



