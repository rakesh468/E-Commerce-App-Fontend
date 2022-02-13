import React from "react";
import "./Signup.css";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "@mui/material/Button";
// import {useHistory} from "react-router-dom";
// import Snackbar from "@mui/material/Snackbar";
// import MuiAlert from "@mui/material/Alert";

const formValidationSchema = yup.object({
  firstname: yup.string().required("First Name Required"),
  lastname: yup.string().required("Last Name Required"),
  email: yup.string().email().required("Eamil Id Required"),
  password: yup.string().required("Password Required"),
});

export function Signup() {
  // const [open, setOpen] = React.useState(false);
  // const [Msg, setMsg] = React.useState("");

  // const handleClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }
  //   setOpen(false);
  // };

  // const Alert = React.forwardRef(function Alert(props, ref) {
  //   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  // });
  // const history=useHistory();
  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      },
      validationSchema: formValidationSchema,
      onSubmit:(values)=>{
        console.log("onsubmit",values)
      }
    });
  return (
    <div className="main">
      <div className="sub-main">
        <form onSubmit={handleSubmit}>
          <header>Sign up</header>
          <TextField
            id="firstname"
            name="firstname"
            type="text"
            label="Enter First Name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstname}
            error={errors.firstname && touched.firstname}
            helperText={errors.firstname && touched.firstname && errors.firstname}
          />
         <TextField
            id="lastname"
            name="lastname"
            label="Enter Last Name"
            value={values.lastname}
            error={errors.lastname && touched.lastname}
            onChange={handleChange}
            onBlur={handleBlur}
            helperText={errors.lastname && touched.lastname && errors.lastname}
          />
          <TextField
            id="email"
            name="email"
            type="email"
            label="Enter Email Id"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email && touched.email}
            helperText={errors.email && touched.email && errors.email}
          />
          <TextField
            id="password"
            name="password"
            lable="Enter Password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            type="password"
            label="Enter Password"
            error={errors.password && touched.password}
            helperText={errors.password && touched.password && errors.password}
          />
          <Button type="submit" variant="contained" color="success">Sign  Up</Button>
        </form>
      </div>
      {/* <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={Msg.status}
          sx={{ width: "100%" }}
        >
          {Msg.Message}
        </Alert>
      </Snackbar> */}
    </div>
  );
}
