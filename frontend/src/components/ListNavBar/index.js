import React, { useState, useEffect } from 'react';
// https://react-icons.github.io/react-icons/
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavBtn,
    NavBtnLink,
    NavPageHeader
} from './ListNavBarElements';
// test

const ListNavBar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false);

    // Changes our navbar settings as we scroll
    const changeNav = () => {
        if (window.scrollY >= 80)
            setScrollNav(true);
        else
            setScrollNav(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavLogo to='/' onClick={toggleHome}>
                            Jack Mobile Home Park
                    </NavLogo>
                        <NavPageHeader>Listings</NavPageHeader>
                        {/* The buttons will use React router */}
                        <NavBtn>
                            <NavBtnLink to="signin">Login/Register</NavBtnLink>
                        </NavBtn>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default ListNavBar
