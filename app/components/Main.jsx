import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import BrandList from './Brand/BrandList';
import GuitarList from './Guitar/GuitarList'
import SingleBrand from './Brand/SingleBrand';
import SingleGuitar from './Guitar/SingleGuitar1';
import Login from './Login'
import Signup from './Signup'
import Home from './Home';
import store from '../store';
import CartPage from './Cart/CartPage'
import Checkout from './Checkout'

import { fetchAllBrands } from '../reducers/brands';
import { fetchAllGuitars } from '../reducers/guitars';


export default class Main extends Component {

    componentDidMount() {
        const guitarsThunk = fetchAllGuitars();
        store.dispatch(guitarsThunk);

        const brandsThunk = fetchAllBrands();
        store.dispatch(brandsThunk);

    }
    render() {
        return (
            <div>
                <Navbar />
                <div>
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/brands' component={BrandList} />
                        <Route exact path='/guitars' component={GuitarList} />
                        <Route path='/brands/:id' component={SingleBrand} />
                        <Route path='/guitars/:id' component={SingleGuitar} />
                        <Route path='/login' component={Login} />
                        <Route path='/signup' component={Signup} />
                        <Route path='/cart' component={CartPage} />
                        <Route path='/checkout' component={Checkout} />
                    </Switch>
                </div>

            </div>
        )
    }
}
