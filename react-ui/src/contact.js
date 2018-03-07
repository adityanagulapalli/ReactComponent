import * as React from 'react';

export const Tablerow = props => <tr>
  <td>{props.contact.createddate}</td>
  <td>{props.contact.name}</td>
  <td>{props.contact.phone}</td>
  <td>{props.contact.title}</td>
  <td>${props.contact.email}</td>
  <td>${props.contact.sfid}</td>
</tr>;
