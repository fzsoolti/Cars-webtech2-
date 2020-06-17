import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import {connect} from 'react-redux';

class Landing extends Component {

    componentDidMount(){
        if(this.props.auth.isAuthenticated){
            this.props.history.push('/dashboard');
        }
    }

    render() {
        return (
            <div className="container-fluid fill text-center justify-content-center row pt-4 mt-5">
                <div className="jumbotron jumbotron-fluid w-75 bg-secondary">
                    <div className="container">
                        <h1 className="display-4 text-danger text-uppercase">Autó nyilvántartó</h1>
                        <p className="lead text-white">majd emg ugyis designolom es login lesz itt lol</p>
                    </div>
                </div>
            </div>
        )
    }
}

Landing.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps)(Landing);