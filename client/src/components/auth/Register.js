import React, { Component } from 'react'
import axios from 'axios';
import classnames from 'classnames'

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            password: '',
            password2: '',
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            password: this.state.password,
            password2: this.state.password2
        }

        axios.post('/api/users/register', newUser)
            .then(res => console.log(res.data))
            .catch(err => this.setState({ errors: err.response.data }))
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { errors } = this.state;

        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label >Felhasználónév</label>
                        <input type="text" className={classnames('form-control', { 'is-invalid': errors.name })} placeholder="Felhasználónév" name="name" value={this.state.name}
                            onChange={this.onChange.bind(this)} />
                            {errors.name && (<div className= "invalid-feedback">{errors.name}</div>)}
                    </div>
                    <div className="form-group">
                        <label >Jelszó</label>
                        <input type="password" className={classnames('form-control', { 'is-invalid': errors.password })} placeholder="Jelszó" name="password" value={this.state.password}
                            onChange={this.onChange.bind(this)} />
                            {errors.password && (<div className= "invalid-feedback">{errors.password}</div>)}
                    </div>
                    <div className="form-group">
                        <label >Jelszó megerősítése</label>
                        <input type="password" className={classnames('form-control', { 'is-invalid': errors.password2 })} placeholder="Jelszó megerősítése" name="password2" value={this.state.password2}
                            onChange={this.onChange.bind(this)} />
                            {errors.password2 && (<div className= "invalid-feedback">{errors.password2}</div>)}
                    </div>
                    <button type="submit" className="btn btn-primary">Küldés</button>
                </form>
            </div>
        )
    }
}

export default Register;