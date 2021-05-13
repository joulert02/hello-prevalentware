import React, { useState } from 'react'
import Input from '../../atoms/input/input'
import logoEmpresaImg from '../../../assets/images/Logo Empresa.png'
import { addNoScroll, removeNoScroll } from "../../../utils/overflowHelper"
import companysInfo from "./company-approval-info"
import './company-approval.scss'

const CompanyApproval = props => {
    const [isDocumentModal, setIsocumentModal] = useState(false)
    const [activeStep, setActiveStep] = useState(0)

    const closeDocumentModal = () => {
        setIsocumentModal(false)
        removeNoScroll()
    }

    const openDocumentModal = (e) => {
        e.preventDefault()
        setIsocumentModal(true)
        addNoScroll()
    }

    const handleNext = () => {
        console.log("NEXT", activeStep);
        setActiveStep(value => value < (companysInfo.length - 1) ? value + 1 : value)
    }

    const handleBack = () => {
        setActiveStep(value => value > 0 ? value - 1 : value)
    }

    return (
        <section className="f-company-approval">
            <div className="f-company-approval__breadcrumb">
                <a href="/administracion">Administración</a>
                <span>/</span>
                <bdi>Aprobación de Empresas</bdi>
            </div>

            <div className="f-company-approval__container">
                <div className="f-company-approval__page-controls">
                    <button
                        className={"f-company-approval__page-controls__left " + (activeStep === 0 ? "disabled" : '')}
                        onClick={handleBack}
                    >
                        <i className="fas fa-chevron-circle-left"></i>
                    </button>

                    <span>Empresa {activeStep + 1} de {companysInfo.length} pendiente por aprobación</span>

                    <button
                        className={"f-company-approval__page-controls__right " + (activeStep === (companysInfo.length - 1) ? "disabled" : '')}
                        onClick={handleNext}
                    >
                        <i className="fas fa-chevron-circle-right"></i>
                    </button>
                </div>

                <div className="f-company-approval__card">
                    <figure className="f-company-approval__card__logo">
                        <img src={logoEmpresaImg} alt="logo empresa" />
                    </figure>

                    <div className="f-company-approval__card__actions f-company-approval__card__actions--desktop">
                        <button className="f-company-approval__card__actions__button--approve">
                            <i className="fas fa-check-circle"></i>
                            Aprobar Empresa
                        </button>
                        <button className="f-company-approval__card__actions__button--deny">
                            <i className="fas fa-times-circle"></i>
                            Rechazar Empresa
                        </button>
                    </div>

                    <form className="f-company-approval__card__form">
                        <Input
                            name="companyName"
                            label="Nombre de la empresa"
                            value={companysInfo[activeStep].companyName}
                            type="text"
                        />
                        <Input
                            name="tradeName"
                            label="Razón Social"
                            value={companysInfo[activeStep].tradeName}
                            type="text"
                        />
                        <Input
                            name="identificationType"
                            label="Tipo de identificación"
                            value={companysInfo[activeStep].identificationType}
                            type="text"
                        />
                        <Input
                            name="identificationNumber"
                            label="Identificación"
                            value={companysInfo[activeStep].identification}
                            type="text"
                        />
                        <Input
                            name="employeesNumber"
                            label="# de empleados"
                            value={companysInfo[activeStep].employeesNumber}
                            type="text"
                        />

                        <button className="f-company-approval__card__form__files-button" onClick={openDocumentModal}>
                            <i className="fas fa-paperclip"></i>
                            Ver archivos adjuntos
                        </button>
                    </form>

                    <div className={"f-company-approval__card__loaded-documents__wrapper " + (isDocumentModal ? "active" : '')}>
                        <div className="f-company-approval__card__loaded-documents">
                            <button
                                className="f-company-approval__card__loaded-documents__button-close"
                                onClick={closeDocumentModal}
                            >
                                x
                            </button>
                            <h2 className="f-company-approval__card__loaded-documents__title">Documentos cargados</h2>

                            <div className="f-company-approval__card__loaded-documents__list">
                                {companysInfo[activeStep].documents.map((pdf, index) => (
                                    <a
                                        className="f-company-approval__card__loaded-documents__list__item"
                                        href={require("./../../../assets/pdfs/" + pdf.fileName) || ""} download="ejemplo.pdf"
                                        key={index}
                                    >
                                        <span>
                                            {pdf.name}
                                        </span>
                                        <i className="fas fa-file-pdf"></i>
                                    </a>

                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="f-company-approval__card__actions f-company-approval__card__actions--mobile">
                    <button className="f-company-approval__card__actions__button--approve">
                        <i className="fas fa-check-circle"></i>
                        Aprobar Empresa
                    </button>
                    <button className="f-company-approval__card__actions__button--deny">
                        <i className="fas fa-times-circle"></i>
                        Rechazar Empresa
                    </button>
                </div>

            </div>
        </section>
    )
}

export default CompanyApproval
