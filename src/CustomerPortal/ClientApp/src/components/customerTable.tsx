import React from "react";
import { ICustomer } from "../datasources/ICustomer";

interface IProps {
  customers: Array<ICustomer>;
  onEdit: (customer: ICustomer) => void;
  onDelete: (customer: ICustomer) => void;
}

const CustomerTable: React.FunctionComponent<IProps> = props => {
  return (
    <div className="customer-table">
      <h3>View customers</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Reference</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Fax</th>
          </tr>
        </thead>
        <tbody>
          {props.customers.length > 0 ? (
            props.customers.map(i => (
              <tr key={i.id}>
                <td>{i.name}</td>
                <td>{i.reference}</td>
                <td>{i.email}</td>
                <td>{i.phone}</td>
                <td>{i.fax}</td>
                <td>
                  <button onClick={() => props.onEdit(i)}>edit</button>
                  <button onClick={() => props.onDelete(i)}>delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={3}>no customers</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default CustomerTable;
