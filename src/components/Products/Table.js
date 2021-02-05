import React, {useContext, useEffect} from 'react';
import { Table as BsTable } from 'react-bootstrap';

import { GlobalContext } from '../../context/GlobalState';
import {TableData} from './TableData';

export const Table = () => {
    const {productsList, getProductsList } = useContext(GlobalContext);

    useEffect(()=>{
        getProductsList();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    return (
        <BsTable responsive striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th width={25}></th>
                    <th width={25}></th>
                </tr>
            </thead>
            <tbody>
                {productsList.map(
                    product => (
                        <TableData key={product.id} product={product} />
                    )
                )}
            </tbody>
        </BsTable>
    )
}
