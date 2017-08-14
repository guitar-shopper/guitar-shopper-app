import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom';

export const Signup = ({ signUp }) => (

    < div className="signin-container" >
        <div className="buffer local">
            <form onSubmit={evt => {
                evt.preventDefault()
                signUp(evt.target.name.value, evt.target.email.value, evt.target.password.value)
            }}>
                <div className="form-group">
                    <label>username</label>
                    <input
                        name="name"
                        type="name"
                        className="form-control"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>email</label>
                    <input
                        name="email"
                        type="email"
                        className="form-control"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>password</label>
                    <input
                        name="password"
                        type="password"
                        className="form-control"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-block btn-primary">signup</button>
            </form>
        </div>
        <div className="or buffer">
            <div className="back-line">
                <span>OR</span>
            </div>
        </div>
        <div className="buffer oauth">
            <p>
                <a
                    target="_self"
                    href="/api/auth/login/google"
                    className="btn btn-social btn-google">
                    <i className="fa fa-google" />
                    <button className="btn btn-block btn-primary">signup with Google</button>
                </a>
            </p>
        </div>
    </div >
);

import { signUp } from 'APP/app/reducers/auth.jsx'
import { connect } from 'react-redux'

export default withRouter(connect(
    state => ({}),
    { signUp },
)(Signup))
