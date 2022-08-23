import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { UserList } from './users';
import { PostCreate, PostEdit, PostList } from './posts';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
console.log(dataProvider);

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
    <Resource name="users" list={UserList} />
  </Admin>
);

export default App;
