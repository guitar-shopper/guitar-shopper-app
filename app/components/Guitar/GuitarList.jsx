import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Sidebar from '../Sidebar';
import GuitarItem from './GuitarItem';

/* -----------------    COMPONENT     ------------------ */

class GuitarList extends Component {
    constructor() {
        super();

        this.state = {
            model: '',
            filteredBrands: [],
            filteredCategories: [],
            filteredPrices: [],
            checked: 0
            //   brand: '',
            //   category: ''
        };

        this.filterQueryGuitar = this.filterQueryGuitar.bind(this);
        this.renderGuitarSearch = this.renderGuitarSearch.bind(this);
        this.handleBrandsCheck = this.handleBrandsCheck.bind(this);
        this.handleCategoriesCheck = this.handleCategoriesCheck.bind(this);
        this.handlePricesCheck = this.handlePricesCheck.bind(this);
    }


    render() {
        const {guitars} = this.props;

        return (

            <div className="container">
              <Sidebar handleBrandsCheck={this.handleBrandsCheck}
                       handleCategoriesCheck={this.handleCategoriesCheck}
                       handlePricesCheck={this.handlePricesCheck}/>

              <div className="user-query">
                  { this.renderGuitarSearch() }
              </div>
              <br />
              <br />
              <div className="user-list">
                  {
                      guitars
                          .filter(guitar => {
                          if (this.state.checked > 0) {
                              const priceRange = this.determinePriceRange(guitar);
                                if (this.state.filteredBrands.includes(guitar.brand_id)
                                    || this.state.filteredCategories.includes(guitar.category)
                                    || this.state.filteredPrices.includes(priceRange)) {
                                    return guitar;
                                }
                            } else return guitar;
                      })
                      // call filter and map on the result of the checkbox-filtered guitars
                          .filter(this.filterQueryGuitar)
                          .map(guitar => <GuitarItem guitar={guitar} key={guitar.id}/>)
                  }
              </div>
            </div>
        );
    }

    handleBrandsCheck(event, brandId) {

        if (event.target.checked) {
            this.state.checked++;
            this.setState({
                filteredBrands: this.state.filteredBrands.concat([brandId])
            });
        } else {
            this.state.checked--;
            const index = this.state.filteredBrands.indexOf(brandId);
            const arr = this.state.filteredBrands.slice();
            arr.splice(index, 1);
            this.setState({
                filteredBrands: arr
            })
        }
    }

    handleCategoriesCheck(event, category) {

        if (event.target.checked) {
            this.state.checked++;
            this.setState({
                filteredCategories: this.state.filteredCategories.concat([category])
            });
        } else {
            this.state.checked--;
            const index = this.state.filteredCategories.indexOf(category);
            const arr = this.state.filteredCategories.slice();
            arr.splice(index, 1);
            this.setState({
                filteredCategories: arr
            })
        }
    }

    handlePricesCheck(event, priceRange) {

        if (event.target.checked) {
          this.state.checked++;
            this.setState({
                filteredPrices: this.state.filteredPrices.concat([priceRange])
            });
        } else {
            this.state.checked--;
            const index = this.state.filteredPrices.indexOf(priceRange);
            const arr = this.state.filteredPrices.slice();
            arr.splice(index, 1);
            this.setState({
                filteredPrices: arr
            })
        }
    }

    determinePriceRange (guitar) {

        let priceRange = "";
        if (guitar.price >= 100 && guitar.price <= 200) priceRange = '100-200';
        if (guitar.price > 200 && guitar.price <= 300) priceRange = '201-300';
        if (guitar.price > 300 && guitar.price <= 400) priceRange = '301-400';
        if (guitar.price > 400 && guitar.price <= 500) priceRange = '401-500';
        if (guitar.price > 500) priceRange = '501+';

        return priceRange;
    }

    renderGuitarSearch() {

        return (
            <div className="list-group-item min-content user-item">
              <div className="media">
                <div className="media-left media-middle icon-container">
                  <span className="glyphicon glyphicon-search"/>
                </div>
                <div className="media-body">
                  <h4 className="media-heading tucked">
                    <input
                        type="text"
                        placeholder="Enter the Model Name"
                        className="form-like"
                        onChange={evt => this.setState({name: evt.target.value})}
                    />
                  </h4>
                </div>
              </div>
            </div>
        );
    }

    filterQueryGuitar(guitar) {
        const nameMatch = new RegExp(this.state.name, 'i');

        return nameMatch.test(guitar.model)
    }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({guitars, brands}) => ({guitars, brands});

export default connect(mapState)(GuitarList);

