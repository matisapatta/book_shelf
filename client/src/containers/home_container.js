import React, { Component } from 'react';
import { connect } from 'react-redux';



class HomeContainer extends Component {
    render() {
        return (
            <div>
                Home items
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        books:state.books
    }
}

export default connect(mapStateToProps)(HomeContainer);