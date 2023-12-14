import React from 'react';
import { Table } from 'antd';
import data from '../FakeData/data';
import columns from './Column';


const ListSong = () => <Table columns={columns} dataSource={data} />;
export default ListSong;