import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

import { 
    Typography 
} from '@material-ui/core';

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prodState: null
        };
    }

    handleProdStateChange(ind) {
        this.setState({
            prodState: ind
        });
    }

    componentDidUpdate(prevProps, prevState){
        console.log(this.props, prevProps);
        const { data, prefColor } = this.props;
        if (prefColor !== prevProps.prefColor) {
            if (!prefColor)
                this.setState({
                    prodState: null
                });
            else {
                if (data && data.states)
                    for (let i=0; i<data.states.length; i++) {
                        if (data.states[i].label === prefColor) {
                            this.setState({
                                prodState: i
                            });
                        break;
                    }
                }
            }
        }
    }


    render() {
        const { data } = this.props;
        const { prodState } = this.state;

        // take first if prodState is default
        let prodStateIndex = prodState ? prodState : 0;

        const prodImg = `img/${data.states[prodStateIndex].img}`;
        const prodPrice = data.states[prodStateIndex].price;
		const prodColors = data.states.map((s, index) => (
			<li key={index}
                className={
                    index===prodStateIndex
                        ? "prod--stage-selected"
                        : ""
                }>
                <img
                    className={`prod--color`}
                    onClick={this.handleProdStateChange.bind(this, index)}
                    src={`img/${s.icon}`}
                    alt={s.label}
                />
			</li>
		));
        return (
            <div className="prod">
                <div className="prod--wrapper">

                    <div className="prod--img">
                        <a href="#">
                            <img src={prodImg} alt={data.name}/>
                        </a>
                    </div>
                    <div className="prod--name">
                        <Typography variant='headline' color='inherit'>
                            <a href="#">
                                {data.name}
                            </a>
                        </Typography>
                    </div>
                    <div className="prod--category">
                        <Typography variant='subheading' color='inherit'>
                            {`< ${data.category} >`}
                        </Typography>
                    </div>
                    <div className="prod--price">
                        <p>
                            <a href="#">
                                {`${prodPrice} $`}
                            </a>
                        </p>
                    </div>
                    <div className="prod--stage">
                        <ul>{prodColors}</ul>
                    </div>

                </div>
            </div>
        );
    }
}


Product.defaultProps = {
    data: {
        name: '',
        category: '',
        states: []
    }
};
Product.propTypes = {
    prefColor: PropTypes.string.isRequired
};

// get last selected color;
const mapStateToProps = (state) => {
    return {
        prefColor: state.selectedColor
    };
};
const mapDispatchToProps = (dispatch) => {
    return {};
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);