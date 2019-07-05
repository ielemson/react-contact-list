import React, { Component } from 'react';
import Contact from './Contact'
import { Consumer } from '../../context'
class Contacts extends Component {


    // DeleteContact = (id) => {
    //     const { contacts } = this.state
    //     const newContact = contacts.filter(contact => contact.id !== id)

    //     this.setState({ contacts: newContact })
    // }

    render() {

        return (
            <Consumer>
                {value => {
                    //destructuring
                    const { contacts } = value
                    return (
                        <React.Fragment>
                            {contacts.map(contact => (

                                <Contact
                                    key={contact.id}
                                    contact={contact}
                                // DeleteClickHandler={this.DeleteContact.bind(this, contact.id)}
                                />


                            ))}
                        </React.Fragment>
                    )
                }}
            </Consumer>
        )


    }
}

export default Contacts;