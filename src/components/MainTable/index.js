import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {
    field: 'username',
    headerName: 'Username',
    width: 150,
    sortable: false,
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    sortable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 150,
    sortable: true,
  },
  {
    field: 'gender',
    headerName: 'Gender',
    sortable: true,
    width: 110,
  },
  {
    field: 'registeredDate',
    headerName: 'Registered Date',
    type: 'number',
    width: 180,
    sortable: true,
  },
];

export default function DataGridDemo({data=[], loading}) {
  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        disableColumnMenu
        loading={loading}
      />
    </Box>
  );
}
