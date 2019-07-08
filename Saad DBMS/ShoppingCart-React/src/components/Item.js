import React, { Component } from 'react';
import '../index.css'

import Cart from './Cart/Cart';
import ProductGrid from './Cart/ProductGrid.js';
import FilterTabs from './Cart/FilterTabs.js';
import TitleBar from './Cart/TitleBar.js';

// import Images from '../store/getimages';   

class App extends Component {
    constructor() {
        super();



        this.sendToCart = this.sendToCart.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
        this.state = {
            products: []
        }
    }
    sendToCart(newProduct) {
        this.setState({
            products: [...this.state.products, newProduct]
        })
    }
    applyFilter(category) {
        this.setState({
                ...this.state,
            productsToFilter: category
        })
    }
    deleteProduct(productToDelete) {
        console.log(`product to delete is ${productToDelete}`);
        console.log(productToDelete);
        this.setState({
            ...this.state,
            products: this.state.products.filter((singleProduct, key) => {
                return key !== productToDelete.productKey;
            })
        })
    }
      render() {
        return (
            // <Provider store={CartStore}>
                <div className="container">
                    <TitleBar title="E - Dealers | Items"></TitleBar>
                    <FilterTabs />
                        <div className="app-container container">
                            <div className="inner-container">
                                    <ProductGrid filterProducts={this.state.productsToFilter} onAddToCart={this.sendToCart}/>
                            </div>
                 
                                <Cart />
                          </div>
                </div>
        // </Provider>
        )
      }
    }

export default App;
