import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

import { productDataFilter } from '../utility';
import Product from './Product';

class ProdGrid extends Component {
    render() {
        const {
            data,
            colorFilter, 
            categoryFilter
        } = this.props;
        return (
            <div className="prod-list">
                <Grid container
                    justify="center"
                    alignItems="center"
                >
                    {productDataFilter(data, categoryFilter, colorFilter)
                    .map((item, it) => (
                        <Grid key={it} item 
                            className="prod-list--item" 
                            xs={12} sm={6} md={4} lg={3}
                        >
                            <Product data={item}/>  
                        </Grid>
                    )) }
                </Grid>
            </div>
        );
    }
}

ProdGrid.propTypes = {
    colorFilter: PropTypes.array.isRequired,
    categoryFilter: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
    return {
        colorFilter: state.colorFilter,
        categoryFilter: state.categoryFilter,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(ProdGrid);