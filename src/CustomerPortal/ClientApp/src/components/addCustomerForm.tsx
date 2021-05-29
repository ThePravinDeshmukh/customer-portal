import React, { useState } from "react";
import validator, { noErrors, FormErrors } from "../validator";
import { ICustomer } from "../datasources/ICustomer";
import { Avatar, Button, Container, CssBaseline, Grid, makeStyles, TextField, Typography } from "@material-ui/core";

interface IProps {
  onAddCustomer: (customer: ICustomer) => void;
}


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const initcustomer = { id: 0, name: "", reference: undefined, email: undefined, phone: undefined, fax : undefined};
const AddCustomerForm: React.FunctionComponent<IProps> = props => {
  const [formValue, setFormValue] = useState(initcustomer);
  const [errors, setErrors] = useState<FormErrors>({});
  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const rules = [
      { key: "name", required: true, label: "Name" },
      { key: "reference", required: true, label: "Reference" },
      { key: "phone", required: true, label: "Phone" },
      { key: "name", maxLength: 16, label: "name" },
      { key: "name", minLength: 4, label: "name" },
      { key: "phone", minValue: 999999999, label: "phone" },
      { key: "phone", maxValue: 9999999999, label: "phone" },
      { key: "reference", minValue: 0, label: "Reference" },
      { key: "reference", maxValue: 999999999, label: "Reference" }
    ];
    validator(
      formValue,
      rules,
      (errors: any): any => {
        if (noErrors(errors)) {
          props.onAddCustomer(formValue);
          setFormValue(initcustomer);
          return false;
        }
        setErrors(errors);
      }
    );
  };
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const classes = useStyles();
  
  return (
    <div className={classes.paper}>
    <CssBaseline />
      <Typography component="h2" variant="h5">
        Add New Customer
      </Typography>
        <form className={classes.form} onSubmit={onFormSubmit}>
          <Grid container spacing={1}>
            <Grid item xs={9}>
              <TextField
                id="name"
                label="Customer Name"
                name="name"
                variant="outlined"
                required
                fullWidth
                placeholder="please input name"
                value={formValue.name}
                onChange={onInputChange}
                size="small"
              />
              {errors["name"] && errors["name"].length > 0 && (
                <div className="form-error">{errors["name"].join(",")}</div>
              )}
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="reference"
                label="Reference"
                type="number"
                placeholder="please input reference"
                name="reference"
                value={formValue.reference}
                onChange={onInputChange}
                size="small"
              />
              {errors["reference"] && errors["reference"].length > 0 && (
                <div className="form-error">{errors["reference"].join(",")}</div>
              )}
            </Grid>
            <Grid item xs={4}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type="email"
                id="email"
                label="Email"
                placeholder="please input email"
                name="email"
                value={formValue.email}
                onChange={onInputChange}
                size="small"
              />
              {errors["email"] && errors["email"].length > 0 && (
                <div className="form-error">{errors["email"].join(",")}</div>
              )}
            </Grid>
            <Grid item xs={4}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type="number"
                name="phone"
                label="Phone"
                id="phone"
                placeholder="please input phone"
                value={formValue.phone}
                onChange={onInputChange}
                size="small"
              />
              {errors["phone"] && errors["phone"].length > 0 && (
                <div className="form-error">{errors["phone"].join(",")}</div>
              )}
            </Grid>
            <Grid item xs={4}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type="number"
                name="fax"
                label="Fax"
                id="fax"
                placeholder="please input fax"
                value={formValue.fax}
                onChange={onInputChange}
                size="small"
              />
              {errors["fax"] && errors["fax"].length > 0 && (
                <div className="form-error">{errors["fax"].join(",")}</div>
              )}
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Add new customer
          </Button>

        </form>

        <hr/>

      </div>
  );
};
export default AddCustomerForm;
