import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

export default class SimpleSelect extends Component {
    
    render(){
        const { input: {value, onChange} } = this.props;
        return(
            <TextField
            id={this.props.id}
            select
            name={this.props.name}
            label={this.props.label}
            value={value}
            onChange={onChange}
            variant="outlined"
            />
            
        )
    }
}