import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
// import PropTypes from "prop-types";

import data from "../prod-data.json";

import Product from './Product';

class ProdGrid extends Component {
    render() {
        const products = data.map((item, it) => (
            <Grid item className="prod-list--item"
                key={it}
                xs={12}
                sm={6}
                md={4}
                lg={3}
            >
                <Product 
                    data={item}
                />
            </Grid>
        ));
        return (
            <div className="prod-list">
                <Grid container
                    justify="center"
                    alignItems="center"
                >
                    {products}
                </Grid>
            </div>
        );
    }
}

// ProdGrid.propTypes = {
//     classes: PropTypes.object.isRequired
// };

export default ProdGrid;