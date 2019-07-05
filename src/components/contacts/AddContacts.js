import React, { Component } from 'react';
import { Consumer } from './../../context'
import uuid from 'uuid';
class AddContacts extends Component {
    state = {
        name: '',
        email: '',
        phone: ''
    };

    onSubmit = (dispatch, e) => {
        e.preventDefault();
        const { name, email, phone } = this.state;
        const NewContact = {
            id: uuid(),
            name,
            email,
            phone
        }

        dispatch({ type: 'ADD_CONTACT', payload: NewContact });

        //Clear the state
        this.setState({
            name: '',
            email: '',
            phone: ''
        })
    }
    onChange = (e) => this.setState({ [e.target.name]: e.target.value })


    render() {
        const { name, email, phone } = this.state;

        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;

                    return (
                        <div>
                            <section>

                                <div className="row justify-content-center">
                                    <div className="col-12 col-md-12 col-lg-8 col-xl-6 card">
                                        <div className="row">
                                            <div className="col text-center card-header">
                                                <h1>Add contact</h1>

                                            </div>
                                        </div>
                                        <form className="form-group" onSubmit={this.onSubmit.bind(this, dispatch)}>
                                            <div className="row align-items-center">
                                                <div className="col mt-4">
                                                    <input type="text" className="form-control" placeholder="Enter Name.." name="name" value={name} onChange={this.onChange} />
                                                </div>
                                            </div>
                                            <div className="row align-items-center mt-4">
                                                <div className="col">
                                                    <input type="email" className="form-control" placeholder="Enter Email.." name="email" value={email} onChange={this.onChange} />
                                                </div>
                                            </div>
                                            <div className="row align-items-center mt-4">
                                                <div className="col">
                                                    <input type="text" className="form-control" placeholder="Enter Phone" name="phone" value={phone} onChange={this.onChange} />
                                                </div>
                                            </div>
                                            {/* <div className="row align-items-center mt-4">
                <div className="col">
                <input type="password" className="form-control" placeholder="Password" />
                </div>
                <div className="col">
                <input type="password" className="form-control" placeholder="Confirm Password" />
                </div>
                </div> */}
                                            <div className="row justify-content-start mt-2">
                                                <div className="col">

                                                    <button type="submit" className="btn btn-primary mb-4">Add Contact</button>
                                                </div>
                                            </div>
                                        </form>

                                    </div>
                                </div>

                            </section>
                        </div>
                    )
                }}
            </Consumer>
        );
    }
}

export default AddContacts;