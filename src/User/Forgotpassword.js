import React from "react";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import "./Forgotpassword.css";

// heroku API //
const API_URL = "https://e-commerce-backendcode.herokuapp.com";

const formValidationSchema = yup.object({
  email: yup.string().required("Email Id Required"),
});

export function Forgotpassword() {
  //snack bar
  const [open, setOpen] = React.useState(false);
  const [Msg, setMsg] = React.useState("");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const history = useHistory();

  // Formik validation //
  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        email: "",
      },
      validationSchema: formValidationSchema,
      onSubmit: (values) => {
        console.log("onsubmit", values);
        forgotpassword(values);
      },
    });

  const forgotpassword = (values) => {
    console.log(values);
    fetch(`${API_URL}/user/resetpassword`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.status === 200) {
          setMsg({
            Message: "Verification Link sent to your Mail",
            status: "success",
          });
          setOpen(true);
          setTimeout(() => history.push("/resetpassword"), 3000);
        } else {
          setMsg({ Message: "Mail is not Registered", status: "error" });
        }
        setOpen(true);
      })
      .catch((err) => {
        setMsg({ message: "error", status: "error" });
        setOpen(true);
      });
  };
  return (
    <div className="reset-main">
      <div className="reset-sub-main">
        <form className="reset-form" onSubmit={handleSubmit}>
          <header>Forgotpassword ?</header>
          <TextField
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            type="email"
            label="Enter Email Id"
            error={errors.email && touched.email}
            helperText={errors.email && touched.email && errors.email}
          />
          <Button variant="contained" color="success" type="submit">
            Submit
          </Button>
        </form>
      </div>
      <Snackbar
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
      </Snackbar>
    </div>
  );
}
