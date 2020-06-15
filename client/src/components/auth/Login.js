import React, { Component } from 'react'

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

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            name: this.state.name,
            password: this.state.password
        }

        console.log(user);
    }


    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label >Felhasználónév</label>
                        <input type="text" className="form-control" placeholder="Felhasználónév" name="name" value={this.state.name}
                            onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                        <label >Jelszó</label>
                        <input type="password" className="form-control" placeholder="Jelszó" name="password" value={this.state.password}
                            onChange={this.onChange} />
                    </div>
                    <button type="submit" className="btn btn-primary">Küldés</button>
                </form>
            </div>
        )
    }
}

export default Login;