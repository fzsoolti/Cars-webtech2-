import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { loginUser } from '../../actions/authActions';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            name: '',
            password: '',
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

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }


        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const userData = {
            name: this.state.name,
            password: this.state.password
        }

        this.props.loginUser(userData);
    }


    render() {
        const { errors } = this.state;

        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label >Felhasználónév</label>
                        <input type="text" className={classnames('form-control', { 'is-invalid': errors.name })} placeholder="Felhasználónév" name="name" value={this.state.name}
                            onChange={this.onChange} />
                        {errors.name && (<div className="invalid-feedback">{errors.name}</div>)}
                    </div>
                    <div className="form-group">
                        <label >Jelszó</label>
                        <input type="password" className={classnames('form-control', { 'is-invalid': errors.password })} placeholder="Jelszó" name="password" value={this.state.password}
                            onChange={this.onChange} />
                        {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                    </div>
                    <button type="submit" className="btn btn-primary">Küldés</button>
                </form>
            </div>
        )
    }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);