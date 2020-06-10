import React from 'react';

const AddCar = () => {
    return (
        <div className="container w-75 pt-4 mt-5" >
            <form>
            <div className="form-row">
                <div className="form-group col">
                    <label for="inputId">Rendszám</label>
                    <input type="text" className="form-control" id="inputId" placeholder="ASD-123" />
                </div>
                <div className="form-group col">
                    <label for="inputValid">Műszaki érvényesség</label>
                    <input className="form-control" type="date" id="inputValid"/>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col">
                    <label for="inputManufacturer">Gyártó</label>
                    <input type="text" className="form-control" id="inputManufacturer" placeholder="BMW, SKODA, PEUGEOT.." />
                </div>
                <div className="form-group col">
                    <label for="inputType">Típus</label>
                    <input type="text" className="form-control" id="inputType" placeholder="AUTÓ TÍPUSA" />
                </div>
                <div className="form-group col">
                    <label for="inputYear">Évjárat</label>
                    <input type="text" className="form-control" id="inputYear" placeholder="GYÁRTÁSI ÉV" />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col">
                    <label for="inputFuel">Üzemanyag</label>
                    <select class="form-control" id="inputFuel">
                        <option>Benzin</option>
                        <option>Dízel</option>
                        <option>Elektromos</option>
                        <option>Gáz</option>
                        </select>
                </div>
                <div className="form-group col">
                    <label for="inputHP">Teljesítmény</label>
                    <input type="text" className="form-control" id="inputHP" placeholder="LÓERŐ" />
                </div>
                <div className="form-group col">
                    <label for="inputEngine">Hengerűrtartalom</label>
                    <input type="text" className="form-control" id="inputEngine" placeholder="KÖBCENTI" />
                </div>
            </div>
            <button type="submit" className="btn btn-dark">Hozzáadás</button>
            </form>
        </div>
    );
}

export default AddCar;