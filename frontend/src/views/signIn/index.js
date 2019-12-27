import React, { Component } from 'react';
import Page from './page';
import  {reduxForm} from 'redux-form';
import { connect } from "react-redux";
import { compose } from "redux";
import * as actions from '../../actions';

class SignIn extends Component {

    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    async onSubmit(formData){
        console.log(formData);

        //we need to call some actions
        await this.props.signIn(formData);
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
    reduxForm({form: 'signin'})
)(SignIn);