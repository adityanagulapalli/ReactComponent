import React from 'react';

import  { Tablerow } from './contact';

export const Table = props => <table>
  <thead>
    <tr>
      <td>createddate</td>
      <td>name</td>
      <td>phone</td>
      <td>title</td>
      <td>email</td>
      <td>sfid</td>
    </tr>
  </thead>
  <tbody>
    {props.contacts.map(contact => <Tablerow key={contact.id} contact={contact} />)}
  </tbody>
  </table>;
