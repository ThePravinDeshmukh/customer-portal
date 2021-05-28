import axios from 'axios';
import React, { Component, useState } from 'react';
import { IProps } from '../datasources/IProps';
import { ICustomer } from '../datasources/ICustomer';
import { authHeader } from '../_helpers/auth-header';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles, withStyles } from '@material-ui/core';
import { useForm } from '../components/useForm';
import AddCustomerForm from '../components/addCustomerForm';
import EditCustomerForm from '../components/editCustomerForm';
import CustomerTable from '../components/customerTable';

interface ICustomerState {
  customers: ICustomer[]
  loading: boolean;
  errorMessage: string;
}

const defaultCustomers: Array<ICustomer> = [];
const initCurrentCustomer: ICustomer = { reference: 0, name: "", phone: 0, id: 0, email: "", fax: 0 };

 export function Customers() {

  const [customers, setCustomers] = useState(defaultCustomers);
  const [editCustomer, setEditCustomer] = useState(initCurrentCustomer);
  const [editing, setEdit] = useState(false);
  const onAddCustomer = (newCustomer: ICustomer) => {
    const id = customers.length + 1;
    setCustomers([...customers, { ...newCustomer, id }]);
  };
  const onCurrentCustomer = (customer: ICustomer) => {
    setEditCustomer(customer);
    setEdit(true);
  };
  const onUpdateCustomer = (id: number, newCustomer: ICustomer) => {
    setEdit(false);
    setCustomers(customers.map(i => (i.id === id ? newCustomer : i)));
  };
  const onDeleteCustomer = (currentCustomer: ICustomer) => {
    setCustomers(customers.filter(i => i.id !== currentCustomer.id));
  };
    

  // return here
  return (
    <div className="App">
      <div className="user-flex-wrapper">
        {editing ? (
          <EditCustomerForm
            customer={editCustomer}
            onUpdateCustomer={onUpdateCustomer}
            setEdit={setEdit}
          />
        ) : (
          <AddCustomerForm onAddCustomer={onAddCustomer} />
        )}
        <CustomerTable
          customers={customers}
          onEdit={onCurrentCustomer}
          onDelete={onDeleteCustomer}
        />
      </div>
    </div>
  );

  }

// function populateCustomerData() {
//   const headers = authHeader();

//   axios.get('api/customer/all', { headers })
//   .then(response => {      
//     this.setState({ customers: response.data, loading: false });
//   })
//   .catch(error => {      
//       this.setState({ errorMessage: error.message });
//       console.error('There was an error!', error);
//   });

// }



  


