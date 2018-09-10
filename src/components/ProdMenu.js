import React, { Component } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
} from '@material-ui/core';

import actions from '../actions';
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
                        <ColorFilter items={this.props.colors} />
                        <CategoryFilter items={this.props.categories} />
                        <div className="test-btn">
                            <Button onClick={actions['test']}>
                                Test
                            </Button>
                        </div>

                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default ProdMenu;