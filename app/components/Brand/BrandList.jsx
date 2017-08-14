import React, { Component } from 'react';
import { connect } from 'react-redux';

import BrandItem from './BrandItem';

class AllBrands extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="brand-list">
          {
            this.props.brands
              .map(brand => <BrandItem key={brand.id} brand={brand} />)
          }
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    brands: state.brands
  }
};

export default connect(mapStateToProps)(AllBrands);
