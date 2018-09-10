import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from "prop-types";

import { fetchProductData } from './actions';
import { performFilterDate } from './utility'
import Menu from './components/ProdMenu';
import Grid from './components/ProdGrid';

class App extends Component {
  componentWillMount() {
    // fetchData with redux
    this.props.fetchData();
  }

  render() {
    const data = this.props.data;
    const { categories, colors } = performFilterDate(data);

    return (
      <div className="App">
        <Menu  colors={colors} categories={categories}/>
        <Grid data={data}/>
      </div>
    );
  }
}

App.propTypes = {
    data: PropTypes.array.isRequired,
    fetchData: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
    return {
        data: state.productData,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: () => dispatch(fetchProductData()),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);