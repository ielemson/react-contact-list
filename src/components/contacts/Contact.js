import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context'
class Contact extends Component {
    state = { showcontactInfo: false }
    onDeleteClick = (id, dispatch) => {
        dispatch({ type: 'DELETE_CONTACT', payload: id })
    }
    render() {
        const { name, email, phone, id } = this.props.contact
        const { showcontactInfo } = this.state
        return (
            <Consumer>

                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="card mb-5">
                            {/* <img src="..." className="card-img-top" alt="..." /> */}
                            <div className="card-body">
                                <h5 className="card-title">{name} <i className="fa fa-sort-down" onClick={() => this.setState({
                                    showcontactInfo: !this.state.showcontactInfo
                                })} style={{ cursor: 'pointer' }}></i>
                                    <i className="fa fa-trash" style={{ cursor: 'pointer', float: 'right', color: 'red' }} onClick={this.onDeleteClick.bind(this, id, dispatch)}></i>
                                </h5>
                            </div>
                            {showcontactInfo ? (<ul className="list-group list-group-flush">
                                <li className="list-group-item">Email : {email}</li>
                                <li className="list-group-item">Phone: {phone}</li>
                            </ul>) : null}

                        </div>
                    )
                }}
            </Consumer>

        );
    }
}
Contact.propTypes = {
    contact: PropTypes.object.isRequired,

}
export default Contact;