import React, { Component } from 'react'
import axios from "axios";
import Moment from 'react-moment';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

const Car = (props) => (
    <div className="card bg-light m-2" style={{ width: "300px" }}>
        <div className="card-body">
            <h6 className="card-subtitle mb-2 text-muted text-uppercase">Műszaki érvényesség</h6>
            <h4 className="card-title text-uppercase text-info"><Moment format="YYYY/MM/DD">{props.cars.validity}</Moment></h4>
            <h1 className="card-text text-danger text-uppercase">{props.cars.plate}</h1>

            <button type="button" className="btn btn-dark btn-sm" data-toggle="modal" data-target={'#' + props.cars.plate}>
                Részletek
                        </button>

            <div className="modal fade" id={props.cars.plate} tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Részletes adatok</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body ">
                            <div>
                                <div className="container text-uppercase">
                                    <div className="row p-3">
                                        <div className="col-sm">
                                            Rendszám: <p className="text-danger">{props.cars.plate}</p>
                                        </div>
                                        <div className="col-sm">
                                            Gyártó: <p className="text-danger">{props.cars.manufacturer}</p>
                                        </div>
                                        <div className="col-sm">
                                            Típus: <p className="text-danger">{props.cars.type}</p>
                                        </div>
                                    </div>
                                    <div className="row p-3">
                                        <div className="col-sm">
                                            Évjárat: <p className="text-danger">{props.cars.year}</p>
                                        </div>
                                        <div className="col-sm">
                                            Üzemanyag: <p className="text-danger">{props.cars.fuel}</p>
                                        </div>
                                        <div className="col-sm">
                                            Teljesítmény: <p className="text-danger">{props.cars.hp} LE</p>
                                        </div>
                                    </div>
                                    <div className="row p-3">
                                        <div className="col-sm">
                                            Hengerűrtartalom: <p className="text-danger">{props.cars.engine} cm3</p>
                                        </div>
                                        <div className="col-sm">
                                            Múszaki vizsga érvényes: <p className="text-danger"><Moment format="YYYY/MM/DD">{props.cars.validity}</Moment></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" onClick={() => { props.deleteCar(props.cars._id) }}>Törlés</button>
                            <button type="button" className="btn btn-success">Szerkesztés</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Bezárás</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

class dashboard extends Component {
    constructor(props) {
        super(props);

        this.carList = this.carList.bind(this);

        this.deleteCar = this.deleteCar.bind(this)

        this.state = {
            cars: [],
        };
    }


    componentDidMount() {
        axios
            .get("/api/cars/")
            .then((response) => {
                this.setState({
                    cars: response.data,
                });
            })
            .catch((err) => console.log(err));
    }

    carList() {
        return this.state.cars.map((currentcar) => {
            return <Car cars={currentcar} key={currentcar._id} />;
        });
    }

    deleteCar(id) {
        axios.delete('/api/cars/delete/'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
          cars: this.state.cars.filter(el => el._id !== id)
        })
      }

    render() {
        return (
            <div className="container-fluid fill text-center justify-content-center row pt-2">
                {this.carList()}
            </div>
        )
    }
}

  
dashboard.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps)(dashboard);