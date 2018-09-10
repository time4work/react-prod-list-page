import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
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

import {
    addColorToFilter,
    removeColorFromFilter,
    removeColorFilter
} from '../actions/colors';


class ColorFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openMenu: false
        };
    }

    // Menu Color Filter
    handleMenuToggle = () => {
        this.setState(state => ({ 
            openMenu: !state.openMenu 
        }));
    };
    handleMenuClose = event => {
        if (this.anchorEl.contains(event.target)) {
            return;
        }
        this.setState({ openMenu: false });
    };
    handleCheckboxChange = item => event => {
        if (event.target.checked) 
            this.props.addColor(item.value);
        else
            this.props.removeColor(item.value);
    };


    render() {
        const { items, colorFilter } = this.props;
        const colors = colorFilter.length === 0
            ? items.map(i => {
                return {
                    value: i,
                    checked: false
                };
            })
            : items.map(i => {
                const index = colorFilter.indexOf(i);
                if (index === -1) {
                    return {
                        value: i,
                        checked: false
                    };
                }
                return {
                    value: i,
                    checked: true
                };
            });  
        return (
            <div className="color-filter">
                <Button
                    buttonRef={node => {
                        this.anchorEl = node;
                    }}
                    aria-owns={
                        this.state.openMenu 
                            ? 'color-filter--list-grow' 
                            : null
                    }
                    aria-haspopup="true"
                    onClick={this.handleMenuToggle}
                > Color Filter </Button>

                <Popper 
                    open={this.state.openMenu}
                    anchorEl={this.anchorEl}
                    transition disablePortal
                >
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        id="color-filter--list-grow"
                        style={{ 
                            transformOrigin: placement === 'bottom' 
                                ? 'center top' 
                                : 'center bottom' 
                        }}
                    >
                    <Paper>
                        <ClickAwayListener onClickAway={this.handleMenuClose}>
                            <FormGroup row>
                                <MenuList>
                                    {colors.map((color,index) => 
                                        <MenuItem key={index}  className="color-filter--item">
                                            <FormControlLabel
                                                control={
                                                <Checkbox
                                                    checked={color.checked}
                                                    onChange={this.handleCheckboxChange(color)}
                                                    value={color.value}
                                                    color="primary"
                                                />
                                                }
                                                label={color.value.toUpperCase()}
                                            />
                                        </MenuItem>
                                    )}
                                        <MenuItem className="color-filter--reset"
                                            onClick={() => this.props.removeFilter()}
                                        > Reset </MenuItem>
                                </MenuList>
                            </FormGroup>
                        </ClickAwayListener>
                    </Paper>
                    </Grow>
                )}
                </Popper>
            </div>
        );
    };
}

ColorFilter.propTypes = {
    items: PropTypes.array.isRequired,
    colorFilter: PropTypes.array.isRequired,
    addColor: PropTypes.func.isRequired,
    removeColor: PropTypes.func.isRequired,
    removeFilter: PropTypes.func.isRequired
};

// get ColorFilter;
const mapStateToProps = (state) => {
    return {
        colorFilter: state.colorFilter
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addColor: color => dispatch(addColorToFilter(color)),
        removeColor: color => dispatch(removeColorFromFilter(color)),
        removeFilter: () => dispatch(removeColorFilter())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ColorFilter);