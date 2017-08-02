import React, { Component } from 'react';import { withRouter, NavLink } from 'react-router-dom';import { connect } from 'react-redux';class SingleBrand extends Component {    render() {        const brandId = Number(this.props.match.params.id); // gets studentId from props        const single_brand_array = (this.props.brands.filter(brand => brand.id === brandId));        let brand, name, address, city, state, phone, description, websiteURL, location, img;        if (single_brand_array.length) { // waits until students is populated            brand = single_brand_array[0];            name = brand.name;            address = brand.address;            city = brand.city;            state = brand.state;            phone = brand.phone;            description = brand.description;            websiteURL = brand.websiteURL;            location = brand.location;            img = brand.img;        }        return (            <div className="list-group-item min-content user-item">                <div className="media">                    <div className="media-left media-middle icon-container">                        <img src={img}/>                    </div>                    <div className="media-body media-middle">                        <h3 className="media-heading tucked">                            <span placeholder="Brand...">{name} Guitars</span>                        </h3>                        <p className="tucked">                            <span id="text">{description}</span>                        </p>                        <h5 className="tucked">                            <a href={websiteURL}>Visit the Website</a>                        </h5>                        <h4 className="tucked">Contact</h4>                        <h5 className="tucked">                            Phone:                        </h5>                        <h6 className="tucked">                            {phone}                        </h6>                        <h5 className="tucked">                            Address:                        </h5>                        <h6 className="tucked">                            <div>                                <div><span>{address}</span></div>                                <div><span>{city}, {state}</span></div>                            </div>                        </h6>                    </div>                </div>                <div className="map">                    <iframe id="dimensions" src={location} allowFullScreen></iframe>                </div>            </div>        )    }}const mapStateToProps = function (state) {    return {        brands: state.brands    }};export default withRouter(connect(mapStateToProps)(SingleBrand));