import React from 'react';
import ListElement from './ListElement';

const Content = ({ data }) => {
    return (
        <div className="container-fluid fill text-center justify-content-center row pt-4 mt-5">
                <ListElement id={data[0].id} valid={data[0].valid} hp={data[0].hp} year={data[0].year} engine={data[0].engine} type={data[0].type} manufacturer={data[0].manufacturer} fuel={data[0].fuel}/>
                <ListElement id={data[1].id} valid={data[1].valid} hp={data[1].hp} year={data[1].year} engine={data[1].engine} type={data[1].type} manufacturer={data[1].manufacturer} fuel={data[1].fuel}/>
                <ListElement id={data[2].id} valid={data[2].valid} hp={data[2].hp} year={data[2].year} engine={data[2].engine} type={data[2].type} manufacturer={data[2].manufacturer} fuel={data[2].fuel}/>
                <ListElement id={data[3].id} valid={data[3].valid} hp={data[3].hp} year={data[3].year} engine={data[3].engine} type={data[3].type} manufacturer={data[3].manufacturer} fuel={data[3].fuel}/>
        </div>
    );
}

export default Content;