import React, { Component } from 'react';
import Product from "./product";
import ProductService from '../services/productService';
import "./catalog.css";

class Catalog extends Component {
    state = {
        catalog: [],
        categories: [],
        selectedCategory: ""
    }
    render() {
        let itemsToDisplay = this.state.catalog;

        if (this.state.selectedCategory !== "") {
            itemsToDisplay = itemsToDisplay.filter(prod => { if (prod.category === this.state.selectedCategory) { return true; } return false });
        }

        return (
            <div className="catalog-page">
                <h1>Our Catalog</h1>

                <p>The are {this.state.catalog.length} products in the catalog.</p>

                <div className="cat-buttons">
                    <button onClick={this.clearFilter} className="btn btn-sm btn-info btn-category">See All</button>

                    {this.state.categories.map((c, index) =>
                        <button key={index}
                            onClick={() => { this.categorySelected(c) }}
                            className="btn btn-sm btn-info">{c}
                        </button>)}
                </div>


                <div className="products">
                    {itemsToDisplay.map((item) => <Product key={item.id} data={item} keyId={item.id} catalog={this.state.catalog}></Product>)}
                </div>
            </div>
        );
    }


    clearFilter = () => {
        this.setState({ selectedCategory: "" });
        console.log("View all categories")
    }

    categorySelected = (catName) => {
        console.log(catName);
        this.setState({ selectedCategory: catName });
    }

    //catch the click event for the button and console log the category that the user clicked
    async componentDidMount() {
        // get data from the service
        var service = new ProductService();
        var catalog = await service.getCatalog();

        // get unique categories 
        var cats = [];
        for (let i = 0; i < catalog.length; i++) {
            let product = catalog[i];
            if (!cats.includes(product.category)) {
                cats.push(product.category);
            }
            this.setState({ catalog: catalog });
            this.setState({ categories: cats });
        }
    }
}

export default Catalog;