import { Button, Grid, makeStyles, TextField } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { ICustomer } from "../datasources/ICustomer";

interface IProps {
  customer: ICustomer;
  onUpdateCustomer: (id: number, customer: ICustomer) => void;
  setEdit: (bool: boolean) => void;
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


export default function EditCustomerForm(props: IProps) {
  const [customer, setcustomer] = useState(props.customer);
  useEffect(() => setcustomer(props.customer), [props]);
  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!customer.name) {
      console.log("em");
      return false;
    }
    props.onUpdateCustomer(customer.id, customer);
  };
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setcustomer({ ...customer, [name]: value });
  };

  const classes = useStyles();

  return (
    <div className="customer-form">
      <h1>edit customers</h1>
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
                value={customer.name}
                onChange={onInputChange}
                size="small"
              />
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
                value={customer.reference}
                onChange={onInputChange}
                size="small"
              />
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
                value={customer.email}
                onChange={onInputChange}
                size="small"
              />
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
                value={customer.phone}
                onChange={onInputChange}
                size="small"
              />
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
                value={customer.fax}
                onChange={onInputChange}
                size="small"
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Update
          </Button>
          <Button onClick={() => props.setEdit(false)}>Cancel</Button>

        </form>
      
    </div>
  );
}
