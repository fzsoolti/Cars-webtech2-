import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions'

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

    componentDidMount(){
        if(this.props.auth.isAuthenticated){
            this.props.history.push('/dashboard');
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({errors: nextProps.errors});
        }
    }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.registerUser(newUser, this.props.history);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        const { errors } = this.state;

        return (
            <div className="container w-25 pt-4 mt-5">
                <h1 className="p-2">Regisztráció</h1>
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
                    <button type="submit" className="btn btn-dark">Küldés</button>
                </form>
            </div>
        )
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps,{ registerUser })(withRouter(Register));