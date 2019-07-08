import React from "react";
import { Link } from 'react-router-dom';
const Header = (props) => {
    const { branding } = props
    return (
        <nav class="navbar navbar-expand navbar-dark bg-dark">
            <a class="navbar-brand" href="/">{branding}</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarsExample02">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/contact/add">Add Contact</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/about">About</Link>
                    </li>
                </ul>

            </div>
        </nav>
    )

}

Header.defaultProps = {
    branding: "My App"
}
export default Header