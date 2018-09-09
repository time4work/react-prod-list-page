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
            openColorMenu: false,
            colors: []
        };
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


    render() {
        <div className="color-filter">
            <Button
                buttonRef={node => {
                    this.anchorColorEl = node;
                }}
                aria-owns={this.state.openColorMenu ? 'color-filter--list-grow' : null}
                aria-haspopup="true"
                onClick={this.handleColorMenuToggle}
            >
                Color Filter
            </Button>
            <Popper open={this.state.openColorMenu} anchorEl={this.anchorColorEl} transition disablePortal>
            {({ TransitionProps, placement }) => (
                <Grow
                {...TransitionProps}
                id="color-filter--list-grow"
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
    };
}

export default ColorFilter;