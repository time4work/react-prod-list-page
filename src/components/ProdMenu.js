import React, { Component } from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Checkbox,
    Button,
    Popper,
    Grow,
    Paper,
    MenuList,
    MenuItem,
    FormControlLabel, 
    FormGroup,
    ClickAwayListener
} from '@material-ui/core';

import action from '../actions';
import data from "../prod-data.json";

class ProdMenu extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            openColorMenu: false,
            openCategoryMenu: false,
            colors: [],
            categories: []
        };
    }

    componentWillMount() {
        let colors = [];
        let categories = [];

        // parse the product-data file
        data.forEach(item => {
            categories.push(item.category.toLowerCase());
            item.states.forEach(itemState => {
                colors.push(itemState.label.toLowerCase());
            })
        });

        // remove duplicate 
        colors = colors.filter(function(item, index) {
            return colors.indexOf(item) === index;
        });
        categories = categories.filter(function(item, index) {
            return categories.indexOf(item) === index;
        });

        console.log("data",data);
        console.log("colors",colors);
        console.log("categories",categories);

        this.setState({
            colors,
            categories
        });
    }

    // Menu Color Filter
    handleColorMenuToggle = () => {
        this.setState(state => ({ 
            openColorMenu: !state.openColorMenu 
        }));
    };
    handleColorMenuClose = event => {
        if (this.anchorColorEl.contains(event.target)) {
            return;
        }
        this.setState({ openColorMenu: false });
    };
    handleColorCheckboxChange = name => event => {
        console.log('Color checkbox', event);
        // this.setState({ [name]: event.target.checked });
    };

    // Menu Category Filter
    handleCategoryMenuToggle = () => {
        this.setState(state => ({ 
            openCategoryMenu: !state.openCategoryMenu 
        }));
    };
    handleCategoryMenuClose = event => {
        if (this.anchorCategoryEl.contains(event.target)) {
            return;
        }
        this.setState({ openCategoryMenu: false });
    };
    handleCategoryCheckboxChange = name => event => {
        console.log('Category checkbox', event);
        // this.setState({ [name]: event.target.checked });
    };

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
                        <div className="test-btn">
                            <Button onClick={action.test}>
                                Test
                            </Button>
                        </div>
                        <div className="color-filter">
                            <Button
                                buttonRef={node => {
                                    this.anchorColorEl = node;
                                }}
                                aria-owns={this.state.openColorMenu ? 'menu-color-list-grow' : null}
                                aria-haspopup="true"
                                onClick={this.handleColorMenuToggle}
                            >
                                Color Filter
                            </Button>
                            <Popper open={this.state.openColorMenu} anchorEl={this.anchorColorEl} transition disablePortal>
                            {({ TransitionProps, placement }) => (
                                <Grow
                                {...TransitionProps}
                                id="menu-color-list-grow"
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                >
                                <Paper>
                                    <ClickAwayListener onClickAway={this.handleColorMenuClose}>
                                        <FormGroup row>
                                            <MenuList>
                                                {this.state.colors.map((color,index) => 
                                                    <MenuItem key={index}  className="color-filter--item">
                                                        <FormControlLabel
                                                            control={
                                                            <Checkbox
                                                                checked={this.state.checkedA}
                                                                onChange={this.handleColorCheckboxChange(color)}
                                                                value={color}
                                                                color="primary"
                                                            />
                                                            }
                                                            label={color.toUpperCase()}
                                                        />
                                                    </MenuItem>
                                                )}
                                            </MenuList>
                                        </FormGroup>
                                    </ClickAwayListener>
                                </Paper>
                                </Grow>
                            )}
                            </Popper>
                        </div>

                        <div className="category-filter">
                            <Button
                                buttonRef={node => {
                                    this.anchorCategoryEl = node;
                                }}
                                aria-owns={this.state.openCategoryMenu ? 'menu-category-list-grow' : null}
                                aria-haspopup="true"
                                onClick={this.handleCategoryMenuToggle}
                            >
                                Category Filter
                            </Button>
                            <Popper open={this.state.openCategoryMenu} anchorEl={this.anchorCategoryEl} transition disablePortal>
                            {({ TransitionProps, placement }) => (
                                <Grow
                                {...TransitionProps}
                                id="menu-category-list-grow"
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                >
                                <Paper>
                                    <ClickAwayListener onClickAway={this.handleCategoryMenuClose}>
                                        <FormGroup row>
                                            <MenuList>
                                                {this.state.categories.map((category,index) => 
                                                    <MenuItem key={index}  className="category-filter--item">
                                                        <FormControlLabel
                                                            control={
                                                            <Checkbox
                                                                checked={this.state.checkedA}
                                                                onChange={this.handleCategoryCheckboxChange(category)}
                                                                value={category}
                                                                color="primary"
                                                            />
                                                            }
                                                            label={category.toUpperCase()}
                                                        />
                                                    </MenuItem>
                                                )}
                                            </MenuList>
                                        </FormGroup>
                                    </ClickAwayListener>
                                </Paper>
                                </Grow>
                            )}
                            </Popper>
                        </div>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}


export default ProdMenu;