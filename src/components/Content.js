import React from 'react';

const Content = () => {
    return (
        <div className="container-fluid fill text-center justify-content-center row pt-4 mt-5">
            <table className="table table-hover w-75 shadow" style={{margin:'8px'}}>
            <thead className="thead-dark">
                <tr>
                <th scope="col">Rendszám</th>
                <th scope="col">Gyártó</th>
                <th scope="col">Típus</th>
                <th scope="col">Évjárat</th>
                <th scope="col">Műszaki érvényesség</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
                </tr>
            </tbody>
            </table>
        </div>
    );
}

export default Content;