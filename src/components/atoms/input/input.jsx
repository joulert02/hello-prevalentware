import React from 'react';
import './input.scss';

const Input = (props) => {
    const { label, value, name, messageError, register, change, autoComplete, classes, id, disabled = false, type, blurEvent } = props;

    return (
        <div className={`f-input ${classes ? classes : ''} ${disabled ? 'f-input--disable' : ''}`}>
            <label className="f-input__label">
                <span>{label}</span>
                <input
                    id={id}
                    onBlur={blurEvent}
                    autoComplete={autoComplete ? "on" : "off"}
                    onChange={change}
                    ref={register}
                    placeholder=" "
                    name={name}
                    value={value}
                    type={type} />
            </label>
            {messageError && <p>{messageError}</p>}
        </div>
    )
};

export default Input;