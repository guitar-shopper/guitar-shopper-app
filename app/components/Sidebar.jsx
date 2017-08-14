import React, { Component } from 'react';
import { connect } from 'react-redux'

class Sidebar extends Component {


    render() {
        const {brands} = this.props;

        return (
            <div className="sidebar">
                <img src="/Rock-Guitar-icon.png" className="guitar-logo"/>
                <h3 id="header">Brand</h3>
                <ul className="sidebarUl">
                    {
                        brands[0] && brands.map(brand => {
                            return <li key={brand.id}>{brand.name}<span><input
                                type="checkbox"
                                onClick={ (evt) => this.props.handleBrandsCheck(evt, brand.id) }
                            /></span></li>
                        })
                    }
                </ul>
                <h3 id="header">Type</h3>
                <ul className="sidebarUl">
                    <li>Electric <span><input type="checkbox"
                                              onClick={ evt => this.props.handleCategoriesCheck(evt, 'Electric') }/></span>
                    </li>
                    <li>Acoustic <span><input type="checkbox"
                                              onClick={ evt => this.props.handleCategoriesCheck(evt, 'Acoustic') }/></span>
                    </li>
                </ul>
                <h3 id="header">Price</h3>
                <ul className="sidebarUl">
                    <li>$100 - $200 <span><input type="checkbox"
                                                 onClick={ evt => this.props.handlePricesCheck(evt, '100-200') }/></span>
                    </li>
                    <li>$201 - $300 <span><input type="checkbox"
                                                 onClick={ evt => this.props.handlePricesCheck(evt, '201-300') }/></span>
                    </li>
                    <li>$301 - $400 <span><input type="checkbox"
                                                 onClick={ evt => this.props.handlePricesCheck(evt, '301-400') }/></span>
                    </li>
                    <li>$400 - $500 <span><input type="checkbox"
                                                 onClick={ evt => this.props.handlePricesCheck(evt, '401-500') }/></span>
                    </li>
                    <li>$501 + <span><input type="checkbox"
                                            onClick={ evt => this.props.handlePricesCheck(evt, '501+') }/></span></li>
                </ul>
            </div>
        );
    }
}

const mapState = ({brands, guitars}) => ({brands, guitars});

export default connect(mapState)(Sidebar);
