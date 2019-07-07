import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames'

const Textinput = ({
    name,
    placeholder,
    value,
    type,
    onChange,
    error
}) => {

    return (
        <div className="row align-items-center">
            <div className="col mt-4">
                <input type={type}
                    className={classnames('form-control', { 'is-invalid': error })}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange} />

                {error && <section className="invalid-feedback">{error}</section>}
            </div>


        </div>
    );

}

Textinput.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
    error: PropTypes.string.isRequired
}

Textinput.defaultProps = {
    type: 'text'
}
export default Textinput;