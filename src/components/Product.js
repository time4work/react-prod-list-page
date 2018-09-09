import React, { Component } from 'react';
// import PropTypes from "prop-types";

import { 
    Typography 
} from '@material-ui/core';

class Product extends Component {
    constructor(props) {
        super(props);

        // default state
        this.state = {
            prodState: null
        };
    }

    handleProdStateChange(ind) {
        console.log(ind);
        this.setState({
            prodState: ind
        });
    }

    render() {
        console.log(this.props);
        const { data } = this.props;
        const { prodState } = this.state;
        
        // take first if prodState is default
        const prodStateIndex = prodState ? prodState : 0;

        const prodImg = `img/${data.states[prodStateIndex].img}`;
        const prodPrice = data.states[prodStateIndex].price;
		const prodColors = data.states.map((s, index) => (
			<li key={index} 
                className={
                    index===prodStateIndex
                        ? "prod--stage-selected"
                        : ""
                }
            >
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
                        <Typography variant='subheading' color='inherit'>
                            <a href="#">
                                {data.name}
                            </a>
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

// ResponsiveGrid.propTypes = {
//   classes: PropTypes.object.isRequired
// };

export default Product;