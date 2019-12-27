import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

export default class Input extends Component {
    render(){
        const { input: {value, onChange} } = this.props;
        return(
            <TextField
                name={this.props.name}
                type={this.props.type}
                id={this.props.id}
                label={this.props.label}
                variant={this.props.variant}
                autoComplete={this.props.autoComplete}
                required
                fullWidth
                value = {value}
                onChange = {onChange}
            />
        )
    }
}