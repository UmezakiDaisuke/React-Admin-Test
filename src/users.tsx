import * as React from 'react';
import { Datagrid, EmailField, List, TextField, UrlField } from 'react-admin';
import MyUrlField from './UrlField';

export const UserList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="phone" />
      <MyUrlField source="website" />
      <TextField source="company.name" />
    </Datagrid>
  </List>
);
