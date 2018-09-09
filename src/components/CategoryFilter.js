import React, { Component } from 'react';

import {
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

class ColorFilter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openCategoryMenu: false,
            categories: []
        };
    }

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
        <div className="category-filter">
            <Button
                buttonRef={node => {
                    this.anchorCategoryEl = node;
                }}
                aria-owns={this.state.openCategoryMenu ? 'category-filter--list-grow' : null}
                aria-haspopup="true"
                onClick={this.handleCategoryMenuToggle}
            >
                Category Filter
            </Button>
            <Popper open={this.state.openCategoryMenu} anchorEl={this.anchorCategoryEl} transition disablePortal>
            {({ TransitionProps, placement }) => (
                <Grow
                {...TransitionProps}
                id="category-filter--list-grow"
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
    };
}

export default ColorFilter;