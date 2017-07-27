import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import { addUser } from '../../redux/users';
import GuitarItem from './GuitarItem';

/* -----------------    COMPONENT     ------------------ */

class GuitarList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      model: '',
    //   brand: '',
    //   category: ''
    };

    this.filterGuitar = this.filterGuitar.bind(this);
    this.renderGuitarSearch = this.renderGuitarSearch.bind(this);
    // this.renderNewGuitarWidget = this.renderNewGuitarWidget.bind(this);
    // this.submit = this.submit.bind(this);
  }

  render() {
    return (
      <div className="container">
        <div className="user-query">
          { this.renderGuitarSearch() }
          {/*{ this.renderNewUserWidget() }*/}
        </div>
        <br />
        <br />
        <div className="user-list">
        {
          this.props.guitars
            .filter(this.filterGuitar)
            .map(guitar => <GuitarItem guitar={guitar} key={guitar.id} />)
        }
        </div>
      </div>
    );
  }

  renderGuitarSearch() {
    return (
      <div className="list-group-item min-content user-item">
        <div className="media">
          <div className="media-left media-middle icon-container">
            <span className="glyphicon glyphicon-search" />
          </div>
          <div className="media-body">
            <h4 className="media-heading tucked">
              <input
                type="text"
                placeholder="Enter the Model Name"
                className="form-like"
                onChange={evt => this.setState({ name: evt.target.value })}
              />
            </h4>
            {/*<h5 className="tucked">
              <input
                 type="email"
                 placeholder="email@website.com"
                 className="form-like"
                 onChange={evt => this.setState({ email: evt.target.value })}
              />
            </h5>
            <h5 className="tucked">
              <input
                type="tel"
                placeholder="(555) 555-5555"
                className="form-like"
                onChange={evt => this.setState({ phone: evt.target.value })}
              />
            </h5>*/}
          </div>
        </div>
      </div>
    );
  }

  filterGuitar(guitar) {
    // OB/BJM: regular expressions are slow create
    const nameMatch  = new RegExp(this.state.name, 'i');
    // const emailMatch = new RegExp(this.state.email, 'i');
    // const phoneMatch = new RegExp(this.state.phone, 'i');

    return nameMatch.test(guitar.model)
        // && emailMatch.test(story.email)
        // && phoneMatch.test(story.phone);
  }


  /*renderNewUserWidget() {
    return (
      <div className="list-group-item min-content user-item">
        <form className="media" onSubmit={this.submit}>
          <div className="media-left media-middle icon-container">
            <button
              type="submit"
              className="glyphicon glyphicon-plus clickable"
            />
          </div>
          <div className="media-body">
            <h4 className="media-heading tucked">
              <input
                name="name"
                type="text"
                required
                placeholder="Jean Doe"
                className="form-like"
              />
            </h4>
            <h5 className="tucked">
              <input
                name="email"
                type="email"
                required
                placeholder="email@website.com"
                className="form-like"
              />
            </h5>
            <h5 className="tucked">
              <input
                name="phone"
                type="tel"
                placeholder="(555) 555-5555"
                className="form-like"
              />
            </h5>
          </div>
        </form>
      </div>
    );
  }*/

//   submit(event) {
//     event.preventDefault();
//     const user = {
//       name: event.target.name.value,
//       email: event.target.email.value,
//       phone: event.target.phone.value,
//     };
//     this.props.addUser(user);
//     // clear the inputs
//     event.target.name.value = '';
//     event.target.email.value = '';
//     event.target.phone.value = '';
//   }
}

/* -----------------    CONTAINER     ------------------ */

const mapState = ({ guitars, brands }) => ({ guitars, brands });

// const mapDispatch = { addUser };

export default connect(mapState)(GuitarList);

