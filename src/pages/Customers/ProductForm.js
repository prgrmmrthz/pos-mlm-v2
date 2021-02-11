import React, { useContext } from "react";
import { useForm, MyForm } from "../../components/useForm";
import { Button } from "react-bootstrap";
import MyControls from "../../components/controls/MyControls";
import * as productService from "../../services/productService";
import { GlobalContext } from "../../context/GlobalState";

export default function ProductForm() {
  const { addProduct, errorX: requestError } = useContext(GlobalContext);
  const initialFormValues = {
    product_name: "",
    retail_price: 0,
    unit_price: 0,
    wholesale_price: 0,
    class_id: 1,
  };

  const validated = () => {
    let temp = {};
    temp.product_name = values.product_name ? "" : "This Field is required";
    temp.class_id = values.class_id.length !== 0 ? "" : "This Field is required";
    temp.retail_price = /^(?:\d*\.\d{1,2}|\d+)$/.test(values.retail_price)
      ? ""
      : "Amount with numbers and 2 decimal only";
    temp.unit_price = /^(?:\d*\.\d{1,2}|\d+)$/.test(values.unit_price)
      ? ""
      : "Amount with numbers and 2 decimal only";
    temp.wholesale_price = /^(?:\d*\.\d{1,2}|\d+)$/.test(values.wholesale_price)
      ? ""
      : "Amount with numbers and 2 decimal only";
    setErrorsX({
      ...temp,
    });

    return Object.values(temp).every((x) => x === "");
  };

  const {
    values,/*  */
    errorsX,
    setErrorsX,
    handleInputChange,
    handleNumberInputChange,
    resetForm
  } = useForm(initialFormValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validated()) {
      const a = {
        name: values.product_name,
        retail_price: values.retail_price,
        unit_price: values.unit_price,
        wholesale_price: values.wholesale_price,
        class_id: values.class_id,
      };
      addProduct(a);
      if (requestError) {
        alert(JSON.stringify(requestError));
      } else {
        alert("Product has been Saved!");
        resetForm();
      }
    }
  };

  return (
    <MyForm onSubmit={handleSubmit}>
      <MyControls.MyInput
        type="text"
        label="Product Name"
        name="product_name"
        value={values.product_name}
        onChange={handleInputChange}
        placeholder="Enter Product Name"
        error={errorsX.product_name}
      />
      <MyControls.MyNumberInput
        type="number"
        label="Retail Price"
        name="retail_price"
        value={values.retail_price}
        onChange={handleNumberInputChange}
        placeholder="Enter Retail Price"
        error={errorsX.retail_price}
      />
      <MyControls.MyNumberInput
        type="number"
        label="Unit Price"
        name="unit_price"
        value={values.unit_price}
        onChange={handleNumberInputChange}
        placeholder="Enter Unit Price"
        error={errorsX.unit_price}
      />
      <MyControls.MyNumberInput
        type="number"
        label="Wholesale Price"
        name="wholesale_price"
        value={values.wholesale_price}
        onChange={handleNumberInputChange}
        placeholder="Enter Wholesale Price"
        error={errorsX.wholesale_price}
      />
      <MyControls.MySelect
        name="class_id"
        label="Classification"
        value={values.class_id}
        onChange={handleInputChange}
        items={productService.getClassificationCollection()}
        error={errorsX.class_id}
      />
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Button variant="secondary" type="button" onClick={resetForm}>
        Reset
      </Button>
    </MyForm>
  );
}
