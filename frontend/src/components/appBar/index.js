import React, { Component } from 'react';
import Page from './page';
import * as actions from '../../actions';
import { connect } from "react-redux";

class AppBar extends Component {
    constructor(props){
        super(props);
        this.signOut = this.signOut.bind(this);
    }

    signOut(){
        console.log('Sign out is called!');
        this.props.signOut();
    }

    render() {
        return(
            <Page
                handleClick={this.signOut}
            />
        );
    }
}

export default connect(null, actions)(AppBar);