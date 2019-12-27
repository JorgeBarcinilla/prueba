import React, { Component } from 'react'
import Page from './page';
import AppBar from '../../components/appBar'
import  {reduxForm} from 'redux-form';
import { connect } from "react-redux";
import { compose } from "redux";
import * as actions from '../../actions';


class Home extends Component {
    constructor(props){
        super(props);
        this.onSubmitPelicula = this.onSubmitPelicula.bind(this);
        this.onSubmitFuncion = this.onSubmitFuncion.bind(this);
    }

    async componentDidMount(){
        this.props.getFuncions();
        
    }

    async onSubmitPelicula(formData){
        console.log(formData);
        await this.props.createMovie(formData);
        if(!this.props.errorMessage){
            
        }
    }

    async onSubmitFuncion(formData){
        console.log(formData);
        await this.props.createFuncion(formData);

        if(!this.props.errorMessage){
            
        }
    }

    async onDeleteFuncion(formData){
        await this.props.deleteFuncion(formData);
    }

    render() {
        const{ handleSubmit } = this.props;
        return (
            <React.Fragment>
                <AppBar/>
                <Page
                    onSubmitPelicula = {handleSubmit(this.onSubmitPelicula)}
                    onSubmitFuncion = {handleSubmit(this.onSubmitFuncion)}
                    errorMessage = {this.props.errorMessage}
                    movies = {this.props.movies}
                    funcions = {this.props.funcions}
                    user = {this.props.user}
                    onDeleteFuncion = {handleSubmit(this.onDeleteFuncion)}
                />
            </React.Fragment>
            
        )
    }
}
function mapStateToProps(state) {
    return{
        errorMessage: state.auth.errorMessage,
        movies: state.home.movies,
        funcions: state.home.funcions,
        user: state.home.user
    }  
}

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({form: 'createMovie'})
)(Home);
