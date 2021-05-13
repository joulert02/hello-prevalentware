import React from 'react'
import './card-section.scss'

const CardSection = props => {

    const { redirection, cardTitle, cardDescription, cardIcon } = props

    return (
        <a className="f-section-card" href={redirection}>
            <div className="f-section-card__body">
                <div className="f-section-card__body__icon">
                    {cardIcon}
                </div>

                <h2 className="f-section-card__body__title">{cardTitle}</h2>
            </div>

            <div className="f-section-card__footer">
                <i className="fas fa-clock f-section-card__footer__clock"></i>
                <p className="f-section-card__footer__description">{cardDescription}</p>
            </div>
        </a>
    )
}

export default CardSection
