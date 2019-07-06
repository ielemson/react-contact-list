import React from 'react';
import PropTypes from 'prop-types';

const Textinput = ({
    name,
    placeholder,
    value,
    type,
    onChange
}) => {

    return (
        <div className="row align-items-center">
            <div className="col mt-4">
                <input type={type}
                    className="form-control"
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange} />
            </div>
        </div>
    );

}

Textinput.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired
}

Textinput.defaultProps = {
    type: 'text'
}
export default Textinput;