import React, { Component } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addCar } from "../actions/carActions";
import classnames from "classnames";

class AddCar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            plate: "",
            validity: "",
            manufacturer: "",
            type: "",
            year: "",
            fuel: "",
            hp: "",
            engine: "",
            errors: {},
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    onSubmit(e) {
        e.preventDefault();

        const carData = {
            plate: this.state.plate,
            validity: this.state.validity,
            manufacturer: this.state.manufacturer,
            type: this.state.type,
            year: this.state.year,
            fuel: this.state.fuel,
            hp: this.state.hp,
            engine: this.state.engine,
        };

        this.props.addCar(carData, this.props.history);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }


    render() {

        const { errors } = this.state;

        return (
            <div className="container w-75 pt-4 mt-5" >
                <form onSubmit={this.onSubmit}>
                    <div className="form-row">
                        <div className="form-group col">
                            <label>Rendszám</label>
                            <input type="text" 
                                className={classnames('form-control', { 'is-invalid': errors.plate })} 
                                placeholder="ASD-123" 
                                name="plate" 
                                value={this.state.plate}
                                onChange={this.onChange.bind(this)} />
                                {errors.plate && (<div className= "invalid-feedback">{errors.plate}</div>)}
                        </div>
                        <div className="form-group col">
                            <label>Műszaki érvényesség</label>
                            <input type="date" 
                                className={classnames('form-control', { 'is-invalid': errors.validity })} 
                                name="validity" 
                                value={this.state.validity}
                                onChange={this.onChange.bind(this)}/>
                                {errors.validity && (<div className= "invalid-feedback">{errors.validity}</div>)}
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col">
                            <label >Gyártó</label>
                            <input type="text" 
                                placeholder="BMW, SKODA, PEUGEOT.." 
                                className={classnames('form-control', { 'is-invalid': errors.manufacturer })} 
                                name="manufacturer" 
                                value={this.state.manufacturer}
                                onChange={this.onChange.bind(this)}/>
                                {errors.manufacturer && (<div className= "invalid-feedback">{errors.manufacturer}</div>)}
                        </div>
                        <div className="form-group col">
                            <label >Típus</label>
                            <input type="text" 
                                placeholder="AUTÓ TÍPUSA"
                                className={classnames('form-control', { 'is-invalid': errors.type })} 
                                name="type" 
                                value={this.state.type}
                                onChange={this.onChange.bind(this)}/>
                                {errors.type && (<div className= "invalid-feedback">{errors.type}</div>)}
                        </div>
                        <div className="form-group col">
                            <label >Évjárat</label>
                            <input type="text" 
                                placeholder="GYÁRTÁSI ÉV" 
                                className={classnames('form-control', { 'is-invalid': errors.year })} 
                                name="year" 
                                value={this.state.year}
                                onChange={this.onChange.bind(this)}/>
                                {errors.year && (<div className= "invalid-feedback">{errors.year}</div>)}
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col">
                            <label >Üzemanyag</label>
                            <input type="text" 
                                placeholder="BENZIN, DÍZEL..." 
                                className={classnames('form-control', { 'is-invalid': errors.fuel })} 
                                name="fuel" 
                                value={this.state.fuel}
                                onChange={this.onChange.bind(this)}/>
                                {errors.fuel && (<div className= "invalid-feedback">{errors.fuel}</div>)}
                        </div>
                        <div className="form-group col">
                            <label >Teljesítmény</label>
                            <input type="text" 
                                placeholder="LÓERŐ"
                                className={classnames('form-control', { 'is-invalid': errors.hp })} 
                                name="hp" 
                                value={this.state.hp}
                                onChange={this.onChange.bind(this)}/>
                                {errors.hp && (<div className= "invalid-feedback">{errors.hp}</div>)}
                        </div>
                        <div className="form-group col">
                            <label >Hengerűrtartalom</label>
                            <input type="text" 
                                placeholder="KÖBCENTI" 
                                className={classnames('form-control', { 'is-invalid': errors.engine })} 
                                name="engine" 
                                value={this.state.engine}
                                onChange={this.onChange.bind(this)}/>
                                {errors.engine && (<div className= "invalid-feedback">{errors.engine}</div>)}
                        </div>
                    </div>
                    <button type="submit" className="btn btn-dark">Hozzáadás</button>
                </form>
            </div>
        )
    }
}

AddCar.propTypes = {
    car: PropTypes.object,
    errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    car: state.car,
    errors: state.errors,
});

export default connect(mapStateToProps, { addCar })(AddCar);