import React, {useContext} from "react";
import { Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { GlobalContext } from '../../context/GlobalState';
import { numberWithCommas } from '../../utils/format';

export const TableData = ({product}) => {
  const {deleteProduct} = useContext(GlobalContext);
  const MySwal = withReactContent(Swal);

  const handleDelete = (id) => {
    MySwal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(id);
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }

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
          onClick={()=>handleDelete(product.id)}>
          X
        </Button>
      </td>
    </tr>
  );
};
