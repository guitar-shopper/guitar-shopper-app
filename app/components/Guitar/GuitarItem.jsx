import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
// OB/BJM: BUNCH of dead code
// import { removeUser } from '../../redux/users';
// import { removeStory } from '../../redux/stories';

/* -----------------    COMPONENT     ------------------ */

class GuitarItem extends React.Component {

  constructor (props) {
    super(props);
    // this.removeUserCallback = this.removeUserCallback.bind(this);
  }

  render () {
    const { guitar, brands } = this.props;
    console.log(brands)
    return (
      <div className="list-group-item min-content user-item">
        <div className="media">
          <div className="media-left media-middle icon-container">
            <img className="media-object img-circle" src={guitar.photo} />
          </div>
          <NavLink
            className="media-body"
            activeClassName="active"
            to={`/guitars/${guitar.id}`}>
            <h4 className="media-heading tucked">
              <span placeholder="Jean Doe">{guitar.model}</span>
            </h4>
            <h5 className="tucked">
              {/* OB/BJM: maybe don't even render the span if there's no brand */}
              {/* OB/BJM: watch out for using ids as array indexes: try eager loading or explicitly searching for that branch by id in the array */}
              <span>BRAND BRO: {brands[0] && brands.find[+guitar.brand_id - 1].name}</span>
            </h5>
            <h5 className="tucked">
              <span>{guitar.category}</span>
            </h5>
          </NavLink>
          {/*<div className="media-right media-middle">
            <button
                className="btn btn-default"
                onClick={this.removeUserCallback}>
              <span className="glyphicon glyphicon-remove" />
            </button>
          </div>*/}
        </div>
      </div>
    );
  }

  // removeUserCallback (event) {
  //   const { removeUser, removeStory, user, stories } = this.props;
  //   event.stopPropagation();
  //   removeUser(user.id);
  // }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ brands }) => ({ brands });

// const mapDispatch = { removeUser, removeStory };

export default connect(mapState, null)(GuitarItem);
