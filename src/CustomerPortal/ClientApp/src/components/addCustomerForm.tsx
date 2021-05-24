import React, { useState } from "react";
import validator, { noErrors, FormErrors } from "../validator";
import { ICustomer } from "../datasources/ICustomer";

interface IProps {
  onAddCustomer: (customer: ICustomer) => void;
}
const initcustomer = {id: 0, name: "", reference: 0, email: "", phone: 0, fax: 0 };
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
  return (
    <div className="customer-form">
      <h3>Add Customers</h3>
      <form className="form-edit" onSubmit={onFormSubmit}>
        <div className="form-row">
          <label>Name</label>
          <input
            type="text"
            placeholder="please input name"
            name="name"
            value={formValue.name}
            onChange={onInputChange}
          />
          {errors["name"] && errors["name"].length > 0 && (
            <div className="form-error">{errors["name"].join(",")}</div>
          )}
        </div>
        <div className="form-row">
          <label>Reference</label>
          <input
            type="number"
            placeholder="please input reference"
            name="reference"
            value={formValue.reference}
            onChange={onInputChange}
          />
          {errors["reference"] && errors["reference"].length > 0 && (
            <div className="form-error">{errors["reference"].join(",")}</div>
          )}
        </div>
        <div className="form-row">
          <label>Email</label>
          <input
            type="email"
            placeholder="please input email"
            name="email"
            value={formValue.email}
            onChange={onInputChange}
          />
          {errors["email"] && errors["email"].length > 0 && (
            <div className="form-error">{errors["email"].join(",")}</div>
          )}
        </div>
        <div className="form-row">
          <label>Phone</label>
          <input
            type="number"
            placeholder="please input phone"
            name="phone"
            value={formValue.phone}
            onChange={onInputChange}
          />
          {errors["phone"] && errors["phone"].length > 0 && (
            <div className="form-error">{errors["phone"].join(",")}</div>
          )}
        </div>
        <div className="form-row">
          <label>Fax</label>
          <input
            type="number"
            placeholder="please input fax"
            name="fax"
            value={formValue.fax}
            onChange={onInputChange}
          />
          {errors["fax"] && errors["fax"].length > 0 && (
            <div className="form-error">{errors["fax"].join(",")}</div>
          )}
        </div>
        <div className="form-row">
          <button>Add new customer</button>
        </div>
      </form>
    </div>
  );
};
export default AddCustomerForm;
