import React, { Component } from 'react';
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class SingleGuitar extends Component {

    render() {

        const guitarId = Number(this.props.match.params.id);
        const single_guitar_array = (this.props.guitars.filter(guitar => guitar.id === guitarId));

        const { brands, auth, cart } = this.props;

        let guitar, model, category, orientation, description, img, price, brandId, brandName;
        if (single_guitar_array.length) { // waits until guitars is populated
            guitar = single_guitar_array[0];
            model = guitar.model;
            category = guitar.category;
            description = guitar.description;
            orientation = guitar.orientation;
            img = guitar.imageURL;
            price = guitar.price;
            brandId = guitar.brand_id;

            const single_brand_array = (brands.filter(brand => brand.id === brandId));
            if (single_brand_array.length) {
                brandName = single_brand_array[0].name;
            }
        }

        return (
            
            <div className="list-group-item min-content user-item">
                <div className="media">
                    <div className="media-left media-middle icon-container">
                        <img src={img} />
                    </div>
                    <div className="media-body media-middle" >
                        <h3 className="media-heading tucked">
                            <span placeholder="Brand...">{model}</span>
                        </h3>
                        <p className="tucked">
                            <span id="text">{description}.</span>
                        </p>
                        <table>
                            <thead>
                                <tr>
                                    <th id="title">Category</th>
                                    <th id="title">Orientation</th>
                                    <th id="title">Price</th>
                                    <th id="title">Brand</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{category}</td>
                                    <td>{orientation}-handed</td>
                                    <td>${price}</td>
                                    <td>{brandName}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div>
                            <button
                            className="navbar-btn btn btn-default"
                            onClick={() => this.props.addToCart(guitarId, auth.id, cart.id)}>
                            Add to Cart
                            </button></div>
                        </div>
                    </div>
                </div>
            )
        }   
    }

import { addToCart } from 'APP/app/reducers/cart'

const mapStateToProps = function (state) {
    return {
        guitars: state.guitars,
        brands: state.brands,
        auth: state.auth,
        cart: state.cart
    }
};

export default withRouter(connect(mapStateToProps, {addToCart})(SingleGuitar));