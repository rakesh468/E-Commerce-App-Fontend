import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import * as yup from "yup";
import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Editproduct.css";

const API_URL = "https://6166c4d613aa1d00170a66f1.mockapi.io";

const formvallidation = yup.object({
  name: yup.string().required(),
  imageUrl: yup.string().required(),
  description: yup.string().required(),
  price: yup.string().required(),
});

export function Editproduct() {
  const { id } = useParams();
  const [data, setdata] = useState(null);

  useEffect(() => {
    fetch(`${API_URL}/ecommerceproducts/${id}`, { method: "GET" })
      .then((data) => data.json())
      .then((dt) => setdata(dt));
  }, [id]);

  return data ? <Updateproduct data={data} /> : "";
}
function Updateproduct({ data }) {
  const history = useHistory();
  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        name: data.name,
        price: data.price,
        imageUrl: data.imageUrl,
        description: data.description,
      },
      validationSchema: formvallidation,
      onSubmit: (updatedproduct) => {
        console.log("ONsubmit", updatedproduct);
        editproduct(updatedproduct)
      },
    });

  const editproduct = (updatedproduct) => {
    fetch(`${API_URL}/ecommerceproducts/${data.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedproduct),
      headers: { "Content-Type": "application/json" },
    }).then(() => history.push("/products"));
  };
  return (
      <form className="edit-form" onSubmit={handleSubmit}>
          <TextField
          id="name"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.name && touched.errors}
          helperText={errors.name && touched.name && errors.name}/>

          <TextField
          name="imageUrl"
          id="imageUrl"
          value={values.imageUrl}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.imageUrl && touched.imageUrl}
          helperText={errors.imageUrl && touched.imageUrl && errors.imageUrl}/>
          <TextField
          id="description"
          name="description"
          value={values.description}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.description && touched.description}
          helperText={errors.description && touched.description && errors.description}/>
          <TextField
          id="price"
          name="price"
          value={values.price}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.price && touched.price}
          helperText={errors.price && touched.price && errors.price}/>

         <Button type="submit" color="success" variant="contained"> Save</Button>


      </form>
  )
}
