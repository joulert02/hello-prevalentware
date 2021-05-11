import React from 'react'
import logoImg from '../../../assets/images/logo.svg'
import workImg from '../../../assets/images/empleo.svg'
import './header.scss'

const navOptions = [
    {
        name: "Administración",
        url: "administracion",
        icon: <i className="fas fa-cogs"></i>
    },
    {
        name: "Empleo",
        url: "administracion",
        icon: <img src={workImg} alt="wi" />,
        subnav: [
            {
                name: "Administración",
                url: "administracion",
                icon: <i className="fas fa-cogs"></i>
            },
        ]
    },
    {
        name: "Mi CV",
        url: "administracion",
        icon: <i className="fas fa-clipboard-list"></i>
    },
]

const Header = props => {
    const { menuActive } = props

    return (
        <header className="f-header">
            <div className="f-header__logo">
                <figure className="f-header__logo__image">
                    <img src={logoImg} alt="logo app" />
                </figure>

                <strong className="f-header__logo__title">Gente PreValente</strong>
            </div>

            <div className="f-header__search">
                <i className="fas fa-search"></i>
                <input className="f-header__search__input" type="search" name="search" placeholder="Buscar..." />
            </div>

            <nav className="f-header__nav">
                {navOptions.map((item, index) => (
                    <a key={index} className={menuActive === index + 1 ? "active" : ''} href={item.url}>
                        {item.icon}
                        {item.name}
                        {item.subnav?.length >= 1 &&
                            <i className="fas fa-chevron-down" />
                        }
                    </a>
                ))}
            </nav>

            <div className="f-header__user-info">
                <figure className="f-header__user-info__image">
                    <img src="" alt="" />
                </figure>

                <span className="f-header__user-info__name">Jouler</span>

                <i className="fas fa-chevron-down"></i>
            </div>


            <div className="f-header__nav-mobile">
                <button className="f-header__nav-mobile__nav-button">
                    <i className="fas fa-bars"></i>
                </button>

            </div>
        </header>
    )
}

export default Header
