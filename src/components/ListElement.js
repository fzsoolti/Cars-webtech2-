import React from 'react';
import editicon from '../editicon.png'
import deleteicon from '../deleteicon.png'

const ListElement = (props) => {
    return (
        <div className="card bg-light m-2" style={{width: "300px"}}>
        <div className="card-body">
            <h6 className="card-subtitle mb-2 text-muted text-uppercase">Műszaki érvényesség</h6>
            <h4 className="card-title text-uppercase text-info">{props.valid}</h4>
            <h1 className="card-text text-danger text-uppercase">{props.id}</h1>
                 {/* --------------------------MODAL */}
               <button type="button" className="btn btn-dark btn-sm" data-toggle="modal" data-target={'#' + props.id}>
               Részletek
                </button>

           <div className="modal fade" id={props.id} tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
               <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                   <div className="modal-content">
                   <div className="modal-header">
                       <h5 className="modal-title" id="exampleModalLongTitle">Részletes adatok</h5>
                       <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                           <span aria-hidden="true">&times;</span>
                       </button>
                   </div>
                   <div className="modal-body">
                       <div>
                        <div className="container text-uppercase">
                                <div className="row p-3">
                                    <div className="col-sm">
                                    Rendszám: <p className="text-danger">{props.id}</p>
                                    </div>
                                    <div className="col-sm">
                                    Gyártó: <p className="text-danger">{props.manufacturer}</p>
                                    </div>
                                    <div className="col-sm">
                                    Típus: <p className="text-danger">{props.type}</p>
                                    </div>
                                </div>
                                <div className="row p-3">
                                    <div className="col-sm">
                                    Évjárat: <p className="text-danger">{props.year}</p>
                                    </div>
                                    <div className="col-sm">
                                    Üzemanyag: <p className="text-danger">{props.fuel}</p>
                                    </div>
                                    <div className="col-sm">
                                    Teljesítmény: <p className="text-danger">{props.hp} LE</p>
                                    </div>
                                </div>
                                <div className="row p-3">
                                    <div className="col-sm">
                                    Hengerűrtartalom: <p className="text-danger">{props.engine} cm3</p> 
                                    </div>
                                    <div className="col-sm">
                                    Múszaki vizsga érvényes: <p className="text-danger">{props.valid}</p>
                                    </div>
                                </div>
                        </div>
                       </div>
                   </div>
                   <div className="modal-footer">
                       <button type="button" className="btn btn-danger"><img src={deleteicon} alt="eye" height="25px" width="auto"/> Törlés</button>
                       <button type="button" className="btn btn-success"><img src={editicon} alt="eye" height="25px" width="auto"/> Szerkesztés</button>
                       <button type="button" className="btn btn-secondary" data-dismiss="modal">Bezárás</button>
                   </div>
                   </div>
               </div>
           </div>
        </div>
        </div>
    );
}

export default ListElement;