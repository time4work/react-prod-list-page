import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
} from '@material-ui/core';

import { removeFilter } from '../actions';
import ColorFilter from './ColorFilter';
import CategoryFilter from './CategoryFilter';

class ProdMenu extends Component {
    render() {
        return (
            <div className='prod-menu'>
                <AppBar position='static' color='secondary'>
                    <Toolbar>
                        <Typography
                            variant='title'
                            color='inherit'
                            align='center'
                            style={{width: '100%'}}
                        >
                            Product List Page
                        </Typography>
                    </Toolbar>
                </AppBar>
                <AppBar position='static' color="default">
                    <Toolbar>
                        <CategoryFilter items={this.props.categories} />
                        <ColorFilter items={this.props.colors} />
                        <div className="test-btn">
                            <Button onClick={() => this.props.removeFilter()}>
                                Reset Filters
                            </Button>
                        </div>

                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

// export default ProdMenu;
ProdMenu.propTypes = {
    removeFilter: PropTypes.func.isRequired
};

// export CategoryFilter;
const mapStateToProps = (state) => {
    return {};
};
const mapDispatchToProps = (dispatch) => {
    return {
        removeFilter: () => dispatch(removeFilter())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProdMenu);