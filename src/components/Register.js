import React from 'react';

const Register = ( {onRouteChange} ) => {
    return (
        <div className="w-75 pt-4 mt-5" style={{margin:'8px'}}>
            <form>
            <div className="form-row">
                <div className="form-group col-md-6">
                <label for="inputCity">City</label>
                <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="form-group col-md-4">
                <label for="inputState">State</label>
                <select id="inputState" className="form-control">
                    <option selected>Choose...</option>
                    <option>...</option>
                </select>
                </div>
                <div className="form-group col-md-2">
                <label for="inputZip">Zip</label>
                <input type="text" className="form-control" id="inputZip" />
                </div>
            </div>
            <div className="form-group">
                <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck" />
                <label className="form-check-label" for="gridCheck">
                    Check me out
                </label>
                </div>
            </div>
            <button onClick={() => onRouteChange('home')}  type="submit" className="btn btn-dark">REGISZTRACIO</button>
            </form>
        </div>
    );
}

export default Register;