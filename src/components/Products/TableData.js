import React, {useContext} from "react";
import { Button } from 'react-bootstrap';

import { GlobalContext } from '../../context/GlobalState';
import { numberWithCommas } from '../../utils/format';

export const TableData = ({product}) => {
  const {deleteProduct} = useContext(GlobalContext);

  return (
    <tr>
      <td>{product.name}</td>
      <td>{numberWithCommas(product.retail_price)}</td>
      <td>{numberWithCommas(product.unit_price)}</td>
      <td>{numberWithCommas(product.wholesale_price)}</td>
      <td width={25}>
        <Button variant="warning" size="sm">
          E
        </Button>
      </td>
      <td width={25}>
        <Button 
          variant="danger" 
          size="sm"
          onClick={()=>deleteProduct(product.id)}>
          X
        </Button>
      </td>
    </tr>
  );
};
