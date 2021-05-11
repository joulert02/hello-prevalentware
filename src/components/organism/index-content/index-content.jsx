import React, { useEffect, useState } from 'react'
import Breadcrumb from '../../atoms/breadcrumb/breadcrumb'
import Footer from '../footer/footer'
import Header from '../header/header'
import './layout.scss'

const Layout = props => {
    const { children, breadcrumb } = props

    const [topMenuActive, settopMenuActive] = useState(true)
    const [currentScroll, setcurrentScroll] = useState(0)

    const handleScroll = () => {
        let scrollTop = window.pageYOffset;
        setcurrentScroll(scrollTop);

        if (currentScroll <= scrollTop) {
            settopMenuActive(false);
        } else {
            settopMenuActive(true);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    return (
        <>
            <Header
                topMenuActive={topMenuActive}
            />
            <div>
                <main
                    className={"f-main-container " + (topMenuActive ? 'f-top-menu-active' : '')}
                >
                    {breadcrumb && <Breadcrumb 
                        topMenuActive={topMenuActive}
                    />}
                    {children}
                </main>
                <Footer />
            </div>
        </>
    )
}

export default Layout
