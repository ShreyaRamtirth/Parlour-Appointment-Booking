import React, { useState, useEffect } from 'react';
import NavComp from './NavComp';
import FooterComp from './footercomp';
import { useRouter } from 'next/router';
import cookieCutter from 'cookie-cutter';
function Layout({ children }) {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    useEffect(() => {
        if (cookieCutter.get('jwt') !== "" && cookieCutter.get('jwt') !== undefined && cookieCutter.get('jwt') !== null) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
        setUsername(cookieCutter.get('name'))
    }, [router.query, isLoggedIn]);
    console.log(isLoggedIn, "In Layout");

    return (
        <>
            <NavComp isLoggedIn={isLoggedIn} username={username} />
            {children}
            <FooterComp />

        </>
    )
}

export default Layout