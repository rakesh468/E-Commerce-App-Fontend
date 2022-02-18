import React from "react";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import * as yup from "yup";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useParams } from "react-router-dom";

const API_URL = "https://e-commerce-backendcode.herokuapp.com";

const formvalidationSchema = yup.object({
  password: yup.string().required("Password Required"),
});

export function Resetpassword() {
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
  const { id } = useParams();
  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: { password: "" },
      validationSchema: formvalidationSchema,
      onSubmit: (values) => {
        console.log("onSubmit", values);
        resetpassword(values);
      },
    });
  const resetpassword = (values) => {
    console.log(values);
    fetch(`${API_URL}/${id}/token`, {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.status === 200) {
          setMsg({
            Message: "Password Changed Successfully",
            status: "success",
          });
          setOpen(true);
          setTimeout(() => history.push("/login"), 3000);
        } else {
          setMsg({ Message: "Invalid Credentials", status: "error" });
          setOpen(true);
        }
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
          <header>Resetpassword</header>
          <TextField
            id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            type="password"
            label="Enter New password "
            error={errors.password && touched.password}
            helperText={errors.password && touched.password && errors.password}
          />
          <Button
            onClick={() => history.push("/resetpassword")}
            variant="contained"
            color="success"
            type="submit"
          >
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
