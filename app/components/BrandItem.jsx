import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

export default class BrandItem extends Component {

    render() {

        const {brand} = this.props;

        return (
            <div className="list-group-item min-content user-item">
                <div className="media">
                    <div className="media-left media-middle icon-container">
                        <img src={brand.img} />
                    </div>
                    <NavLink
                        className="media-body media-middle"
                        activeClassName="active"
                        to={`/brands/${brand.id}`}>
                        {/*<img className="logo" src={brand.img} alt={brand.name}></img>*/}
                        <h4 className="media-heading tucked">
                            <span placeholder="Brand...">{brand.name}</span>
                        </h4>
                        <p className="tucked">
                            <span id="text">{brand.description}</span>
                        </p>
                    </NavLink>
                </div>
            </div>

        )
    }
}
