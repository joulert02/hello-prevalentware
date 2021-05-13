import React from 'react'
import CardSection from '../../molecules/card-section/card-section'
import './home-content.scss'

const HomeContent = props => {
    return (
        <section className="f-home">
            <div className="f-home__container">
                <CardSection
                    cardTitle="Solicitudes de creación de empresas"
                    cardDescription="2 solicitudes sin tratar"
                    cardIcon={<i className="fas fa-industry"></i>}
                    redirection="/administracion/aprobacion-de-empresas/"
                />

                <CardSection
                    cardTitle="Indocadores"
                    cardDescription="Visitado por última vez: 31/01/2020"
                    cardIcon={<i className="fas fa-chart-bar"></i>}
                    redirection="/administracion/aprobacion-de-empresas/"
                />

                <CardSection
                    cardTitle="Inscripción de empleados en empresas"
                    cardDescription="3 usuarios sin empresa registrada"
                    cardIcon={<i className="fas fa-user-tie"></i>}
                    redirection="/administracion/aprobacion-de-empresas/"
                />

                <CardSection
                    cardTitle="Gestión de usuarios"
                    cardDescription="532 usuarios activos en la plataforma"
                    cardIcon={<i className="fas fa-users-cog"></i>}
                    redirection="/administracion/aprobacion-de-empresas/"
                />
            </div>
        </section>
    )
}

export default HomeContent
