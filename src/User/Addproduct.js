import React from "react";
import "./Addproduct.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { useHistory } from "react-router-dom";

const formvalidationSchema = yup.object({
  name: yup.string().required("Name required"),
  imageUrl: yup.string().required("image Url Required"),
  description: yup.string().required("Description Required"),
  price: yup.string().required("Price Required"),
});
export function Addproduct() {
  const history = useHistory();
  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        imageUrl: "",
        description: "",
        price: "",
      },
      validationSchema: formvalidationSchema,
      onSubmit: (newproduct) => {
        console.log("onsubmit", newproduct);
        addproduct(newproduct);
      },
    });
  const addproduct = (newproduct) => {
    console.log(newproduct);
    fetch("https://6166c4d613aa1d00170a66f1.mockapi.io/ecommerceproducts", {
      method: "POST",
      body: JSON.stringify(newproduct),
      headers: { "Content-Type": "application/json" },
    }).then(() => history.push("/products"));
  };

  return (
    <form className="cover-form" onSubmit={handleSubmit}>
      <TextField
        id="name"
        name="name"
        label="Enter Name"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.name}
        error={errors.name && touched.name}
        helperText={errors.name && touched.name && errors.name}
        variant="standard"
      />
      <TextField
        id="imageUrl"
        name="imageUrl"
        label="Enter Image Url "
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.imageUrl && touched.imageUrl}
        value={values.imageUrl}
        helperText={errors.imageUrl && touched.imageUrl && errors.imageUrl}
        variant="standard"
      />
      <TextField
        id="description"
        name="description"
        label="Enter Description"
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.description && touched.description && errors.description}
        value={values.description}
        variant="standard"
        helperText={errors.description && touched.description && errors.description}
      />
      <TextField
      id="price"
      name="price"
      label="Enter Price"
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.price}
      variant="standard"
      error={errors.price && touched.price}
      helperText={errors.price && touched.price && errors.price}
      />
      <Button variant="contained" type="submit">Add Product</Button>
    </form>
  );
}
