import React, { useState, useEffect } from "react";
import { ICustomer } from "../datasources/ICustomer";

interface IProps {
  customer: ICustomer;
  onUpdateCustomer: (id: number, customer: ICustomer) => void;
  setEdit: (bool: boolean) => void;
}

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
  return (
    <div className="customer-form">
      <h1>edit customers</h1>
      <form className="form-edit" onSubmit={onFormSubmit}>
        <div className="form-row">
          <label>Name</label>
          <input
            type="text"
            placeholder="please input name"
            name="name"
            value={customer.name}
            onChange={onInputChange}
          />
          <div className="form-error">too short</div>
        </div>
        <div className="form-row">
          <label>Reference</label>
          <input
            type="number"
            placeholder="please input reference"
            name="reference"
            value={customer.reference}
            onChange={onInputChange}
          />
        </div>
        <div className="form-row">
          <label>Email</label>
          <input
            type="email"
            placeholder="please input age"
            name="email"
            value={customer.email}
            onChange={onInputChange}
          />
        </div>
        <div className="form-row">
          <label>Phone</label>
          <input
            type="number"
            placeholder="please input phone"
            name="phone"
            value={customer.phone}
            onChange={onInputChange}
          />
        </div>
        <div className="form-row">
          <label>Fax</label>
          <input
            type="number"
            placeholder="please input fax"
            name="fax"
            value={customer.fax}
            onChange={onInputChange}
          />
        </div>
        <div className="form-row">
          <button>Update</button>
          <button onClick={() => props.setEdit(false)}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
