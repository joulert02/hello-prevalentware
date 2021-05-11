import React from 'react'
import Header from '../header/header'
import './layout.scss'

const Layout = props => {
    const { children, menuActive } = props

    return (
        <>
            <Header menuActive={menuActive} />
            <main className="f-main-container">
                {children}
            </main>
        </>
    )
}

export default Layout
