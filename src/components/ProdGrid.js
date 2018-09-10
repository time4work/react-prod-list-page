import React, { Component } from 'react';
import { Grid } from '@material-ui/core';

// import { connect } from 'react-redux';
// import PropTypes from "prop-types";
// import data from "../prod-data.json";
import Product from './Product';
// import {
//     fetchProductData
// } from '../actions';

class ProdGrid extends Component {
    render() {
        const products = this.props.data.map((item, it) => (
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

export default ProdGrid;

// ProdGrid.propTypes = {
//     data: PropTypes.array.isRequired,
//     fetchData: PropTypes.func.isRequired
// };

// const mapStateToProps = (state) => {
//     return {
//         data: state.productData,
//     };
// };
// const mapDispatchToProps = (dispatch) => {
//     return {
//         fetchData: () => dispatch(fetchProductData()),
//     };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(ProdGrid);