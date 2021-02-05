import React, {useContext} from "react";
import { Button } from 'react-bootstrap';

import { GlobalContext } from '../../context/GlobalState';

export const TableData = ({product}) => {
  const {deleteProduct} = useContext(GlobalContext);

  return (
    <tr>
      <td>{product.id}</td>
      <td>{product.name}</td>
      <td width={25}>
        <Button variant="warning" size="sm">
          E
        </Button>
      </td>
      <td width={25}>
        <Button 
          variant="danger" 
          size="sm"
          onClick={()=>deleteProduct(product.id)}
        >
          X
        </Button>
      </td>
    </tr>
  );
};
