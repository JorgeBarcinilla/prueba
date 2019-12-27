import React, { Component } from 'react';
import Page from './page';
import  {reduxForm} from 'redux-form';
import { connect } from "react-redux";
import { compose } from "redux";
import * as actions from '../../actions';
//import request from 'superagent';

class SignUp extends Component {

    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        
    }

    async onSubmit(formData){
        console.log(formData);

        await this.props.signUp(formData);

        if(!this.props.errorMessage){
            this.props.history.push('/home');
        }
        
    }

    render() {
        const{ handleSubmit } = this.props;
        return(
            <React.Fragment> 
                <Page
                    onSubmit = {handleSubmit(this.onSubmit)}
                    errorMessage = {this.props.errorMessage}
                />
            </React.Fragment> 
        ); 
    }
}

function mapStateToProps(state) {
    return{
      errorMessage: state.auth.errorMessage
    }  
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({form: 'signup'})
)(SignUp);