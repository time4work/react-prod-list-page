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
    addCategoryToFilter,
    removeCategoryFromFilter,
    removeCategoryFilter
} from '../actions/categories';


class CategoryFilter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openMenu: false,
        };
    }

    // Menu Category Filter
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
            this.props.addCategory(item.value);
        else
            this.props.removeCategory(item.value);
    };


    render() {
        const { items, categoryFilter } = this.props;
        const categories = categoryFilter.length === 0
            ? items.map(i => {
                return {
                    value: i,
                    checked: false
                };
            })
            : items.map(i => {
                const index = categoryFilter.indexOf(i);
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
            <div className="category-filter">
                <Button
                    buttonRef={node => {
                        this.anchorEl = node;
                    }}
                    aria-owns={
                        this.state.openMenu 
                            ? 'category-filter--list-grow' 
                            : null
                    }
                    aria-haspopup="true"
                    onClick={this.handleMenuToggle}
                > Category Filter </Button>

                <Popper transition disablePortal
                    open={this.state.openMenu} 
                    anchorEl={this.anchorEl} 
                >
                {({ TransitionProps, placement }) => (
                    <Grow
                        style={{ 
                            transformOrigin: placement === 'bottom' 
                                ? 'center top' 
                                : 'center bottom' 
                        }}
                        {...TransitionProps}
                        id="category-filter--list-grow"
                    >
                    <Paper>
                        <ClickAwayListener onClickAway={this.handleMenuClose}>
                            <FormGroup row>
                                <MenuList>
                                {categories.map((category,index) => 
                                    <MenuItem key={index}  className="category-filter--item">
                                        <FormControlLabel
                                            control={
                                            <Checkbox
                                                checked={category.checked}
                                                onChange={this.handleCheckboxChange(category)}
                                                value={category.value}
                                                color="primary"
                                            />
                                            }
                                            label={category.value.toUpperCase()}
                                        />
                                    </MenuItem>
                                )}
                                    <MenuItem className="category-filter--reset"
                                         onClick={() => this.props.removeFilter()}
                                    >
                                    Reset
                                    </MenuItem>
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

CategoryFilter.propTypes = {
    items: PropTypes.array.isRequired,
    categoryFilter: PropTypes.array.isRequired,
    addCategory: PropTypes.func.isRequired,
    removeCategory: PropTypes.func.isRequired,
    removeFilter: PropTypes.func.isRequired
};

// export CategoryFilter;
const mapStateToProps = (state) => {
    return {
        categoryFilter: state.categoryFilter
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        addCategory: category => dispatch(addCategoryToFilter(category)),
        removeCategory: category => dispatch(removeCategoryFromFilter(category)),
        removeFilter: () => dispatch(removeCategoryFilter())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter);